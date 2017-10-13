import React from 'react';
import {Link, Route, Redirect} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types';

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

PageControl.propTypes = {
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    icon: PropTypes.string.isRequired
};


const PageControls = (props)=> {
    const {previous, next} = props;
    return (
        <div className="page-controls">
            {previous && <PageControl className="previous-page" {...previous} icon="chevron-left" />}
            {next && <PageControl className="next-page"  {...next}  icon="chevron-right" />}
        </div>
    )
}

PageControls.propTypes = {
    previous: PropTypes.object,
    next: PropTypes.object
};

export default PageControls
