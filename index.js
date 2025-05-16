const mobileMenuEl = document.getElementById('mobileMenu');
const navMenuEl = document.getElementById('navMenu');

/*MENU*/
/**Opens mobile menu when clicked*/
mobileMenuEl.addEventListener('click', function() {
    if (mobileMenuEl.style.display == 'flex'){
        menuDisplay();
    }
});

/**Renders menu items */
navMenuEl.innerHTML = /*HTML*/
    `<li><a href="#" id="languages" class="parentMenuItem">Languages <i class="fa-solid fa-angle-down" data-arrow="languages"></i></a>
        <ul class="sub-menu hide-menu" data-parent="languages">
            <li><a href="/html/htmlNotes.html" id="htmlLink">HTML</a></li>
            <li><a href="/html/cssNotes.html" id="cssLink">CSS</a></li>
            <li><a href="/html/javascriptNotes.html" id="javascriptLink">Javascript</a></li>    
            <li><a href="/html/reactNotes.html" id="reactLink">React</a></li>
            <li><a href="/html/sqlNotes.html" id="sqlLink">SQL</a></li>
            <li><a href="/html/markdownNotes.html" id="markdownLink">Markdown</a></li>
        </ul>
    </li>
    <li><a href="/html/firebaseNotes.html" id="firebaseLink">Firebase</a></li>
    <li><a href="/html/terminalNotes.html" id="terminalLink">Terminal</a></li>
    <li><a href="/html/accessibilityNotes.html" id="acessibilityLink">Accessibility</a></li>
    <li><a href="/html/codeReviewsNotes.html" id="reviewsLink">Code Reviews</a></li>
    <li><a href="/html/apiNotes.html" id="apisLink">APIs</a></li>
    <li><a href="/projects.html" id="projectsLink">Projects</a></li>
    <li><a href="/html/miscNotes.html" id="miscLink">MISC</a></li>`

/**sets menu display to flex */
export function menuDisplay() {
    const navMenuEl = document.getElementById('navMenu');
    if (navMenuEl.style.display === 'flex'){
        navMenuEl.style.display = 'none';
    } else {
        navMenuEl.style.display = 'flex';
    }
}

/**shows sub menu on click*/
const languagesParentTab = document.getElementById('languages');

languagesParentTab.addEventListener('click', function(event) {
    const selectedMenuItemId = event.target.id;

    document.querySelectorAll('[data-arrow]').forEach(function(arrow) {
        if (arrow.dataset.arrow === selectedMenuItemId) {
            arrow.classList.toggle('fa-angle-down');
            arrow.classList.toggle('fa-angle-up');
        }
    })

    Array.from(document.getElementsByClassName('sub-menu')).forEach( function(menuList){
        if (menuList.dataset.parent === selectedMenuItemId) {
            menuList.classList.toggle('hide-menu');
        }
    });
});

// languagesParentTab.addEventListener('mouseover', function(event) {
//     const selectedMenuItem = event.target.id
//     Array.from(document.getElementsByClassName('sub-menu')).forEach( function(menuList){
//         console.log(menuList.dataset.parent)
//         if (menuList.dataset.parent === selectedMenuItem) {
//             menuList.classList.remove('hide-menu')
//         }
//     });
// });

// languagesParentTab.addEventListener('mouseout', function(event) {
//     const selectedMenuItem = event.target.id
//     Array.from(document.getElementsByClassName('sub-menu')).forEach( function(menuList){
//         console.log(menuList.dataset.parent)
//         if (menuList.dataset.parent === selectedMenuItem) {
//             menuList.classList.add('hide-menu')
//         }
//     });
// });

window.onclick = function(event) {
    if (!event.target.matches('.parentMenuItem')) {
        let dropdowns = document.getElementBy
    }
}

/*shows sub menu*/

/***TODOs
 * 1. take mentors advice and refactor notes
 * 2. set up notes to use separate pages
 * 3. set up firebase for inputs
 * 4. move header menu
 * 5. refactor background to be in separate div
 * 6. make mobile friendly
 * 7. make mobile "app"
 */
