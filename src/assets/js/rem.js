(function (doc, win) {
    var docEl = doc.documentElement,
        // resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
        }
    window.onresize = function () {
        recalc();
    }
    window.onload = function () {
        recalc();
    }
    recalc();
})(document, window);
