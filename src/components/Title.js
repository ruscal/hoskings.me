import React from 'react';
import { connect } from 'react-redux'
import {makeGetAppTitle} from '../selectors/appSelectors'
import PropTypes from 'prop-types';

const Title = ({title})=>{
    document.title = title;
    return null;
}

Title.propTypes = {
    title: PropTypes.string
};

const makeMapStateToProps = ()=>{
    const getAppTitle = makeGetAppTitle();
    return (state, props) => {
        return {
            title: getAppTitle(state, props)
        }
    }
}

export default  connect(makeMapStateToProps,null)(Title);