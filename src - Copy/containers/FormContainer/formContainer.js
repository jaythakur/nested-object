import React from 'react';

import './formContainer.scss';
import cobFormObject from '../../utils/form';
import Section from './Components/Section';

class FormContainer extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const sectionsArray = [];
        const clonedFormObj = cobFormObject.clientTypes.individual;
        for (let key in clonedFormObj.sections) {
            sectionsArray.push({
                id: key,
                config: clonedFormObj.sections[key]
            });
        }
        return (
            <div>
                <h1>{clonedFormObj.title}</h1>
                {sectionsArray.map( sectionElement => (
                    <Section 
                        key={sectionElement.id} 
                        sectionInfo={sectionElement.config} />
                ))}
            </div>
        )
    }
}

export default FormContainer;
