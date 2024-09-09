import { menuDisplay } from './index.js';

//menu
const mobileMenuEl = document.getElementById('mobileMenu');

//Opens or closes mobile menu when clicked
mobileMenuEl.addEventListener('click', function(){
    if (mobileMenuEl.style.display !== 'none'){
        menuDisplay();
    }
});