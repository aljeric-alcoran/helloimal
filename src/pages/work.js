const template = `
   <div id="work-exp" class="main-banner-container"></div>
`
import setWorkExperience from "../components/work/experience";

const setWorkPage = (container) => {
   container.innerHTML = template;

   setWorkExperience(document.getElementById('work-exp'));
}

export default setWorkPage;