window = (function (globe = {}) {
    let _this = globe || new Object({});
    _this.times = _this.times || +(new Date);
    _this.document ? _this.document : _this.document = {};
    _this.appendCode = function (temp) {
        this.document.write(temp)
    };
    _this.JsToHtml = (function () {
        return function (temp) {
            let htmltemp = _this.document.createElement("div");
            htmltemp.textContent != undefined ? htmltemp.textContent = temp : htmltemp.innerHTML = temp;
            _this.document.write(htmltemp.textContent);
            htmltemp = null;
            return htmltemp;
        }
    })();


    _this._init = function () {
        //添加公共的css和js
        _this.appendCode(`<script src="https://cdn.tailwindcss.com/3.4.1"><\/script>`);
        _this.appendCode(`<link rel="stylesheet" href="./static/css/index.css?v=0.0.1&t=${_this.times}">`);
    };
    _this._init();
    return _this;
})(window);