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

    document.getElementById('btn-scale-width-expansion').addEventListener('mouseup', function (e) {
        const s = movie.scale;
        movie.scale.set(s.x + 0.1, s.y, 1.0);
    });
    
    document.getElementById('btn-scale-width-shrink').addEventListener('mouseup', function (e) {
        const s = movie.scale;
        movie.scale.set(s.x - 0.1, s.y, 1.0);
    });
    document.getElementById('btn-scale-height-expansion').addEventListener('mouseup', function (e) {
        const s = movie.scale;
        movie.scale.set(s.x, s.y + 0.1, 1.0);
    });
    
    document.getElementById('btn-scale-height-shrink').addEventListener('mouseup', function (e) {
        const s = movie.scale;
        movie.scale.set(s.x, s.y - 0.1, 1.0);
    });      
}
window.onload = onLoadFunction;
