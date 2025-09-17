// Minimal PDF.js handler for rendering the first page of a PDF in a canvas

// Make sure PDF.js is loaded
if (window['pdfjsLib']) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

function renderPdfAsImage() {
    var url = 'Resume/Rafael_Delwart_CV.pdf';
    var canvas = document.getElementById('pdf-canvas');
    var loading = document.getElementById('pdf-loading');
    var fallback = document.getElementById('pdf-fallback');
    var errorDiv = document.getElementById('pdf-error');

    // Hide all
    if (canvas) canvas.style.display = 'none';
    if (fallback) fallback.style.display = 'none';
    if (loading) loading.style.display = 'block';
    if (errorDiv) errorDiv.style.display = 'none';

    if (!window['pdfjsLib'] || !canvas) {
        // PDF.js not loaded, fallback to iframe
        if (loading) loading.style.display = 'none';
        if (fallback) fallback.style.display = 'block';
        return;
    }

    // Fix: ensure the URL is correct and relative to the HTML file
    // Also, handle CORS issues by making sure the PDF is served from the same domain

    pdfjsLib.getDocument({ url: url, withCredentials: false }).promise.then(function(pdf) {
        // Fetch the first page
        pdf.getPage(1).then(function(page) {
            var viewport = page.getViewport({ scale: 1.2 }); // Slightly smaller for better fit
            var context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Render PDF page into canvas context
            var renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            var renderTask = page.render(renderContext);
            renderTask.promise.then(function () {
                if (loading) loading.style.display = 'none';
                canvas.style.display = 'block';
            }).catch(function () {
                // Rendering failed, fallback
                if (loading) loading.style.display = 'none';
                if (fallback) fallback.style.display = 'block';
            });
        }).catch(function () {
            // Page fetch failed, fallback
            if (loading) loading.style.display = 'none';
            if (fallback) fallback.style.display = 'block';
        });
    }).catch(function (err) {
        // If PDF.js fails, fallback to iframe
        if (loading) loading.style.display = 'none';
        if (errorDiv) {
            errorDiv.style.display = 'block';
            errorDiv.textContent = "Error loading PDF. ";
            var link = document.createElement('a');
            link.href = url;
            link.textContent = "Click here to view PDF directly";
            link.target = "_blank";
            errorDiv.appendChild(link);
        }
        if (fallback) fallback.style.display = 'block';
    });
}

// Optionally, render PDF on DOMContentLoaded if CV tab is visible
document.addEventListener('DOMContentLoaded', function () {
    var cvTab = document.getElementById('cv');
    if (cvTab && cvTab.classList.contains('active')) {
        setTimeout(renderPdfAsImage, 100);
    }
});
