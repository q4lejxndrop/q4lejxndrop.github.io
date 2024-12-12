let $$ = (selector) => document.querySelector(selector);
let $$$ = (selector) => document.querySelectorAll(selector);
const $$$$ = (selector) => document.getElementById(selector);

// Menu
const btnHome =  $$$$('btn-home');
const btnCV = $$$$('btn-cv');
const btnToolKit = $$$$('btn-toolkit');

let projects = $$$$('projects');
let about = $$$$('about');
let experience = $$$$('experience');
let stack = $$$$('stack');
let toolkit = $$$$('toolkit');

const sonido01 = new Audio('/src/sonidos/Error4.mp3');
sonido01.volume = 0.1;
sonido01.load();

const sonido02 = new Audio('/src/sonidos/gasp-ui-alert.wav');
sonido02.volume = 0.10;
sonido02.load();

// Buttons effects
const btnEffectsOff = $$$$('btn-effects-off');
const btnEffectsOn = $$$$('btn-effects-on');

btnEffectsOff.addEventListener('click', () => {
    btnEffectsOn.style.display = 'block';
    btnEffectsOff.style.display = 'none';
    onBtnHome();
    onBtnCV();
    onBtnToolKit();
    onBtnAvatar();
    sonido02.currentTime = 0;
    sonido02.play();
})

btnEffectsOn.addEventListener('click', () => {
    btnEffectsOff.style.display = 'block';
    btnEffectsOn.style.display = 'none';
    offBtnHome();
    offBtnCV();
    offBtnToolKit();
    offBtnAvatar();
    sonido01.currentTime = 0;
    sonido01.play();
})

btnHome.addEventListener('click', () => {
about.style.display = 'block';
projects.style.display = 'flex';
experience.style.display = 'flex';
stack.style.display = 'flex';
toolkit.style.display = 'none';
});

function onBtnHome() {
    btnHome.addEventListener('click', () => {
        sonido01.currentTime = 0;
        sonido01.play();
    })

    btnHome.addEventListener('mouseenter', () => {
        sonido02.currentTime = 0;
        sonido02.play();
    })
}

function offBtnHome() {
    btnHome.addEventListener('click', () => {
        sonido01.pause();
    })

    btnHome.addEventListener('mouseenter', () => {
        sonido02.pause();
    })
}

function onBtnCV() {
    btnCV.addEventListener('click', () => {
        sonido01.currentTime = 0;
        sonido01.play();
    })

    btnCV.addEventListener('mouseenter', () => {
        sonido02.currentTime = 0;
        sonido02.play();
    })
}

function offBtnCV() {
    btnCV.addEventListener('click', () => {
        sonido01.pause();
    })

    btnCV.addEventListener('mouseenter', () => {
        sonido02.currentTime = 0;
        sonido02.pause();
    })
}

btnToolKit.addEventListener('click', () => {
about.style.display = 'none';
projects.style.display = 'none';
experience.style.display = 'none';
stack.style.display = 'none';
toolkit.style.display = 'flex';
})

function onBtnToolKit() {
    btnToolKit.addEventListener('mouseenter', () => {
        sonido02.currentTime = 0;
        sonido02.play();
    })

    btnToolKit.addEventListener('click', () => {
        sonido01.currentTime = 0;
        sonido01.play();
    })
}

function offBtnToolKit() {
    btnToolKit.addEventListener('mouseenter', () => {
        sonido02.pause();
    })

    btnToolKit.addEventListener('click', () => {
        sonido01.currentTime = 0;
        sonido01.pause();
    })
}

// Avatar img
const avatar = $$$$('avatar');
avatar.addEventListener('click', () => {
avatar.classList.add('style-avatar');

setTimeout(() => {
    avatar.classList.remove('style-avatar');
}, 2000)
})

function onBtnAvatar() {
    avatar.addEventListener('click', () => {
        sonido02.currentTime = 0;
        sonido02.play();
    })
}

function offBtnAvatar() {
    avatar.addEventListener('click', () => {
        sonido02.currentTime = 0;
        sonido02.pause();
    })
}