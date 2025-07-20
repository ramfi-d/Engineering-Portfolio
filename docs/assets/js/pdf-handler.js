// PDF handling functionality for CV tab
// Set the workerSrc for PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

async function renderPdfAsImage() {
    const canvas = document.getElementById('pdf-canvas');
    const loadingDiv = document.getElementById('pdf-loading');
    const errorDiv = document.getElementById('pdf-error');
    const fallbackIframe = document.getElementById('pdf-fallback');
    
    try {
        console.log('Attempting to load PDF from: Resume/Rafael_Delwart_CV.pdf');
        
        // Load the PDF
        const pdf = await pdfjsLib.getDocument('Resume/Rafael_Delwart_CV.pdf').promise;
        
        console.log('PDF loaded successfully');
        
        // Get the first page
        const page = await pdf.getPage(1);
        
        // Set the scale for high quality rendering
        const scale = 2.0;
        const viewport = page.getViewport({ scale: scale });
        
        // Set canvas dimensions
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        
        // Render the page
        const context = canvas.getContext('2d');
        const renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        
        await page.render(renderContext).promise;
        
        console.log('PDF rendered successfully');
        
        // Hide loading, show canvas
        loadingDiv.style.display = 'none';
        canvas.style.display = 'block';
        
    } catch (error) {
        console.error('Error rendering PDF with PDF.js:', error);
        console.log('Falling back to iframe...');
        
        // Fallback to iframe
        loadingDiv.style.display = 'none';
        fallbackIframe.style.display = 'block';
        
        // If iframe also fails, show error
        fallbackIframe.onerror = function() {
            console.error('Iframe fallback also failed');
            fallbackIframe.style.display = 'none';
            errorDiv.style.display = 'block';
        };
    }
}
