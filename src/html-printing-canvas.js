import html2canvas from 'html2canvas';
import './html-printing-canvas.scss'


let pageHeightInPixel = 1604  // тут может быть какой-нибудь способ определить высоту 1й страницы
    - 100 // верхний
    - 100;  // нижний

function renderPage(pageNum, topOffset, height) {
    let cnv = document.createElement('canvas');
    cnv.id = 'cnv-' + pageNum;
    cnv.style = 'background-color: #ccc;';
    let context = cnv.getContext('2d');
    let img = document.getElementById('bigImg');
    cnv.width = img.clientWidth;
    cnv.height = height;
    context.drawImage(img,
        0, topOffset,   // Start at 0/offset pixels from the left and the top of the image (crop),
        img.clientWidth, height,   // "Get" a w * h area from the source image (crop),
        0, 0,     // Place the result at 0, 0 in the canvas,
        img.clientWidth, height); // With as width / height: 100 * 100 (scale)

    let header = document.querySelector('header').cloneNode(true);
    header.className = 'top-col-p'
    document.body.appendChild(header);
    document.body.appendChild(cnv);
    let footer = document.querySelector('footer').cloneNode(true);
    footer.className = 'btm-col-p'
    document.body.appendChild(footer);
}

function cropping() {

    if (document.body.scrollHeight > 0) {
        let pagesCount = Math.ceil(document.body.scrollHeight/pageHeightInPixel);
        console.debug('pages', pagesCount);
        let offset = 0;
        for (let i=0; i < pagesCount; i++) {
            renderPage(i+1, offset, pageHeightInPixel);
            offset = offset + pageHeightInPixel;
        }
        document.querySelector('#bigImg').style = 'display:none';
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    html2canvas(document.body, {imageTimeout:0}).then(function(canvas) {
        canvas.id = 'cnv';
        document.querySelector('article').style = 'display:none';
        let context = canvas.getContext('2d');
        let dataUrl = canvas.toDataURL("image/png");
        let img = new Image();
        img.id = "bigImg"
        img.src = dataUrl;
        document.body.appendChild(img);
        img.onload = cropping;
    });
});