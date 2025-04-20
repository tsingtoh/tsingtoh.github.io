

function WebDev() {
    document.getElementById(`web-dev`).classList.add(`selected`);
    document.getElementById(`writer`).classList.remove(`selected`);

    document.getElementById(`writing`).classList.remove(`make-visible`);
    document.getElementById(`web-design`).classList.add(`make-visible`);

        document.getElementById(`project-text`).innerText = `Select a project`
}

function Writer() {
    document.getElementById(`writer`).classList.add(`selected`);
    document.getElementById(`web-dev`).classList.remove(`selected`);

    document.getElementById(`web-design`).classList.remove(`make-visible`);
    document.getElementById(`writing`).classList.add(`make-visible`);

    document.getElementById(`project-text`).innerText = `No projects available`
}


function Slider() {
    var root = document.getElementById(`web-design`)
    var child = root.getElementsByClassName(`column`);
    var nodes = child.length;

    for (i = 0; i < nodes; i++) {
        if(child[i].classList.contains(`slide`) == false) {
            addClass(i);
        }
    }

    function addClass(i) {
        setTimeout(function() {child[i].classList.add(`slide`);}, i * 1000);   
        removeClass(i);
    }

    function removeClass(i) {
        child[i].addEventListener("animationend", () => {
        child[i].classList.remove(`slide`);});
    }

    setTimeout(Slider, 14500); // DO NOT MESS WITH THIS TIMER
}



// PROJECT DESCRIPTIONS

const WebProjects = [
    {Name : `Project 01 Type Description`, Description : `A Slightly Detailed Description of the Project`},
    {Name : `Project 02 Type Description`, Description : `A Slightly Detailed Description of the Project`},
    {Name : `Project 03 Type Description`, Description : `A Slightly Detailed Description of the Project`},
    {Name : `Project 04 Type Description`, Description : `A Slightly Detailed Description of the Project`},
    {Name : `Project 05 Type Description`, Description : `A Slightly Detailed Description of the Project`},
    {Name : `Project 06 Type Description`, Description : `A Slightly Detailed Description of the Project`},
    {Name : `Project 07 Type Description`, Description : `A Slightly Detailed Description of the Project`},
    {Name : `Project 08 Type Description`, Description : `Boo!`},
    {Name : `Project 09 Type Description`, Description : `Did I get ya?`},
    {Name : `Project 10 Type Description`, Description : `A Slightly Detailed Description of the Project`},
    {Name : `Project 11 Type Description`, Description : `A Slightly Detailed Description of the Project`},
    {Name : `Project 12 Type Description`, Description : `A Slightly Detailed Description of the Project`}]



function ProjectText(index) {
        document.getElementById(`project-text`).innerText = WebProjects[index].Name;
        document.getElementById(`project-description`).innerText = WebProjects[index].Description
}

function OrigintalText() {
    document.getElementById(`project-text`).innerText = `Select A Project`;
    document.getElementById(`project-description`).innerText = ``

}