'use strict';
function onLoadFunction()
{
    /*document.getElementById("btnConfirm").addEventListener("click", () => {
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false,
        }).then(s => {
            document.getElementById("ar-view").style.display = 'block';
            document.getElementById("confirm").style.display = 'none';
        }).catch(e => {  
        });
    });*/
    
    
    document.getElementById("btnConfirm").addEventListener("click", () => {
        ZapparThree.permissionRequest().then(granted => {
            const system = document.querySelector("a-scene").systems["zappar-camera"] as any;
            system.permissionGranted = granted;
            if (granted) {
                system.camera.start(system.userFacing);
                document.getElementById("confirm").style.display = 'none';
                document.getElementById("ar-view").style.display = 'block';
                return;
            }
            else
            {
                //ZapparThree.permissionDeniedUI();
                console.log('Denied');
            }
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
