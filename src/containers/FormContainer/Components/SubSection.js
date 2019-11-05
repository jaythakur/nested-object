import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/actions';

import Row from './Row';

class SubSection extends React.Component {

    addNewSection = (index, nodeKey) => {
        this.props.addNewSection(nodeKey, index);
    }

    removeNewSection = (index, nodeKey) => {
        this.props.removeNewSection(nodeKey, index);
    }

    render() {
        // console.log(Object.values(this.props.fields[this.props.subSectionInfo.id]));
        return (
            <div id={this.props.subSectionInfo.id} className={this.props.subSectionInfo.classes.join(' ')}>
                <h5>{this.props.subSectionInfo.title}</h5>
                {Object.entries(this.props.subSectionInfo.formData).map( (formDataElement, index) => {
                    if (Array.isArray(formDataElement[1].fields)) {
                        const stateFieldsArray = this.props.fields[formDataElement[0]];
                        console.log(stateFieldsArray.length)
                        const nodeKey = formDataElement[0];
                        return (
                            <React.Fragment key={formDataElement[0]}>
                                {stateFieldsArray.map( (arrayElement, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                        <div id={formDataElement[0]+"_"+index} 
                                        className="dynaminSection">
                                            {Object.entries(formDataElement[1].fields[0]).map((rowInfo, i) => {
                                                    return (
                                                        <Row key={i}
                                                            rowInfo={rowInfo[1]} 
                                                            nodeKey={formDataElement[0]} nodeIndex={index}/>
                                                )
                                                })}
                                        </div>
                                        {stateFieldsArray.length - index === 1 ? <button 
                                            type="button" 
                                            className="btn btn-primary"
                                            onClick={() => this.addNewSection(index, nodeKey)}>
                                            Add Section
                                        </button> : null }
                                        {stateFieldsArray.length > 1 && stateFieldsArray.length -index === 1  ? <button 
                                            type="button" 
                                            className="btn btn-primary"
                                            onClick={() => this.removeNewSection(index, nodeKey)}>
                                            Remove Section
                                        </button> : null }
                                        </React.Fragment>
                                    )
                                })}
                            </React.Fragment>
                        )
                        
                    } else {
                        return (
                                <Row 
                                    key={formDataElement[0]} 
                                    nodeKey=""
                                    nodeIndex=""
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
        addNewSection: (nodeKey, index) => dispatch(actions.addNewSection(nodeKey, index)),
        removeNewSection: (nodeKey, index) => dispatch(actions.removeNewSection(nodeKey, index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SubSection);
