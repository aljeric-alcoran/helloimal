const template = `
   <div id="work-exp" class="max-w-screen-xl items-center justify-center mx-auto text-gray-900 dark:text-white"></div>
`
import setWorkExperience from "../components/work/experience";

const setWorkPage = (container) => {
   container.innerHTML = template;

   setWorkExperience(document.getElementById('work-exp'));
}

export default setWorkPage;