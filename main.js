window.onload = function() {
    Head()
}

function Head() {
    document.getElementById(`head`).insertAdjacentHTML(`beforeend`, 
        `<link rel="icon" type="image/x-icon" href="./css/icon/favicon.png">`);
}

function Menu() {

    document.getElementById(`body`).insertAdjacentHTML(`afterbegin`, 
        `<nav id="menu">
        <a href="./index.html">Home</a>
        <a href="./articles.html">Articles</a>
        <a href="./about.html">About</a>
        </nav>`);
    }
    

    

