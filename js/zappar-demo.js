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
        if (zapparMarker.object3D)
        {
            zapparMarker.object3D.matrixAutoUpdate = true;
            if (zapparMarker.object3D.scale)
            {
                let s = zapparMarker.object3D.scale;
                console.log("SCALE:" + s.x + "," + s.y + "," + s.z);
            }
            else
            {
                console.log("SCALE Not Found");
            }
        }
        else
        {
            console.log("Object3D Not Found");
        }
        video.play();
    });
    zapparMarker.addEventListener("zappar-notvisible", () => {
        movie.setAttribute("visible", false);
        video.pause();
        zapparMarker.object3D.matrixAutoUpdate = false;
    });
}
window.onload = onLoadFunction;
