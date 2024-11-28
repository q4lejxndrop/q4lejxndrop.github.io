// DOM capture elements
let $$ = (selector) => document.querySelector(selector);
let $$$ = (selector) => document.querySelectorAll(selector);
const $$$$ = (selector) => document.getElementById(selector);
// Add Dark-mode
document.addEventListener('DOMContentLoaded', () => {
const btnDarkMode= document.getElementById('btn-dark-mode');
const iconDark= document.getElementById('icon-dark');
const iconLight= document.getElementById('icon-light');

let stateToggleDarkMode = true;
btnDarkMode.addEventListener('click', () => {
if(stateToggleDarkMode){
    document.body.classList.add('dark-mode');
    iconDark.style.display='block';
    iconLight.style.display='none';
    document.body.classList.add('transition-translate-bg');
} else {
    document.body.classList.remove('dark-mode')
    iconLight.style.display='block';
    iconDark.style.display='none';
}
stateToggleDarkMode = !stateToggleDarkMode;
});
});

// Decargar PDF
document.addEventListener('DOMContentLoaded', () => {
const btnDownload = $$$$('btn-download');

function downloadPDF(url, namePDF) {

    let link = document.createElement('a');
    link.href = url;
    link.download = namePDF;

        // Simula un clic en el enlace
        document.body.appendChild(link);
        link.click();
    
        document.body.removeChild(link);     
}

btnDownload.addEventListener('click', function() {
    downloadPDF('/src/cv/pdf/cv.pdf', 'Alejandro Bedoya Riaño cv');
    console.log('ui')
});
});
