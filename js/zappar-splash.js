'use strict';

function onLoadFunction()
{
    document.getElementById("btnConfirm").addEventListener("click", () => {
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false,
        }).then(s => {
            document.getElementById("confirm").style.display = 'none';
            document.getElementById("ar-view").style.display = 'block';
        }).catch(e => {  
        });
    });
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
}

function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}
window.onload = onLoadFunction;
