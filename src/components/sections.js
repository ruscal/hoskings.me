import PortfolioProject from './PortfolioProject'
import LabProject from './LabProject'
import Portfolio from './Portfolio'
import Labs from './Labs'
import About from './About'


export const SECTION_PORTFOLIO_PROJECT = "portfolioProject";
export const SECTION_PORTFOLIO = "portfolio";
export const SECTION_LABS_PROJECT = "labsProject";
export const SECTION_LABS = "labs";
export const SECTION_ABOUT = "about";

export const sections = [
    { name: SECTION_PORTFOLIO_PROJECT, path:"/portfolio/:id", component: PortfolioProject, nav:false, section:SECTION_PORTFOLIO },
    { name: SECTION_PORTFOLIO, path:"/portfolio", component: Portfolio },
    { name: SECTION_LABS_PROJECT, path:"/labs/:id", component: LabProject, nav:false, section:SECTION_LABS },
    { name: SECTION_LABS, path:"/labs", component: Labs },
    { name: SECTION_ABOUT, path:"/about", component: About }
];

export let sectionIndex = {}
sections.map((s, index) => sectionIndex[s.name] = {section: s, index: index});

export const navSections = sections.filter(s => s.nav !== false);

/*export const getPreviousPath = (sectionName)=>{
    let indexItem = sectionIndex[sectionName];
    if(indexItem.section.nav !== false){
        if(indexItem.index === 0) {
            return navSections[navSections.length - 1].path;
        }else{
            return navSections[indexItem.index - 1].path;
        }
    }else {
        switch(sectionName){
            case SECTION_PORTFOLIO_PROJECT:

            case SECTION_LABS_PROJECT:

            default:
                return null;
        }
    }

}*/
