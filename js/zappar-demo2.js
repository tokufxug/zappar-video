'use strict';

function onLoadFunction()
{
    initZappar();
}

function initZappar()
{
    const zapparMarker = document.getElementById("zappar-marker");
    const video = document.querySelector("#video");
    const movie = document.getElementById("movie");
    movie.setAttribute("visible", false);

    zapparMarker.addEventListener("zappar-visible", () => {
        movie.setAttribute("visible", true);
        video.play();
    });
    zapparMarker.addEventListener("zappar-notvisible", () => {
        movie.setAttribute("visible", false);
        video.pause();
    });

    document.getElementById('btn-scale-width-expansion').addEventListener('mousedown', function (e) {
        const s = movie.object3D.scale;
        movie.object3D.scale.set(round(s.x + 0.1), s.y, 1.0);
        document.getElementById("video-scale").innerText = "w:" + s.x + ",h:" + s.y;
    });
    
    document.getElementById('btn-scale-width-shrink').addEventListener('mousedown', function (e) {
        const s = movie.object3D.scale;
        movie.object3D.scale.set(round(s.x - 0.1), s.y, 1.0);
        document.getElementById("video-scale").innerText = "w:" + s.x + ",h:" + s.y;
    });
    document.getElementById('btn-scale-height-expansion').addEventListener('mousedown', function (e) {
        const s = movie.object3D.scale;
        movie.object3D.scale.set(s.x, round(s.y + 0.1), 1.0);
        document.getElementById("video-scale").innerText = "w:" + s.x + ",h:" + s.y;
    });
    
    document.getElementById('btn-scale-height-shrink').addEventListener('mousedown', function (e) {
        const s = movie.object3D.scale;
        movie.object3D.scale.set(s.x, round(s.y - 0.1), 1.0);
        document.getElementById("video-scale").innerText = "w:" + s.x + ",h:" + s.y;
    });      
}

function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}
window.onload = onLoadFunction;
