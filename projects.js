import { menuDisplay } from './index.js';
import { projects } from './projectsdata.js';

const mobileMenuEl = document.getElementById('mobileMenu');
const projectsSectionEl = document.getElementById('projectsSection');
const projectModalEl = document.getElementById('projectModal');

//Opens or closes mobile menu when clicked
mobileMenuEl.addEventListener('click', function(){
    if (mobileMenuEl.style.display !== 'none'){
        menuDisplay();
    }
});

//opens modal when project selected
projectsSectionEl.addEventListener('click', function(event) {
    if (event.target.dataset.id) {
        displayProjectModal(event.target.dataset.id);
    }
});

//closes modal when outside of modal is selected
projectModalEl.addEventListener('click', function(event) {
    if (event.target.id == 'projectModal') {
        projectModalEl.style.display = 'none';
    }
});

//closes modal when x out button is selected
document.getElementById('xOutBtn').addEventListener('click', function(){
    projectModalEl.style.display = 'none';
});

//adds files for each project
projects.forEach(function(project) {
    projectsSectionEl.innerHTML += /*HTML*/`
                        <div class="project-container" data-id="${project.id}">
                            <img src="${project.img}" class="project-img" alt="${project.title}" data-id="${project.id}" />
                            <h2 class="project-title" data-id="${project.id}">${project.title}</h2>
                            <div class="project" data-id="${project.id}"></div>
                            <p class="project-desc" data-id="${project.id}">${project.desc}</p>
                        </div>
                    `;
})

//finds the selected project and displays the projects content within the modal
function displayProjectModal(id) {
    projects.forEach(function(project) {
        if (project.id == id) {
            document.getElementById('projectModalTitle').textContent = project.title;
            document.getElementById('projectModalImg').src = project.img;
            document.getElementById('projectModalImg').alt = project.title;
            document.getElementById('projectModalDesc').textContent = project.desc;
            document.getElementById('projectModalInstructions').innerHTML = project.instructions;
        }
    })

    projectModalEl.style.display = 'flex';
    document.getElementById('body').classList.add('modal-open');
}