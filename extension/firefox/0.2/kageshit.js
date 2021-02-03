var shim = `
function include(scriptUrl) {
    return new Promise((resolve, reject) => {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", scriptUrl);
        xmlhttp.onreadystatechange = function () {
            if ((xmlhttp.status < 400) && (xmlhttp.readyState === 4)) {
                eval(xmlhttp.responseText);
                new Promise(async function (r2) {
                    await sleep(500);
                    r2(true);
                }).then(resolve(true));
            }
        };
        xmlhttp.send();
    });

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

lib_scriptz = [
    'https://codekane.github.io/kageshit/shim/jquery-3.5.1.min.js'
]
scriptz_idx = 0;

//setup a function that loads a single script
function load_lib_scriptz() {
    return new Promise(resolve => {
        Promise.all(lib_scriptz.map(script => {
            include(script)
        })).then(() => {
            console.log('bootstrapped jq/sc')
            resolve(true)
        })
    })
}


function bootstrap_fixes() {
    fix_scriptz = [
        // fix imgUr links
        'https://codekane.github.io/kageshit/shim/ghetto_link_fix_2021.js',
        'https://codekane.github.io/kageshit/shim/dongshim.js'
    ];
    scriptz_idx = 0;

    Promise.all(fix_scriptz.map(script => {
        include(script)
    })).then(() => {
        console.log('bootstrapped fixes')
    })

}

load_lib_scriptz().then(async function () {
    while (typeof (jQuery) !== "function") {
        await sleep(500);
    }
    jQuery.noConflict();
}).then(() => {
    bootstrap_fixes()
});

`

var kageshit = document.createElement('script');
kageshit.type = 'text/javascript';
kageshit.async = true;
kageshit.innerHTML = shim;

document.head.appendChild(kageshit);
