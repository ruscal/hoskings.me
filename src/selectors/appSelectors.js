import { createSelector } from 'reselect'


export const appTitleSelector = state =>  state.app.title;
export const sectionSelector = state =>  state.app.section;

export const makeGetAppTitle= () => {
    return createSelector(
        [appTitleSelector],
        (title) => {
            return title;
        }
    )
};

export const makeGetCurrentSectionName = () => {
    return createSelector(
        [sectionSelector],
        (section) => {
            return section ? section.section ? section.section : section.name : null;
        }
    )
};
