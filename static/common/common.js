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
        _this.appendCode(`<script src="https://cdn.bootcss.com/three.js/92/three.js"><\/script>`);
        _this.appendCode(`<script type="importmap">
        {
            "imports": {
                "three": "https://cdn.jsdelivr.net/npm/three@<version>/build/three.module.js",
                "three/addons/": "https://cdn.jsdelivr.net/npm/three@<version>/examples/jsm/"
            }
        }
        </script>`);
        _this.appendCode(`<link rel="stylesheet" href="./static/css/index.css?v=0.0.1&t=${_this.times}">`);
    };
    _this._init();
    return _this;
})(window);

window.onload = function(){
    _backgroundinit();
}

let _backgroundinit = function () {
    let camera, scene, renderer, clock;
    let uniforms;
    function init() {
        const container = document.getElementById("shader");
        clock = new THREE.Clock();
        camera = new THREE.Camera();
        camera.position.z = 1;
        scene = new THREE.Scene();
        const geometry = new THREE.PlaneBufferGeometry(2, 2);
        const texture = new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/8/84/Male_and_female_chicken_sitting_together.jpg');
        uniforms = {
            u_time: { type: "f", value: 1.0 },
            u_resolution: { type: "v2", value: new THREE.Vector2() },
            uTexture: {
                value: texture
            }
        };
        const material = new THREE.ShaderMaterial({
            uniforms,
            vertexShader: document.getElementById("vertex").textContent,
            fragmentShader: document.getElementById("fragment").textContent
        });

        material.transparent = true;
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);
        onWindowResize();
        window.addEventListener("resize", onWindowResize);
    }

    function onWindowResize() {
        renderer.setSize(window.innerWidth, window.innerHeight);
        uniforms.u_resolution.value.x = renderer.domElement.width;
        uniforms.u_resolution.value.y = renderer.domElement.height;
    }

    function render() {
        uniforms.u_time.value = clock.getElapsedTime();
        renderer.render(scene, camera);
    }

    function animate() {
        render();
        requestAnimationFrame(animate);
    }

    init();
    animate();
    console.log("background draw success");
};