import React, {Component} from 'react';
import Project from './Project'
import PageControls from './PageControls'
import Section from './Section'
import { connect } from 'react-redux'
import {makeGetNextPortfolioProject, makeGetPrevPortfolioProject} from '../selectors/projectSelectors'
import PropTypes from 'prop-types';

const PortfolioProject = (props)=>{
    const {match, nextProject, prevProject} = props;
    let next = {
        path: nextProject ? `/portfolio/${nextProject.id}` : '/labs',
        title: nextProject ? nextProject.title : 'labs'
    };
    let prev = {
        path: prevProject ? `/portfolio/${prevProject.id}` : '/portfolio',
        title: prevProject ? prevProject.title : 'portfolio'
    };
    return (
        <Section {...props}>
            <Project {...props} projectId={match.params.id} />
            <PageControls previous={prev} next={next} />
        </Section>
        )
}

PortfolioProject.propTypes = {
    match: PropTypes.object.isRequired,
    nextProject: PropTypes.object,
    prevProject: PropTypes.object
};

const makeMapStateToProps = ()=>{
    const getNextProject = makeGetNextPortfolioProject();
    const getPreviousProject = makeGetPrevPortfolioProject();
    return (state, props) => {
        let projectId = props.match.params.id;
        return {
            projectId,
            nextProject: getNextProject(state, {projectId}),
            prevProject: getPreviousProject(state, {projectId})
        }
    }
}

export default  connect(makeMapStateToProps,null)(PortfolioProject);