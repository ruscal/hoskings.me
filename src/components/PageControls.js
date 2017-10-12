import React from 'react';
import {Link, Route, Redirect} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

const PageControl = (props)=> {
    const {path, title, className, icon} = props;
    return (
        <Link className={"page-control " + className} to={path} >
                <span className="page-label">
                    <FontAwesome name={icon} />
                    <span className="title">{title}</span>
                </span>
        </Link>
    )
}


const PageControls = (props)=> {
    const {previous, next} = props;
    return (
        <div className="page-controls">
            {previous && <PageControl className="previous-page" {...previous} icon="chevron-left" />}
            {next && <PageControl className="next-page"  {...next}  icon="chevron-right" />}
        </div>
    )
}

export default PageControls
