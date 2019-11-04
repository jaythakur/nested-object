import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/actions';

import Row from './Row';

class SubSection extends React.Component {

    addNewSection = (index, nodeKey) => {
        this.props.addNewSection(nodeKey, index);
    }

    render() {
        // console.log(Object.values(this.props.fields[this.props.subSectionInfo.id]));
        return (
            <div id={this.props.subSectionInfo.id} className={this.props.subSectionInfo.classes.join(' ')}>
                <h5>{this.props.subSectionInfo.title}</h5>
                {Object.entries(this.props.subSectionInfo.formData).map( (formDataElement, index) => {
                    if (Array.isArray(formDataElement[1].fields)) {
                    } else {
                        return (
                                <Row 
                                    key={formDataElement[0]} 
                                    subSectionId={this.props.subSectionId}
                                    rowInfo={formDataElement[1]} />                        )
                    }
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fields: state.individual
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addNewSection: (nodeKey, index) => dispatch(actions.addNewSection(nodeKey, index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SubSection);
