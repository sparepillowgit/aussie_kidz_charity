// This script file handles the navigation item underlines when scrolling

let navLinks = ["Mission", "History", "Donate", "Contact"];

function navScroll() {
    let pos;

    switch (true) {
        case (window.pageYOffset < 100):
            navReset();
            break;
        case (window.pageYOffset > window.innerHeight * 1 && window.pageYOffset < window.innerHeight * 2):
            navReset();
            pos = 1;
            navChange(pos);
            break;
        case (window.pageYOffset > window.innerHeight * 3 && window.pageYOffset < window.innerHeight * 4):
            navReset();
            pos = 2;
            navChange(pos);
            break;
        case (window.pageYOffset > window.innerHeight * 5 && window.pageYOffset < window.innerHeight * 6):
            navReset();
            pos = 3;
            navChange(pos);
            break;
        case (window.pageYOffset > window.innerHeight * 7 && window.pageYOffset < window.innerHeight * 8):
            navReset();
            pos = 4;
            navChange(pos);
            break;
    }
}

function navReset() {
    for (let i = 1; i < 5; i++) {
        document.querySelector("li:nth-child(" + i + ")").style.borderBottom = "0";
    }
}

function navChange(pos) {
    document.querySelector("li:nth-child(" + pos + ")").style.borderBottom = "4px solid #f536ac";
}