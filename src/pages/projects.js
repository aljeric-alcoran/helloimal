import setProjectsSection from '../components/projects/projects.js';

const template = `
   <div id="projects-section" class="min-h-screen bg-transparent"></div>
`;

const setProjectsPage = (container) => {
   container.innerHTML = template;
   setProjectsSection(document.getElementById('projects-section'));
};

export default setProjectsPage;