import React from 'react';
import { connect } from 'react-redux'
import {makeGetAppTitle} from '../selectors/appSelectors'

const Title = ({title})=>{
    document.title = title;
    return null;
}

const makeMapStateToProps = ()=>{
    const getAppTitle = makeGetAppTitle();
    return (state, props) => {
        return {
            title: getAppTitle(state, props)
        }
    }
}

export default  connect(makeMapStateToProps,null)(Title);