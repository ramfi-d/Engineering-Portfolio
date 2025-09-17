// Navigation and tab management functionality

// Load PDF when CV tab is shown
function showTab(tabId) {
    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(function (tab) {
        tab.style.display = 'none';
        tab.classList.remove('active');
    });

    // Show the selected tab
    var selected = document.getElementById(tabId);
    if (selected) {
        selected.style.display = 'block';
        selected.classList.add('active');
    }

    // If CV tab is shown, render the PDF
    if (tabId === 'cv' && typeof renderPdfAsImage === 'function') {
        setTimeout(renderPdfAsImage, 100);
    }
}

// Function to show a detailed project section
function showDetails(projectId) {
    // Hide all tab content and remove .active
    document.querySelectorAll('.tab-content').forEach(function (section) {
        section.classList.remove('active');
        section.style.display = 'none';
    });

    // Show the selected project details and add .active
    var detail = document.getElementById(projectId);
    if (detail) {
        detail.classList.add('active');
        detail.style.display = 'block';
    }

    // Remove .active from all nav links
    document.querySelectorAll('#nav ul li a').forEach(l => l.classList.remove('active'));
}

// Function to return to the main Projects tab
function showProjects() {
    // Hide all tab content and remove .active
    document.querySelectorAll('.tab-content').forEach(function (section) {
        section.classList.remove('active');
        section.style.display = 'none';
    });

    // Show the main Projects tab and add .active
    var projectsTab = document.getElementById('projects');
    if (projectsTab) {
        projectsTab.classList.add('active');
        projectsTab.style.display = 'block';
    }

    // Set Projects tab as active in nav
    document.querySelectorAll('#nav ul li a').forEach(function (link) {
        if (link.getAttribute('data-tab') === 'projects') {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Function to open PDF in fullscreen
function openPdfFullScreen(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

document.addEventListener('DOMContentLoaded', function () {
    // Tab navigation logic
    const navLinks = document.querySelectorAll('#nav ul li a');
    const tabContents = document.querySelectorAll('.tab-content');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove .active from all nav links
            navLinks.forEach(l => l.classList.remove('active'));

            // Add .active to the clicked link
            this.classList.add('active');

            // Get the tab id (from data-tab or href/hash)
            let tabId = this.getAttribute('data-tab');
            if (!tabId) {
                // fallback: try href="#tabid"
                const href = this.getAttribute('href');
                if (href && href.startsWith('#')) {
                    tabId = href.substring(1);
                }
            }

            // Hide all tab contents and remove .active
            tabContents.forEach(tab => {
                tab.classList.remove('active');
                tab.style.display = 'none';
            });

            // Show the selected tab content and add .active
            if (tabId) {
                const tab = document.getElementById(tabId);
                if (tab) {
                    tab.classList.add('active');
                    tab.style.display = 'block';
                }
            }
        });
    });

    // View All Projects button(s)
    document.querySelectorAll('.view-all-projects .button[data-tab="projects"]').forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            // Activate Projects tab
            showTab('projects');
            navLinks.forEach(l => l.classList.remove('active'));
            document.querySelector('#nav ul li a[data-tab="projects"]').classList.add('active');
        });
    });

    // Return to Projects buttons
    document.querySelectorAll('.return-to-projects').forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            showProjects();
        });
    });

    // PDF Fullscreen buttons
    document.querySelectorAll('.open-pdf-fullscreen').forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            var url = this.getAttribute('data-pdf-url');
            if (url) openPdfFullScreen(url);
        });
    });

    // Fix: Get In Touch button should switch to Contact section on Home tab
    document.querySelectorAll('.button.alt[data-tab="home"]').forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            // Scroll to the contact section in the Home tab
            var contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            // Optionally, ensure Home tab is active
            showTab('home');
            navLinks.forEach(l => l.classList.remove('active'));
            document.querySelector('#nav ul li a[data-tab="home"]').classList.add('active');
        });
    });

    // Mobile nav panel logic (if present)
    const body = document.body;
    const panel = document.getElementById('navPanel');
    const panelList = document.getElementById('navPanelList');
    const toggleBtn = document.querySelector('#titleBar .toggle');
    const overlay = document.getElementById('navOverlay');

    if (panel && panelList && toggleBtn && overlay) {
        // Build the mobile menu from the desktop one
        function buildNavPanel() {
            const desktopLinks = document.querySelectorAll('#nav > ul > li > a');
            panelList.innerHTML = '';
            desktopLinks.forEach(a => {
                const li = document.createElement('li');
                const clone = a.cloneNode(true);
                clone.removeAttribute('tabindex');
                li.appendChild(clone);
                panelList.appendChild(li);
            });
        }

        function openPanel() {
            body.classList.add('navPanel-visible');
            panel.setAttribute('aria-hidden', 'false');
            toggleBtn.setAttribute('aria-expanded', 'true');
            overlay.hidden = false;
            const firstLink = panel.querySelector('a');
            if (firstLink) firstLink.focus();
        }

        function closePanel() {
            body.classList.remove('navPanel-visible');
            panel.setAttribute('aria-hidden', 'true');
            toggleBtn.setAttribute('aria-expanded', 'false');
            overlay.hidden = true;
        }

        toggleBtn.addEventListener('click', () => {
            if (body.classList.contains('navPanel-visible')) closePanel(); else openPanel();
        });
        overlay.addEventListener('click', closePanel);
        panel.addEventListener('click', (e) => {
            if (e.target.closest('a')) closePanel();
        });
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 981) closePanel();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closePanel();
        });

        buildNavPanel();

        // Mobile nav panel tab switching
        panelList.addEventListener('click', function (e) {
            const link = e.target.closest('a[data-tab]');
            if (link) {
                e.preventDefault();
                const tabId = link.getAttribute('data-tab');
                if (tabId) {
                    showTab(tabId);
                    // Sync active state in both navs
                    navLinks.forEach(l => l.classList.remove('active'));
                    document.querySelectorAll('#navPanelList a').forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                    const desktopLink = document.querySelector('#nav ul li a[data-tab="' + tabId + '"]');
                    if (desktopLink) desktopLink.classList.add('active');
                }
                closePanel();
            }
        });
    }
});