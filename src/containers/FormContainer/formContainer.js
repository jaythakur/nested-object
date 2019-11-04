import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions'

import './formContainer.scss';
import cobFormObject from '../../utils/form';
import Section from './Components/Section';

class FormContainer extends React.Component {

    componentWillMount() {
        this.props.setInitialState(cobFormObject.clientTypes.individual)
    }

    render() {
        const clonedFormObj = cobFormObject.clientTypes.individual;
        return (
            <React.Fragment>
                <h1>{clonedFormObj.title}</h1>
                {Object.entries(clonedFormObj.sections).map( sectionElement => (
                    <Section 
                        key={sectionElement[0]} 
                        sectionInfo={sectionElement[1]} />
                ))}
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setInitialState: (obj) => dispatch(actions.setInitialState(obj))
    }
};

export default connect(null, mapDispatchToProps)(FormContainer);