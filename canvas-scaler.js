setTimeout(() => {
    let canvas = document.getElementById("unity-canvas");
    let height = document.documentElement.clientHeight
    canvas.setAttribute("height", height );
    canvas.setAttribute("width", height * 1080.0 / 1920.0);
}, 1000)