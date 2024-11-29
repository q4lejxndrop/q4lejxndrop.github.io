let $$ = (selector) => document.querySelector(selector);
let $$$ = (selector) => document.querySelectorAll(selector);
const $$$$ = (selector) => document.getElementById(selector);

// Menu
const btnAboutMe =  $$$$('btn-about-me');
const btnProjects = $$$$('btn-projects');
const btnToolKit = $$$$('btn-toolkit');

let personalInfo = $$$$('personal-info');
let projects = $$$$('projects');
let toolkit = $$$$('toolkit');

btnAboutMe.addEventListener('click', () => {
projects.style.display = 'none';
toolkit.style.display = 'none';
personalInfo.style.display = 'flex';
});

btnProjects.addEventListener('click', () => {
personalInfo.style.display = 'none';
toolkit.style.display = 'none';
projects.style.display = 'flex';
});

btnToolKit.addEventListener('click', () => {
    personalInfo.style.display = 'none';
    projects.style.display = 'none';
    toolkit.style.display = 'flex';
})

