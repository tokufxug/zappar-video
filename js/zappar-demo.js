'use strict';

function onLoadFunction()
{
    initLocationARZappar();
}

function initLocationARZappar()
{
    LocationARZappar.init();
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
    
    const zapparMarkerSize = () => {
        const gm = zapparMarker.getAttribute('geometry');
        console.log("width:" + gm.widht + ",height:" + gm.height);
    } 
    setTimeout(zapparMarkerSize, 1000);
}
window.onload = onLoadFunction;
