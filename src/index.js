import renderHome from "./home.js";
import renderMenu from "./menu.js";
import renderContact from "./contact.js";

const content = document.getElementById('content');
let defaultMode = 'Home';
changeMode(defaultMode);

let currentMode = defaultMode;

const navButtons = document.querySelectorAll('.btn-nav');
navButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        currentMode = e.target.textContent;
        console.log(currentMode);
        changeMode(currentMode);
    });
});

function changeMode(currentMode){
    switch (currentMode){
        case 'Home':
            renderHome();
            return
        case 'Menu':
            renderMenu();
            return
        case 'Contact':
            renderContact();
            return
        default: renderHome();
            return
    }  ;  
};

