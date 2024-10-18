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
            const contributors = project.contributors.map(contributor => {
                return /*HTML*/`
                        <a href="${contributor.github}" target="_blank" class="project-modal-contributor">
                            ${contributor.name}
                        </a>
                    `;
            })
            document.getElementById("projectModalContent").innerHTML = /*HTML*/`
                    <h2 id="projectModalTitle" class="project-modal-title">
                        <a href="${project.url}" target="_blank" class="project-modal-link">
                            ${project.title}
                        </a>
                    </h2>
                    <div class="paper-inner">
                        <div class="paper-lines">
                            <a href="${project.url}" target="_blank">
                                <img src="${project.img}" id="projectModalImg" class="project-modal-img" alt="${project.title}" />
                            </a>
                            <p>Contributors: ${contributors}</p>
                            <p>Languages: ${project.languages.join(', ')}</p>
                            <a href="${project.github}" target="_blank" class="project-modal-github">GitHub</a>
                            <h3 id="projectModalDesc" class="project-modal-desc">${project.desc}</h3>
                            <p id="projectModalInstructions" class="project-modal-instructions">${project.instructions}</p>
                        </div>
                    </div>
                `;
        }
    })

    projectModalEl.style.display = 'flex';
    document.getElementById('body').classList.add('modal-open');
}