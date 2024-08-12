import { menuDisplay } from './index.js';

//menu
const mobileMenuEl = document.getElementById('mobileMenu');
//category menu
const sectionLinksEl = document.getElementById('sectionLinks');

//change header background based on page
const bodyEl = document.getElementsByTagName('body')[0].getAttribute('data-id');
const heroEl = document.getElementById('hero');
if (bodyEl){
    heroEl.style.backgroundImage = `url('/images/${bodyEl}.jpg')`;
    console.log(heroEl)
}
//loads notes section on page open
displayContent(notes)

//Opens or closes mobile menu when clicked
mobileMenuEl.addEventListener('click', function(){
    if (mobileMenuEl.style.display !== 'none'){
        menuDisplay();
    }
});

//finds the selected note category and displays it's content
sectionLinksEl.addEventListener('click', function(event){
    const selectedElDataAttr = document.getElementById(event.target.getAttribute('data-link'));

    if (selectedElDataAttr){
        displayContent(document.getElementById(event.target.getAttribute('data-link')))
    }
})

//displays one note categories content
function displayContent(display){
    //hides all note elents
    for (let i = 0; i < document.getElementsByClassName('note-section').length; i++){
        document.getElementsByClassName('note-section')[i].style.display = 'none';
    }

    //shows selected note element
    display.style.display = 'flex';
}