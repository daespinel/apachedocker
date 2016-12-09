/**
 * Created by choukri on 21/08/2014.
 */
(function() {
    /**
     * Create a hidden frame
     * @param src
     * @return {HTMLElement}
     */
    function frame(src) {
        var aFrame = document.createElement('iframe');
        aFrame.src = src;
        aFrame.style.display = 'none';
        aFrame.style.visibility = 'hidden';
        aFrame.style.opacity = '0';
        aFrame.style.width = '0px';
        aFrame.style.height = '0px';
        aFrame.style.position = 'absolute';

        return aFrame;
    }

    /**
     * Build an URL with parameters
     * @param httpUrl
     * @param parameters
     * @return httpUrl
     */
    function url(httpUrl, parameters) {
        parameters = parameters || {};

        var i = 0;
        for (var key in parameters) {
            if (parameters.hasOwnProperty(key)) {
                httpUrl += (i === 0 || !httpUrl.indexOf('?')) ? '?' : '&';
                httpUrl += key + '=' + urlencode(parameters[key]);
            }
            i++;
        }
        return httpUrl;
    }


    /**
     * DMP
     */
    var dmpURL = url(document.location.protocol + '//asset.easydmp.net/dn.html?v2', {});

// create (invisible) `DMP frame`
    var dmpFrame = frame(dmpURL);

// append DMP frame
    document.body.insertBefore(dmpFrame, document.body.firstChild);

})();