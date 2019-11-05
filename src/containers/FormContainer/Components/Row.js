import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/actions';

import Element from './Element';
import RecursiveFields from './RecursiveFields';

class Row extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            obj: this.props.rowInfo.individual
        }
    }

    updateDataHandler = (objectKey, updatedObject) => {
        updatedObject.ids = objectKey;
        this.props.backToParent(updatedObject);
    }
   
    render() {
        const clonedFields = this.props.rowInfo.fields;
        let html;
            html = (<div id={this.props.rowInfo.id} className={this.props.rowInfo.classes.join(' ')}>
                {Object.entries(clonedFields).map( fieldInfo => (
                                            <Element
                                                key={fieldInfo[0]} 
                                                elementInfo={fieldInfo[1]}
                                                id={fieldInfo[0]} 
                                                subSectionId={this.props.subSectionId}
                                                nodeKey={this.props.nodeKey}
                                                nodeIndex={this.props.nodeIndex} />
                                        ))}
            </div>)
        
        

        return (
            <React.Fragment>
                {html}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        fields: state.individual
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChangePerson: (key, value) => dispatch(actions.updateField(key, value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Row);
