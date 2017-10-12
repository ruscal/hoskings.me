import { createSelector } from 'reselect'

export const projectsSelector = state => state.entities.projects;
export const portfolioProjectsSelector = state =>  state.app.portfolio ? state.app.portfolio.projects : [];
export const labsProjectsSelector = state =>  state.app.labs ? state.app.labs.projects : [];
export const projectSelector = (state, props) => props.projectId ? state.entities.projects[props.projectId] : null;
export const prevPortfolioProjectSelector = (state, props) => {
    if(!state.app.portfolio)
        return null;

    let index = state.app.portfolio.projects.indexOf(props.projectId);
    return index > 0 ? projectSelector(state, {projectId: state.app.portfolio.projects[index - 1]}) : null;
}
export const nextPortfolioProjectSelector = (state, props) => {
    if(!state.app.portfolio)
        return null;

    let index = state.app.portfolio.projects.indexOf(props.projectId);
    return index < state.app.portfolio.projects.length - 1 ? projectSelector(state, {projectId: state.app.portfolio.projects[index + 1]}) : null;
}

export const prevLabsProjectSelector = (state, props) => {
    if(!state.app.labs)
        return null;

    let index = state.app.labs.projects.indexOf(props.projectId);
    return index > 0 ? projectSelector(state, {projectId: state.app.labs.projects[index - 1]}) : null;
}
export const nextLabsProjectSelector = (state, props) => {
    if(!state.app.labs)
        return null;

    let index = state.app.labs.projects.indexOf(props.projectId);
    return index < state.app.labs.projects.length - 1 ? projectSelector(state, {projectId: state.app.portfolio.projects[index + 1]}) : null;
}

export const makeGetPrevPortfolioProject = ()=> {
    return createSelector(
        [prevPortfolioProjectSelector],
        (project) => {
            return project;
        }
    )
};

export const makeGetNextPortfolioProject = ()=> {
    return createSelector(
        [nextPortfolioProjectSelector],
        (project) => {
            return project;
        }
    )
};

export const makeGetPrevLabsProject = ()=> {
    return createSelector(
        [prevLabsProjectSelector],
        (project) => {
            return project;
        }
    )
};

export const makeGetNextLabsProject = ()=> {
    return createSelector(
        [nextLabsProjectSelector],
        (project) => {
            return project;
        }
    )
};


export const makeGetProject = ()=> {
    return createSelector(
        [projectSelector],
        (project) => {
            return project;
        }
    )
};

export const makeGetPortfolioProjects = ()=> {
    return createSelector(
        [portfolioProjectsSelector, projectsSelector],
        (projectIds, projects) => {
            return projectIds.map(id => projects[id]);
        }
    )
};

export const makeGetLabsProjects = ()=> {
    return createSelector(
        [labsProjectsSelector, projectsSelector],
        (projectIds, projects) => {
            return projectIds.map(id => projects[id]);
        }
    )
};