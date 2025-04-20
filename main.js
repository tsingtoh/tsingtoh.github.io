
function Head() {
    document.getElementById(`head`).insertAdjacentHTML(`beforeend`, 
        `<link rel="icon" type="image/x-icon" href="/css/fonts/favicon.png">`);
}

function Menu() {
    document.getElementById(`body`).insertAdjacentHTML(`afterbegin`, 
        `<nav id="menu">
        <a id="articles" href="/articles">Articles</a>
        -
        <a id="portfolio" href="/index.html">Portfolio</a>
        </nav>`);
    }

function MenuXtra() {
    document.getElementById(`menu`).insertAdjacentHTML(`beforeend`, 
        `<div>
            <button style="rotate: 50deg; animation-duration: 1.75s;">+</button>
            <button style="rotate: 15deg; animation-duration: 1.8s;">+</button>
            <button style="animation-duration: 1.9s;">-</button>
        </div>`);
}
    

function Foot() {
    document.getElementById(`body`).insertAdjacentHTML(`beforeend`, 
        `<div class="foot-class">
            <footer>

                <p>GET IN TOUCH : <a href="https://www.linkedin.com/in/tsingtoh/" target="_blank">LinkedIn</a> | <a href="mailto:tsingtoh@gmail.com">Email</a></p>
                <p><strong>ALL RIGHTS RESERVED © 2025 TSINGTOH</strong></p>

            </footer>
        </div>`);
}

function Directory() {
    document.getElementById(`directory`).insertAdjacentHTML(`beforeend`, `<include src="/articles/index.html"></include>`);
    InsertHTML();
}

function InsertHTML() {
    let includes = document.getElementsByTagName('include');

    for(var i=0; i<includes.length; i++){
    let include = includes[i];

    load_file(includes[i].attributes.src.value, function(text){
        include.insertAdjacentHTML('afterend', text);
        include.remove();
        });
    }

    function load_file(filename, callback) {
    fetch(filename).then(response => response.text()).then(text => callback(text));
    }
}

// function OpenDirectory() {
//     if (document.getElementById(`directory-content`).hidden == true){
//         document.getElementById(`directory-content`).hidden = false;
//         document.getElementById(`directory-button`).classList.add(`selected`);
//     }
//     else {
//         document.getElementById(`directory-content`).hidden = true;
//         document.getElementById(`directory-button`).classList.remove(`selected`);
//     }
// }



