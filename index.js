const mobileMenuEl = document.getElementById('mobileMenu');

/*MENU*/
/**Opens mobile menu when clicked*/
mobileMenuEl.addEventListener('click', function(){
    if (mobileMenuEl.style.display == 'flex'){
        menuDisplay();
    }
});

/**sets menu display to flex */
export function menuDisplay() {
    const navMenuEl = document.getElementById('navMenu');
    if (navMenuEl.style.display === 'flex'){
        navMenuEl.style.display = 'none';
    } else {
        navMenuEl.style.display = 'flex';
    }
}

    /***TODOs
     * 1. take mentos advice and refactor notes
     * 2. set up notes to use separate pages
     * 3. set up firebase for inputs
     * 4. move header menu
     * 5. refactor background to be in separate div
     * 6. make mobile friendly
     * 7. make mobile "app"
     */
// }

