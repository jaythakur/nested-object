import React from 'react';

import Element from './Element';

class RecursiveFields extends React.Component {
   
    render() {
        const fieldArray = [];
            for (let key in this.props.fieldObjects) {
                fieldArray.push({
                    id: key,
                    config: this.props.fieldObjects[key]
                });
            }
        return (
            <React.Fragment>
                {fieldArray.map( fieldInfo => (
                                            <Element
                                                key={fieldInfo.id} 
                                                elementInfo={fieldInfo.config} />
                                        ))}
            </React.Fragment>
        );
    }
}

export default RecursiveFields;
