function spektrixGetIframeCoords(elem) {
    var body = document.body;
    var docEl = document.documentElement;

    var box = elem.getBoundingClientRect();

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var clientTop = docEl.clientTop || body.clientTop || 0;
    var top  = box.top +  scrollTop - clientTop;

    return { top: Math.round(top) };
}

function scrollSpektrixIframe(iframeActiveElementOffset) {
    var iframe = document.getElementById('SpektrixIFrame');
    var spektrixIframeOffset = spektrixGetIframeCoords(iframe).top;

    window.scrollTo(0, spektrixIframeOffset + iframeActiveElementOffset);
}

window.addEventListener('message', function(event) {
    var spektrixHostnameRegex = /\.spektrix\.com(:\d+)?$/i;
    if (spektrixHostnameRegex.test(event.origin)) {
        try {
            var message = JSON.parse(event.data);    
            var offset = message['spektrixOffset'];

            if (offset && !isNaN(offset) && offset > 0) {
                scrollSpektrixIframe(offset);
            }
        } catch (ex) {
            return;
        }
    }
} );