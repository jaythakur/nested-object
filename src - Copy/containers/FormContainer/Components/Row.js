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
        const clonedFields = this.props.rowInfo.individual;
        let html;
        if(Array.isArray(clonedFields)) {
            html = clonedFields.map( (rowInfo, index) => 
                <div className={rowInfo.classes.join(' ')} id={rowInfo.id} key={index}>
                    <RecursiveFields fieldObjects={rowInfo.individual} />
                </div>
            )
            
        } else {
            const fieldArray = [];
            for (let key in clonedFields) {
                fieldArray.push({
                    id: key,
                    config: clonedFields[key]
                });
            }
            html = (<div id={this.props.rowInfo.id} className={this.props.rowInfo.classes.join(' ')}>
                {fieldArray.map( fieldInfo => (
                                            <Element
                                                key={fieldInfo.id} 
                                                elementInfo={fieldInfo.config} 
                                                node={this.props.id}
                                                index={this.props.index} />
                                        ))}
            </div>)
        }
        

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
