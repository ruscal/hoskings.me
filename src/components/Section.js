import React, {Component} from 'react';
import { connect } from 'react-redux'
import {sectionHasChanged} from '../actions/app'
import PropTypes from 'prop-types';

class Section extends Component {

    componentWillMount(){
        this.props.handleChangeSection(this.props.section);
    }


    render () {
        return (
            <section>
                {this.props.children}
            </section>
        );
    }
}

Section.propTypes = {
    section: PropTypes.object.isRequired
};

export default connect(null, {handleChangeSection:sectionHasChanged})(Section);