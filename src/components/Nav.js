import React, {Component} from 'react';
import { connect } from 'react-redux'
import {NavLink, Route, Redirect} from 'react-router-dom'
import {makeGetCurrentSectionName} from '../selectors/appSelectors'
import PropTypes from 'prop-types';

const Nav = ({sections, currentSection}) => {
    return (
        <nav>
            <ul>
                {sections.map(s => <NavLink key={s.name} to={s.path} className={currentSection === s.name ? "current" : ""}>{s.name}</NavLink>)}
            </ul>
        </nav>
    )
}

Nav.propTypes = {
    sections: PropTypes.array.isRequired,
    currentSection: PropTypes.string
};

const makeMapStateToProps = ()=>{
    const getSectionName = makeGetCurrentSectionName();
    return (state, props) => {
        return {
            currentSection: getSectionName(state, props)
        }
    }
}

export default  connect(makeMapStateToProps,null)(Nav);