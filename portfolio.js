
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
        removeClass(i)
    }

    function removeClass(i) {
        child[i].addEventListener("animationend", () => {
        child[i].classList.remove(`slide`);});
    }

    setTimeout(Slider, 14500); // DO NOT MESS WITH THIS TIMER
}


const webText = [`Project 01`, `Project 02`, `Project 03`, `Project 04`, `Project 05`, `Project 06`, `Project 07`, `Project 08`, `Project 09`, `Project 10`, `Project 11`, `Project 12`]

