window = (function (globe = {}) {
    let _this = globe || new Object({});
    //判断跳转逻辑 h5
    function checkMobileAndRedirect(redirectUrlH5,redirectUrlPC) {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        const mobileRegex = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i;
    
        if (mobileRegex.test(userAgent)) {
            window.location.href = redirectUrl;
        }else{
            window.location.href = redirectUrlPC;
        }
        return
    }
    // 调用函数，假设您想重定向到 "https://wattleyai.github.io/mobile"
    checkMobileAndRedirect('https://wattleyai.github.io/mobile.html','https://wattleyai.github.io/index.html');
    
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

window.onload = function(){
    
}

