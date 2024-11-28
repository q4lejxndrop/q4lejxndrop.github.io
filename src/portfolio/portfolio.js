let $$ = (selector) => document.querySelector(selector);
let $$$ = (selector) => document.querySelectorAll(selector);
const $$$$ = (selector) => document.getElementById(selector);

// Menu
const btnAboutMe =  $$$$('btn-about-me');
const btnProjects = $$$$('btn-projects');

let personalInfo = $$$$('personal-info');
let projects = $$$$('projects');

btnAboutMe.addEventListener('click', () => {
personalInfo.style.display = 'flex';
projects.style.display = 'none';
});

btnProjects.addEventListener('click', () => {
personalInfo.style.display = 'none';
projects.style.display = 'flex';
});

