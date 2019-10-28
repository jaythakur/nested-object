import React from 'react';

import Element from './Element';
import SubSection from './SubSection';

class Row extends React.Component {

    updateDataHandler = (objectKey, updatedObject) => {
        updatedObject.ids = objectKey;
        this.props.backToParent(updatedObject);
    }
   
    render() {
        const clonedFields = this.props.rowInfo.fields;
        let html;
        if(clonedFields.hasOwnProperty('formData')) {
            console.log(clonedFields)
            html = <SubSection
                        subSectionInfo={clonedFields}
                        backToParent={this.props.backToParent} />
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
                                                backToParent={(e, updatedObject) => this.updateDataHandler(fieldInfo.id, updatedObject)} />
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
