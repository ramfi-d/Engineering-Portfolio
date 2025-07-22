// Project management and generation functionality

// Function to dynamically generate and display all projects in the Projects tab
function generateProjects() {
    const projectContainer = document.getElementById('projects-container');
    let projectHTML = '';

    projects.forEach((project, index) => {
        projectHTML += `
            <div class="col-4 col-6-medium col-12-small" style="animation-delay: ${index * 0.1}s;">
                <section class="box project-card">
                    <a href="#" class="image featured" onclick="showDetails('${project.id}')" style="display: block; margin-bottom: 20px;">
                        <img src="${project.imgSrc}" alt="${project.alt}" loading="lazy">
                    </a>
                    <header>
                        <h3><a href="#" onclick="showDetails('${project.id}')">${project.title}</a></h3>
                    </header>
                    <p>${project.description}</p>
                    <footer style="margin-top: 20px;">
                        <a href="#" class="button alt" onclick="showDetails('${project.id}')">
                            <i class="fas fa-arrow-right" style="margin-right: 8px;"></i>Learn More
                        </a>
                    </footer>
                </section>
            </div>
        `;
    });

    // Insert generated HTML into the container
    projectContainer.innerHTML = projectHTML;
    
    // Add stagger animation to project cards
    setTimeout(() => {
        document.querySelectorAll('.project-card').forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
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
                <section class="box project-card">
                    <a href="#" class="image featured" onclick="showDetails('${project.id}')" style="display: block; margin-bottom: 20px;">
                        <img src="${project.imgSrc}" alt="${project.alt}" loading="lazy">
                    </a>
                    <header>
                        <h3><a href="#" onclick="showDetails('${project.id}')">${project.title}</a></h3>
                    </header>
                    <p>${project.description}</p>
                    <footer style="margin-top: 20px;">
                        <a href="#" class="button alt" onclick="showDetails('${project.id}')">
                            <i class="fas fa-arrow-right" style="margin-right: 8px;"></i>Learn More
                        </a>
                    </footer>
                </section>
            </div>
        `;
    } else {
        projectHTML = '<p style="text-align: center; color: #7f8c8d; font-style: italic;">Project not found.</p>';
    }

    // Insert the single project's HTML into the container
    projectContainer.innerHTML = projectHTML;
}

// Initialize projects when page loads
document.addEventListener('DOMContentLoaded', function () {
    // Generate all projects for the Projects tab
    generateProjects();
    
    // Generate 3 different projects for the main tab with stagger effect
    const homeProjects = ['project1-details', 'project2-details', 'project3-details'];
    const homeContainers = ['project1-container', 'project2-container', 'project3-container'];
    
    homeProjects.forEach((projectId, index) => {
        setTimeout(() => {
            displaySingleProject(projectId, homeContainers[index]);
        }, index * 200);
    });
});
