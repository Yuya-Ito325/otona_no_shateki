import React from 'react';
import html2canvas from 'html2canvas';

const ImageAcquisition = () => {
    html2canvas(document.getElementById("target"),{
        onrendered: function(canvas){
        //imgタグのsrcの中に、html2canvasがレンダリングした画像を指定する。
        var imgData = canvas.toDataURL();
        document.getElementById("result").src = imgData;
        }
    });
};

export const ImageDisplay = () => {
    return(
        <div>
            <img src="" id="result" />
            <button onClick={ImageAcquisition}>画像を表示する</button>
        </div>

    )
}

