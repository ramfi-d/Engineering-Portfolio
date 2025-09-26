// Navigation and tab management functionality

// Load PDF when CV tab is shown
function showTab(tabId) {
    // Check if we need to navigate to a different page first
    if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
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
    } else {
        // We're not on the main page, so navigate to it with a hash
        window.location.href = '../index.html#' + tabId;
    }
}

// Function to open PDF in fullscreen
function openPdfFullScreen(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

document.addEventListener('DOMContentLoaded', function () {
    // Tab navigation logic
    const navLinks = document.querySelectorAll('#nav ul li a[data-tab]');
    const tabContents = document.querySelectorAll('.tab-content');

    // Check for hash in URL when loading index page
    if (window.location.hash && (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/'))) {
        const hash = window.location.hash.substring(1);
        const tab = document.getElementById(hash);
        if (tab && tab.classList.contains('tab-content')) {
            tabContents.forEach(t => {
                t.classList.remove('active');
                t.style.display = 'none';
            });
            tab.classList.add('active');
            tab.style.display = 'block';

            // Update nav links active state
            navLinks.forEach(link => {
                if (link.getAttribute('data-tab') === hash) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    }

    // Helper: Show tab by id and update nav active state
    function activateTab(tabId) {
        if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
            tabContents.forEach(tab => {
                if (tab.id === tabId) {
                    tab.classList.add('active');
                    tab.style.display = 'block';
                } else {
                    tab.classList.remove('active');
                    tab.style.display = 'none';
                }
            });
            navLinks.forEach(link => {
                if (link.getAttribute('data-tab') === tabId) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
            // Update URL hash without jumping
            history.pushState(null, null, '#' + tabId);
            
            // Scroll to top of the page when switching tabs
            window.scrollTo({top: 0, behavior: 'smooth'});
        } else {
            // Not on index page, navigate there
            window.location.href = '../index.html#' + tabId;
        }
    }

    // Attach click handler to nav tabs
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const tabId = this.getAttribute('data-tab');
            const isIndexPage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');

            if (!isIndexPage) {
                // Only prevent default if we're not on the index page
                if (!this.href.includes('#')) {
                    e.preventDefault();
                    window.location.href = '../index.html#' + tabId;
                }
            } else {
                e.preventDefault();
                if (tabId) activateTab(tabId);
            }
        });
    });

    // Add handlers for other data-tab elements (like "View All Projects" button)
    document.querySelectorAll('[data-tab]').forEach(function(el) {
        // Skip if this is a main nav link (already handled above)
        if (el.closest('#nav')) return;
        
        el.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.getAttribute('data-tab');
            
            if (tabId) {
                // If we're on the index page, activate the tab
                if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
                    activateTab(tabId);
                    
                    // Special handling for "View All Projects" button
                    if (tabId === 'projects' && this.closest('.view-all-projects')) {
                        window.scrollTo({top: 0, behavior: 'smooth'});
                    }
                } else {
                    // If not on index page, navigate to it with the hash
                    window.location.href = '../index.html#' + tabId;
                }
                
                // Special handling for "Get In Touch" button
                if (tabId === 'home' && this.classList.contains('alt')) {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                        setTimeout(() => {
                            contactSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }, 100);
                    }
                }
            }
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
    }

    // Make each course-list li clickable (navigate to its link)
    document.querySelectorAll('.course-list li').forEach(function (li) {
        li.addEventListener('click', function (e) {
            // Find the first <a> inside the li
            const link = li.querySelector('a[href]');
            if (link && link.href) {
                // Open in new tab if target="_blank", else same tab
                if (link.target === '_blank') {
                    window.open(link.href, '_blank');
                } else {
                    window.location.href = link.href;
                }
            }
        });
    });
});