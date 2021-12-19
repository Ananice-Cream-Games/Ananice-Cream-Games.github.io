setTimeout(() => {
    let canvas = document.getElementById("unity-canvas");
    let body = document.body
    canvas.setAttribute("height", body.style.height);
    canvas.setAttribute("width", body.style.height * 1080 / 1920);
}, 1000)