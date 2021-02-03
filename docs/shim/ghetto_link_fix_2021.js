fc_chatbox.prototype.addnormal = function (t, e, n, s, i, o, c, r){
    if (i.indexOf("href") != -1) {
        matchez = i.match(/^.*<a href=("|')((https?):\/\/[^\s$.?#].[^\s]*)('|").*((https?):\/\/[^\s$.?#].[^\s]*)<\/a>.*$/);
        i = i.replace(matchez[2],matchez[5]);
    }
    var l = !1;
    (this.isscrollpinned() || e === this.ws.username) && (l = !0);
    try {
        if (0 < r) {
            if (console.log('fc_chatbox.prototype.addnormal comparing msg number: ' + r + ' this.lastmn: ' + this.lastmn), r <= this.lastmn) return;
            this.lastmn = r
        }
        var a = document.createElement('p');
        a.className = '',
            a.appendChild(this.mkts(t));
        var h = document.createElement('span');
        h.innerHTML = e + ': ',
            h.className = 'nm ' + this.ml2nc(n),
            h.setAttribute('data-username', e),
            h.onclick = this.menu_cb,
            a.appendChild(h),
            (h = document.createElement('span')).style.color = o,
            h.className = 'msg fs_' + c,
            h.innerHTML = i,
            a.appendChild(h),
            this.elem.appendChild(a),
        l && this.scrolldown()
    } catch (t) {
        console.log('fc_chatbox.prototype.addnormal exception: ' + t)
    }
}