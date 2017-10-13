import React, {Component} from 'react';
import Section from './Section'
import { connect } from 'react-redux'
import {makeGetLabsProjects} from '../selectors/projectSelectors'
import Tile from './Tile'
import PageControls from './PageControls'
import PropTypes from 'prop-types';

const renderProject = (project, index)=>{
    return <li key={project.id}><Tile project={project} path={`/labs/${project.id}`} index={index} /></li>
}

const Labs = (props)=>{
    const {projects} = props;
    return (
        <Section {...props}>
            <div className="page">
                <header>
                    <h1>labs</h1>
                    <p>my playground</p>
                </header>
                <div className="section-content">
                    <ul className="projects clearfix">
                        {projects && projects.map(renderProject)}
                    </ul>
                </div>
                <footer>
                    <PageControls previous={{ path: "/portfolio", title: "portfolio"}} next={{ path: "/about", title: "about"}} />
                </footer>
            </div>
        </Section>
    );
}

Labs.propTypes = {
    projects: PropTypes.array.isRequired
};

const makeMapStateToProps = ()=>{
    const getProjects = makeGetLabsProjects();
    return (state, props) => {
        return {
            projects: getProjects(state, props)
        }
    }
}


export default connect(makeMapStateToProps, null)(Labs);