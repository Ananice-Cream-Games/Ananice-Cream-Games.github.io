setTimeout(() => {
    let canvas = document.getElementById("unity-canvas");
    let body = document.body
    canvas.setAttribute("height", body.offsetHeight );
    canvas.setAttribute("width", body.offsetHeight * 1080.0 / 1920.0);
}, 1000)