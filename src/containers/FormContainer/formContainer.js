import React from 'react';

import './formContainer.scss';
import cobFormObject from '../../utils/form';
import Section from './Components/Section';
import { basicSectionRules } from '../../rules/basicSectionRules';

class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formObj: cobFormObject.clientTypes.individual
        }
    }

    loopState = () => {

    }

    updateState(formObj, updatedObject) {
        Object.entries(formObj.sections).forEach( (value) => {
            Object.entries(value[1].subSections).forEach( (value) => {
                Object.entries(value[1].formData).forEach( (value) => {
                    
                    if(value[1].fields.hasOwnProperty('formData')) {
                        Object.entries(value[1].fields.formData).forEach( (value) => {
                            if(value[1].fields[updatedObject.ids]) {
                                value[1].fields[updatedObject.ids] = updatedObject.updateElement;
                            }
                        })
                    }
                    if(value[1].fields[updatedObject.ids]) {
                        value[1].fields[updatedObject.ids] = updatedObject.updateElement;
                    }
                    return;
                });
            });
        });
        
        let idsArray = [updatedObject.ids];
        let value = updatedObject.updateElement.value;
        const upatedRulesObj = basicSectionRules(formObj.sections, idsArray, value);
        formObj.sections = upatedRulesObj
        return formObj;
    }

    updateDataHandler = (updatedObject) => {
        let newFormObj;
        newFormObj = this.updateState(this.state.formObj, updatedObject);
        this.setState({
            formObj: newFormObj
        });
    }

    render() {
        const sectionsArray = [];
        const clonedFormObj = this.state.formObj;
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
                        sectionInfo={sectionElement.config} 
                        backToParent={this.updateDataHandler} />
                ))}
                {/*<Sections sections={this.state.formObj.sections} backToParent={this.updateDataHandler} />*/}
            </div>
        )
    }
}

export default FormContainer;
