import React, {Component} from 'react';
import Project from './Project'
import PageControls from './PageControls'
import Section from './Section'

const LabProject = (props)=>{
    const {match} = props;
    return (
        <Section {...props}>
            <Project {...props} projectId={match.params.id} />
            <PageControls previous={{ path: "/about", title: "about"}} next={{ path: "/labs", title: "labs"}} />
        </Section>
    )
}

export default LabProject