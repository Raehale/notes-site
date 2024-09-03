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

//Search bar
const notesSearchInput = document.getElementById('notesSearchInput');
const notesSearchBtn = document.getElementById('notesSearchButton');
const allNotesEl = document.getElementById('allNotes');

notesSearchBtn.addEventListener('click', function(){
    if (notesSearchInput.value !== ''){
        notesInSearch(allNotesEl, notesSearchInput.value);
        notesSearchInput.value = '';
    } else {
        alert('To use the search you must add text.')
    }
})

function notesInSearch(notesContent, pattern){
    const regex = new RegExp(pattern, 'i');
    
    // const notesArrs = document.getElementById('test').getElementsByTagName('li');
    const contentArr = Array.prototype.slice.call(document.getElementsByClassName('inner-accordion-content'));
    // const notesArr = 
    // console.log(contentArr)
    // const notesArr = contentArr.map(function(section){
    //     console.log(section.getElementsByTagName('li'))
    //     section.getElementsByTagName('li').forEach(function(item){
    //         return item;
    //     })
        // for ()
        // if (section.getElementsByTagName('li')){
        //     console.log('hi')
        // }

    // })
    let notesArr = [];

    contentArr.forEach(function(section){
        if (section.tagName === 'UL'){  
            notesArr.push(...Array.prototype.slice.call(section.getElementsByTagName('li')));
        } else if (section.tagName === 'DL' ) {
            notesArr.push(...Array.prototype.slice.call(section.getElementsByTagName('dt')))
            notesArr.push(...Array.prototype.slice.call(section.getElementsByTagName('dd')));
        }
    })

    let foundNotes = ``;
    notesArr.forEach(function(note){
        if (note.innerHTML.match(regex)){
            if (note.classList.contains('sub-list')){
                note.getElementsByTagName('span')[0].classList.add('list-head');
            }
            if (note.parentElement.parentElement) {
                if (note.parentElement.parentElement.classList.contains('sub-list') || note.parentElement.parentElement.classList.contains('sub-sub-list')) {
                    console.log('hi')
                    note = note.parentElement;
                }
            }
            foundNotes += `${note.innerHTML}`;
        }

    })

    if (foundNotes === '') {
        console.log(foundNotes)
        foundNotes = `<span class='list-head'>No content containing ${pattern} exists here.</span>`;
    }

    for (let i = 0; i < document.getElementsByClassName('note-section').length; i++){
        if (document.getElementsByClassName('note-section')[i].style.display === 'flex') {
            document.getElementsByClassName('note-section')[i].querySelectorAll('[data-label]')[0].innerHTML = 'Search Results';
            document.getElementsByClassName('note-section')[i].innerHTML = /*HTML*/`
                    <h3 class="accordion-name" data-label="accordionName">Search Results</h3>
                    <ul class="inner-accordion-content">
                        ${foundNotes}
                    </ul>
                `;
        }
    }

}