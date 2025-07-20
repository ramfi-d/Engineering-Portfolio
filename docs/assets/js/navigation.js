// Navigation and tab management functionality

// Load PDF when CV tab is shown
function showTab(tabId) {
    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(function (tab) {
        tab.style.display = 'none';
    });

    // Show the selected tab
    document.getElementById(tabId).style.display = 'block';
    
    // If CV tab is shown, render the PDF
    if (tabId === 'cv') {
        // Small delay to ensure the tab is visible
        setTimeout(renderPdfAsImage, 100);
    }
}

// Function to show a detailed project section
function showDetails(projectId) {
    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(function (section) {
        section.style.display = 'none';  // Hide all tabs
    });

    // Show the selected project details
    document.getElementById(projectId).style.display = 'block';  // Show only the selected project details
}

// Function to return to the main Projects tab
function showProjects() {
    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(function (section) {
        section.style.display = 'none';  // Hide all detailed sections
    });

    // Show the main Projects tab
    document.getElementById('projects').style.display = 'block';  // Show the main project list
}

// Function to open PDF in fullscreen
function openPdfFullScreen(url) {
    var win = window.open(url, '_blank');
    win.focus();
}
