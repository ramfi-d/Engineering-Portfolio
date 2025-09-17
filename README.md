# Rafael Delwart Portfolio Website

This repository contains the source code and assets for Rafael Delwart's personal portfolio website. The site is a static, single-page application designed to showcase engineering projects, coursework, and a dynamically updated CV. It is built with HTML, CSS, JavaScript, and LaTeX for the CV, and is structured for deployment via GitHub Pages.

## Architecture and Structure

The website is organized as a static site under the `docs/` directory, enabling direct hosting on GitHub Pages. The main entry point is `docs/index.html`, which loads all content dynamically using JavaScript. The site uses a tabbed navigation system, with each tab (Home, CV, Projects, Courses) corresponding to a section of the page. Content for each tab is either embedded directly in the HTML or injected via JavaScript modules.

### Project Display

Projects are defined as structured JavaScript objects in `assets/js/projects.js`. The `project-manager.js` script dynamically generates project cards and detailed views, allowing for easy updates and scalability. Featured projects are highlighted on the Home tab, while the Projects tab displays the full portfolio in a responsive grid layout. Each project can include images, descriptions, technology tags, and links to reports or demos.

### CV Integration and Automation

The CV is authored in LaTeX (`Resume/main.tex`). A custom shell script (`Resume/build-cv.sh`) automates the compilation of the LaTeX source into a PDF (`Rafael_Delwart_CV.pdf`). This script also copies the generated PDF into the `docs/Resume/` directory, ensuring the website always serves the latest version. If the repository is under git version control, the script will automatically commit the updated PDF files when changes are detected. This workflow ensures that any update to the LaTeX source is immediately reflected on the live site after a push to GitHub.

### PDF Rendering

PDF previews (for the CV and project reports) are handled using PDF.js. The `pdf-handler.js` script attempts to render the first page of a PDF as a canvas image for fast preview; if this fails, it falls back to embedding the PDF in an iframe. This approach provides a seamless experience across browsers and devices.

### Styling and Responsiveness

The visual design is based on a heavily customized version of the HTML5 UP Dopetrope theme, with additional modernizations in `assets/css/custom.css`. The site uses CSS variables, grid layouts, and responsive design techniques to ensure usability on both desktop and mobile devices. Navigation is enhanced with animated tab transitions and a mobile-friendly slide-in menu.

### Automation and Deployment

- **CV Build Automation:** The LaTeX CV is compiled and deployed using `build-cv.sh`, which also manages git commits for updated PDFs.
- **Static Hosting:** All assets are static and require no backend. Deployment is as simple as pushing to the repository's default branch.
- **PDF.js Integration:** PDF previews are rendered client-side, requiring no server-side processing.

## Design Philosophy

The site is engineered for maintainability and automation. Project data and content are separated from presentation logic, making it easy to add or update projects and coursework. The CV workflow ensures that the latest academic and professional information is always available without manual intervention. The use of modern CSS and JavaScript patterns provides a clean, interactive user experience.

---
   - This script compiles the LaTeX file to `Rafael_Delwart_CV.pdf`.
   - It then copies the PDF to `docs/Resume/Rafael_Delwart_CV.pdf` so the website always serves the latest version.
   - If the repository is under git version control, the script will automatically commit the updated PDF files if there are changes.

3. **Deploy**: Commiting and pushing the changes to GitHub. GitHub Pages will serve the updated CV automatically.



## Editing Content

- **Projects:** Edit `assets/js/projects.js` to add, remove, or update projects.
- **Coursework:** Edit the Courses tab in `index.html`.
- **Contact Info:** Update the contact section in `index.html`.
- **CV:** Rewrite the `main.tex` and commit changes, it is recommended to use Latex editor to view the changes on the PDF.
## Development

- Uses [PDF.js](https://mozilla.github.io/pdf.js/) for PDF rendering.
- Uses [Font Awesome](https://fontawesome.com/) for icons.
- No build step required; all files are static.



---
