import React, {Component} from 'react';
import Section from './Section'
import { connect } from 'react-redux'
import {makeGetPortfolioProjects} from '../selectors/projectSelectors'
import Tile from './Tile'
import PageControls from './PageControls'
import PropTypes from 'prop-types';

const renderProject = (project, index)=>{
    return <li key={project.id}><Tile project={project} path={`/portfolio/${project.id}`} index={index} /></li>
}

const Portfolio = (props)=>{
    const {projects} = props;
    return (
        <Section {...props}>
            <div className="page">
                <header>
                    <h1>portfolio</h1>
                    <p>products and projects :: architect & developer</p>
                </header>
                <div className="section-content">
                    <ul className="projects clearfix">
                    {projects && projects.map(renderProject)}
                    </ul>
                </div>
                <footer>

                </footer>
            </div>
            <PageControls previous={{ path: "/about", title: "about"}} next={{ path: "/labs", title: "labs"}} />
        </Section>
    );
}

Portfolio.propTypes = {
    projects: PropTypes.array.isRequired
};

const makeMapStateToProps = ()=>{
    const getProjects = makeGetPortfolioProjects();
    return (state, props) => {
        return {
            projects: getProjects(state, props)
        }
    }
}


export default connect(makeMapStateToProps, null)(Portfolio);