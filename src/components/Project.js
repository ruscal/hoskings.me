import React, {Component} from 'react';
import Section from './Section'
import { connect } from 'react-redux'
import {makeGetProject} from '../selectors/projectSelectors'
import Carousel from './Carousel'
import {toInnerHTMLObject} from '../utils/common'

const Project = (props)=>{
    const {project} = props;

    if(!project)
        return null;

    const renderClient = (client)=>{
        return (
            <li key={client.name} className="client">
                <a href={client.url}>
                {client.logo && <img className="client-logo" src={client.logo} alt={client.name} />}
                {!client.logo && <span className="client-name">{client.name}</span>}
                </a>
            </li>
        )
    }

    const renderChallenge = (challenge, index)=> {
        return (
            <li key={index} className="challenge">

                <p className="detail"><span className="title">{challenge.title}.</span> {challenge.detail}</p>
            </li>
        )
    }

    const renderCapability = (capability, index)=> {
        return (
            <li key={index} className="capability">
                {capability}
            </li>
        )
    }

    const renderTechnology = (technology, index)=> {
        return (
            <li key={index} className="technology">
                {technology}
            </li>
        )
    }

    const renderQuote = (quote, index)=> {
        return (
            <li key={index} className="quote">
                {quote}
            </li>
        )
    }

    return (
            <div className="page">
                <header>
                    <h1 dangerouslySetInnerHTML={toInnerHTMLObject(project.title)}></h1>
                    <p className="project-description" dangerouslySetInnerHTML={toInnerHTMLObject(project.description)}></p>
                    <p className="project-role" dangerouslySetInnerHTML={toInnerHTMLObject(project.role)}></p>
                </header>
                <div className="section-content">
                    {project.media && <div className="sub-section media">
                        <Carousel items={project.media} />
                    </div>}
                    {project.overview && <div className="sub-section overview">
                        <h2>Overview</h2>
                        <p className="sub-section-intro" dangerouslySetInnerHTML={toInnerHTMLObject(project.overview.intro)}></p>
                        <p className="sub-section-body" dangerouslySetInnerHTML={toInnerHTMLObject(project.overview.body)}></p>
                    </div>}
                    {project.challenges && <div className="sub-section challenges">
                        <h2>Challenges</h2>
                        {project.challenges.intro && <p className="sub-section-intro" dangerouslySetInnerHTML={toInnerHTMLObject(project.challenges.intro)}></p>}
                        <ul>
                            {project.challenges.items.map(renderChallenge)}
                        </ul>
                    </div>}
                    {project.capabilities && <div className="sub-section capabilities">
                        <h2>Capabilities applied</h2>
                        {project.capabilities.intro && <p className="sub-section-intro" dangerouslySetInnerHTML={toInnerHTMLObject(project.capabilities.intro)}></p>}
                        <ul>
                            {project.capabilities.items.map(renderCapability)}
                        </ul>
                    </div>}
                    {project.technologies && <div className="sub-section technologies">
                        <h2>Technologies used</h2>
                        {project.technologies.intro && <p className="sub-section-intro" dangerouslySetInnerHTML={toInnerHTMLObject(project.technologies.intro)}></p>}
                        <ul>
                            {project.technologies.items.map(renderTechnology)}
                        </ul>
                    </div>}
                    {project.quotes && <div className="sub-section quotes">
                        <h2>Feedback</h2>
                        {project.quotes.intro && <p className="sub-section-intro" dangerouslySetInnerHTML={toInnerHTMLObject(project.quotes.intro)}></p>}
                        <ul>
                            {project.quotes.items.map(renderQuote)}
                        </ul>
                    </div>}
                    {project.clients && <div className="sub-section clients">
                        <h2>Clients</h2>
                        {project.clients.intro && <p className="sub-section-intro" dangerouslySetInnerHTML={toInnerHTMLObject(project.clients.intro)}></p>}
                        <ul>
                            {project.clients.items.map(renderClient)}
                        </ul>
                    </div>}
                </div>
                <footer>

                </footer>
            </div>
    );
}

const makeMapStateToProps = ()=>{
    const getProject = makeGetProject();
    return (state, props) => {
        return {
            project: getProject(state, props)
        }
    }
}


export default connect(makeMapStateToProps, null)(Project);