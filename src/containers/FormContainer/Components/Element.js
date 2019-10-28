import React from 'react';

import Input from '../../../components/UI/Input/Input';

class Element extends React.Component {

    checkValidity = (value, rules) => {
        let isValid = true;
        if (!rules) {
            return true;
        }
        console.log(rules);
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.pattern) {
            const pattern = rules.pattern;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event) => {
        const elementInfo = {...this.props.elementInfo};
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        elementInfo.value = value;
        elementInfo.valid = this.checkValidity(elementInfo.value, elementInfo.validation);
        elementInfo.touched = true;
        const updatedObj = {
            updateElement: elementInfo,
            ids: ''
        }
        console.log(updatedObj);
        this.props.backToParent('', updatedObj);
    }
   
    render() {
        const elementInfo = this.props.elementInfo;
        return (
            <div className={"col-md-4 " + elementInfo.classes.join(' ')}>
                            <Input
                                elementType={elementInfo.elementType}
                                elementConfig={elementInfo.elementConfig}
                                value={elementInfo.value}
                                label={elementInfo.label}
                                invalid={!elementInfo.valid}
                                shouldValidate={elementInfo.validation}
                                touched={elementInfo.touched}
                                errorMessage="This field is required"
                                tooltipText={elementInfo.tooltipText}
                                changed={(event) => this.inputChangedHandler(event)} />
                        </div>
        )
    }
}

export default Element;
