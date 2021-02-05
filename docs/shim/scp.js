function perform_queue_operation(user, url_matches, operation) {
    if (url_matches.length > 0) {
        fc_operation_map[operation](user, url_matches[0])
    }
}

function getSCUrlMatches(i) {
    return i.match(/https:\/\/soundcloud.com\/([\w\-]*)\/([\w\-]*)/);
}

function sc_delete(user, url) {
    let matching_track = sc_queue.map((x, index) => {
        return {'user': x.user, 'url': x.url, 'index': index}
    }).filter((x) => x.user === user && x.url === url)
    matching_track.length !== 0 ?
        sc_queue.splice(matching_track[0].index, 1) : null;
}

function sc_add(user, url) {

    dupes = sc_queue.filter(x => {
        x.user === x.user && x.url === x.url
    })
    if (dupes.length === 0) {
        sc_queue.push({
            "user": user,
            "url": url
        })
    }

}

new Promise((resolve => {
    sc_queue = [];
    old_push = sc_queue.push;
    normal_addnormal = fc_chatbox.prototype.addnormal;

    fc_operation_map = {
        'del': sc_delete,
        'add': sc_add
    }

    resolve(true)

})).then(function () {

    Object.defineProperty(sc_queue, "push", {
        enumerable: false, // hide from for...in
        configurable: false, // prevent further meddling...
        writable: false, // see above ^
        value: function () {
            if (sc_queue.length === 0) {
                //todo better error/fuckery handling across all this
                widgie.isPaused((is_it) => {
                    is_it ?
                        widgie.load(arguments[0].url, {"auto_play": true}) :
                        old_push.apply(this, arguments)
                })

            } else {
                old_push.apply(this, arguments)
            }
        }
    });

    fc_chatbox.prototype.addnormal = function (t, e, n, s, i, o, c, r) {
        let url_matches;
        url_matches = getSCUrlMatches(i);
        if (i.indexOf('!sc_add') !== -1) {
            perform_queue_operation(e, url_matches, 'add');
        } else if (i.indexOf('!sc_del') !== -1) {
            perform_queue_operation(e, url_matches, 'del');
        }
        normal_addnormal.apply(this, arguments)
    }
    jQuery.get('https://codekane.github.io/kageshit/shim/sc_markup.html', function (data) {
        new Promise((resolve, reject) => {
            jQuery("#hdr_cnt").append(data);
            resolve(true);
        }).finally(() => {
            widgie = SC.Widget(jQuery('#scdiv')[0].id);
            jQuery('#volumeSlider')[0].oninput = function (t) {
                widgie.setVolume(t.target.valueAsNumber);
            }
            widgie.bind(SC.Widget.Events.PLAY, function () {
                widgie.setVolume(jQuery('#volumeSlider')[0].valueAsNumber)
            })
            widgie.bind(SC.Widget.Events.FINISH, function () {
                if (sc_queue.length !== 0) {
                    next_track = sc_queue.pop()
                    widgie.load(next_track.url, {"auto_play": true})
                } else {
                    console.log("Empty! Waiting for more tracks")
                }
            })
        });
    })
})



