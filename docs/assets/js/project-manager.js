// Project management and generation functionality

// Function to dynamically generate and display all projects in the Projects tab
function generateProjects() {
    const projectContainer = document.getElementById('projects-container'); // Container for projects
    let projectHTML = '';

    projects.forEach(project => {
        projectHTML += `
            <div class="col-4 col-6-medium col-12-small">
                <section class="box">
                    <a href="#" class="image featured" onclick="showDetails('${project.id}')">
                        <img src="${project.imgSrc}" alt="${project.alt}">
                    </a>
                    <header>
                        <h3><a href="#" onclick="showDetails('${project.id}')">${project.title}</a></h3>
                    </header>
                    <p>${project.description}</p>
                    <footer>
                        <a href="#" class="button alt" onclick="showDetails('${project.id}')">Learn More</a>
                    </footer>
                </section>
            </div>
        `;
    });

    // Insert generated HTML into the container
    projectContainer.innerHTML = projectHTML;
}

// Function to display a single project based on input (ID or index)
function displaySingleProject(projectId, containerId) {
    const projectContainer = document.getElementById(containerId);
    let projectHTML = '';

    // Find the project based on the given project ID
    const project = projects.find(proj => proj.id === projectId);

    if (project) {
        projectHTML += `
            <div class="col-12">
                <section class="box">
                    <a href="#" class="image featured" onclick="showDetails('${project.id}')">
                        <img src="${project.imgSrc}" alt="${project.alt}">
                    </a>
                    <header>
                        <h3><a href="#" onclick="showDetails('${project.id}')">${project.title}</a></h3>
                    </header>
                    <p>${project.description}</p>
                    <footer>
                        <a href="#" class="button alt" onclick="showDetails('${project.id}')">Learn More</a>
                    </footer>
                </section>
            </div>
        `;
    } else {
        projectHTML = '<p>Project not found.</p>';
    }

    // Insert the single project's HTML into the container
    projectContainer.innerHTML = projectHTML;
}

// Initialize projects when page loads
document.addEventListener('DOMContentLoaded', function () {
    // Generate all projects for the Projects tab
    generateProjects();
    
    // Generate 3 different projects for the main tab
    displaySingleProject('project1-details', 'project1-container');
    displaySingleProject('project2-details', 'project2-container');
    displaySingleProject('project3-details', 'project3-container');
});
