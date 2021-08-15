import React from 'react';
import html2canvas from 'html2canvas';

export const ImageDisplay = () => {
    const ImageAcquisition = () => {
        html2canvas(document.getElementById("target"),{
            onrendered: function(canvas){
            //imgタグのsrcの中に、html2canvasがレンダリングした画像を指定する。
            var imgData = canvas.toDataURL();
            document.getElementById('result').innerHTML = '<img src="' + imgData + '">';
            console.log(imgData);
            alert(imgData);
            }
        });
        html2canvas(document.querySelector("#target")).then(canvas => {
            var imgData = canvas.toDataURL();
            document.getElementById('result').innerHTML = '<img src="' + imgData + '">';
            console.log(imgData);
            alert(imgData);
        });
    };
    return(
        <div>
            <div id="result"></div>
            <button onClick={ImageAcquisition}>画像を表示する</button>
        </div>

    )
}