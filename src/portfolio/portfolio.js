let $$ = (selector) => document.querySelector(selector);
let $$$ = (selector) => document.querySelectorAll(selector);
const $$$$ = (selector) => document.getElementById(selector);

// Menu
const btnAboutMe =  $$$$('btn-about-me');
// const btnProjects = $$$$('btn-projects');
const btnToolKit = $$$$('btn-toolkit');

// let personalInfo = $$$$('personal-info');
let projects = $$$$('projects');
let about = $$$$('about');
let experience = $$$$('experience');
let stack = $$$$('stack');
let toolkit = $$$$('toolkit');

const sonido = new Audio('/src/sonidos/Error4.mp3');
sonido.volume = 0.3;
sonido.load();

const sonido02 = new Audio('/src/sonidos/gasp-ui-alert.wav');
sonido.volume = 0.5;
sonido02.load();

btnAboutMe.addEventListener('click', () => {
    about.style.display = 'block';
projects.style.display = 'flex';
experience.style.display = 'flex';
stack.style.display = 'flex';
toolkit.style.display = 'none';
sonido.currentTime = 0;
sonido.play();
});

// btnAboutMe.addEventListener('mouseenter', () => {
//     sonido02.currentTime = 0;
//     sonido02.play();
// })

// btnProjects.addEventListener('click', () => {
// personalInfo.style.display = 'none';
// toolkit.style.display = 'none';
// projects.style.display = 'flex';
// sonido.currentTime = 0;
// sonido.play();
// });

// btnProjects.addEventListener('mouseenter', () => {
//     sonido02.currentTime = 0;
//     sonido02.play();
// })

btnToolKit.addEventListener('click', () => {
about.style.display = 'none';
projects.style.display = 'none';
experience.style.display = 'none';
stack.style.display = 'none';
toolkit.style.display = 'flex';
sonido.currentTime = 0;
sonido.play();
})

btnToolKit.addEventListener('mouseenter', () => {
    sonido02.currentTime = 0;
    sonido02.play();
})


// Avatar img
const avatar = $$$$('avatar');
avatar.addEventListener('click', () => {
sonido02.currentTime = 0;
sonido02.play();
avatar.classList.add('rotate-avatar');

setTimeout(() => {
    avatar.classList.remove('rotate-avatar');
}, 2000)
})