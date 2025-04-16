window.onload = function() {
    Head()
}

function Head() {
    document.getElementById(`head`).insertAdjacentHTML(`beforeend`, 
        `<link rel="icon" type="image/x-icon" href="/css/fonts/favicon.png">`);
}

function Menu() {

    document.getElementById(`body`).insertAdjacentHTML(`afterbegin`, 
        `<nav id="menu">
        <a id="articles" href="/articles.html">Articles</a>
        -
        <a id="portfolio" href="/index.html">Portfolio</a>
        
            <div>
            <button>+</button>
            <button>+</button>
            <button>-</button>
            </div>

        </nav>`);
    }
    

function Foot() {

    document.getElementById(`body`).insertAdjacentHTML(`beforeend`, 
        `<div class="foot-class">
            <footer>

                <p>GET IN TOUCH : <a href="https://www.linkedin.com/in/tsingtoh/" target="_blank">LinkedIn</a> | <a>Email</a></p>
                <p><strong>ALL RIGHTS RESERVED © 2025 TSINGTOH</strong></p>

            </footer>
        </div>
        `);
}


function WebDev() {
    document.getElementById(`web-dev`).classList.add(`selected`);
    document.getElementById(`writer`).classList.remove(`selected`);

    document.getElementById(`writing`).style.display = `none`;
    document.getElementById(`web-design`).style.display = `flex`;
}

function Writer() {
    document.getElementById(`writer`).classList.add(`selected`);
    document.getElementById(`web-dev`).classList.remove(`selected`);

    document.getElementById(`web-design`).style.display = `none`;
    document.getElementById(`writing`).style.display = `block`;
}
