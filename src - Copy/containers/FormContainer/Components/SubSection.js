import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/actions';

import Row from './Row';

class SubSection extends React.Component {

    addNewSection = (index, nodeKey) => {
        this.props.addNewSection(nodeKey, index);
    }

    render() {
        const formDataArray = [];
        for (let key in this.props.subSectionInfo.formData) {
            formDataArray.push({
                id: key,
                config: this.props.subSectionInfo.formData[key]
            });
        }
        return (
            <div id={this.props.subSectionInfo.id} className={this.props.subSectionInfo.classes.join(' ')}>
                <h5>{this.props.subSectionInfo.title}</h5>
                {formDataArray.map( (formDataElement, index) => {
                    if (Array.isArray(formDataElement.config.individual)) {
                        const fieldsArray = formDataElement.config.individual;
                        const stateFieldsArray = this.props.individual[formDataElement.config.id];
                        const nodeKey = formDataElement.config.id;
                        return (
                            <React.Fragment key={index}>
                                {stateFieldsArray.map( (rowInfo, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                        <div
                                            className="dynaminSection">
                                                {Object.entries(fieldsArray[0]).map((rowInfo, i) => {
                                                    return (
                                                        <Row key={i}
                                                            rowInfo={rowInfo[1]} id={nodeKey} index={index}/>
                                                )
                                                })}
                                            </div>
                                            {stateFieldsArray.length - index === 1 ? <button 
                                                type="button" 
                                                className="btn btn-primary"
                                                onClick={() => this.addNewSection(index, nodeKey)}>
                                                Add Section
                                            </button> : null }
                                            </React.Fragment>
                                    )
                                })}
                        
                        </React.Fragment>
                        )
                    } else {
                        return (
                                <Row 
                                    key={formDataElement.id} 
                                    rowInfo={formDataElement.config} />                        )
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
