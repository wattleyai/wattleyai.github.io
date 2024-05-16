!(function (globe) {
    "use strict";
    globe = globe || new Object({});
    globe.times = +(new Date);
    globe.document ? globe.document : globe.document = window.document;
    globe.appendCode = function (temp) {
        this.document.write(temp)
    };
    globe.JsToHtml = (function(){
        let _this = this;
        return function(temp){
            let htmltemp = _this.document.createElement("div");
            htmltemp.textContent != undefined ? htmltemp.textContent = temp : htmltemp.innerHTML = temp;
            _this.document.write(htmltemp.textContent);
            htmltemp = null;
            return htmltemp;
        }
    })();


    globe._init = function() {
        //添加公共的css和js
        this.appendCode(`<link rel="stylesheet" href="./static/css/index.css?v=0.0.1&t=${this.times}">`);
        // this.appendCode(`<script src="./static/js/index.js?v=0.0.1&t=${times}"><\/script>`);

    };
    globe._init();
})(window);