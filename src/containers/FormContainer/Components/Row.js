import React from 'react';

import Element from './Element';
import SubSection from './SubSection';

class Row extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            obj: this.props.rowInfo.fields
        }
    }

    updateDataHandler = (objectKey, updatedObject) => {
        updatedObject.ids = objectKey;
        this.props.backToParent(updatedObject);
    }
   
    render() {
        const clonedFields = this.props.rowInfo.fields;
        let html;
        if(clonedFields.hasOwnProperty('formData')) {
            html = <SubSection
                        subSectionInfo={clonedFields} />
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
                                                elementInfo={fieldInfo.config} />
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

export default Row;
