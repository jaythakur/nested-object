import React from 'react';

import Input from '../../../components/UI/Input/Input';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/actions';

class Element extends React.Component {

    checkValidity = (value, element, formJsonObj) => {
        const rules = element.validation;
        let isValid = true;
        let errorMessage = null;

        if (!rules) {
            return true;
        }
        if (rules.isRequired) {
            isValid = value.trim() !== '' ? true : false;
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

        return {
            valid: isValid,
            errorMessage: 'This field is required'
        }
    }

    rules = (key, value) => {
        const stateArray = [];
        if (key === 'prefix' && value.trim() !== '') {
            if (value === 'option1') {
                const obj = {};
                obj.key = 'firstName';
                obj.attributes = {
                    value: '',
                    required: false,
                    valid: true
                }

                stateArray.push(obj);
            } else if (value === 'option2') {
                const obj = {};
                obj.key = 'firstName';
                obj.attributes = {
                    value: '',
                    required: true,
                    valid: true
                }

                stateArray.push(obj);
            }
        }

        return stateArray;
    }

    checkAllowedCharacter = (element, value) => {
        if (element.allowedOnly) {
            const pattern = element.allowedOnly;
            if (value.trim() !== '' || pattern.test(value)) {
                return true
            } else {
                return false
            }
        }

        return true;
    }

    inputChangedHandlerNew = (event, key) => {
        const stateArray = [];
        const allowedOnly = this.checkAllowedCharacter(this.props.elementInfo, event.target.value);
        if (!allowedOnly) return false;
        const obj = {
            key: key,
            attributes: {
                value: event.target.value
            }
        }

        const newObj = {...obj.attributes, ...this.checkValidity(event.target.value, this.props.fields[key], this.props.elementInfo)}
        obj.attributes = newObj;
        stateArray.push(obj);
        const newArray = this.rules(key, event.target.value);
        const combineArray = newArray.length > 0 ? stateArray.concat(newArray) : stateArray;
        this.props.onChangePerson(combineArray);
        this.props.onUpdateSection(this.props.subSectionId, key, obj.attributes.valid);
    }
   
    render() {
        const ID = this.props.id;
        const elementInfo = this.props.elementInfo;
        const valid = this.props.fields[ID].valid;
        const isRequired = this.props.fields[ID].required;
        const fieldConfig = {...elementInfo.elementConfig, ...this.props.fields[ID].config}
        const fieldValue = this.props.fields[ID].value;
        let jsonClasses = elementInfo.classes;
        const stateClasses = this.props.fields[ID].classes === undefined ? [] : this.props.fields[ID].classes;
        let combineClasses = [...jsonClasses, ...stateClasses];
        combineClasses = [...new Set(combineClasses)];
        const fieldShowClassIndex = combineClasses.indexOf('show');
        if (fieldShowClassIndex !== -1) {
            const findHideClassIndex = combineClasses.indexOf('hide');
            if (findHideClassIndex !== -1) {
                combineClasses.splice(findHideClassIndex, 1);
            }
        }
        combineClasses = combineClasses.length > 0 ? combineClasses.classes.join(' ') : '';
        const errorMessage = this.props.fields[ID].errorMessage;
        // const value = this.props.individual[this.props.node][this.props.index][ID].value;

        return (
            <div className={"col-md-4 "+combineClasses }>
                            <Input
                                elementType={elementInfo.elementType}
                                elementConfig={fieldConfig}
                                value={fieldValue}
                                label={elementInfo.label}
                                invalid={!valid}
                                shouldValidate={isRequired}
                                touched={elementInfo.touched}
                                errorMessage={errorMessage}
                                tooltipText={elementInfo.tooltipText}
                                changed={(event) => this.inputChangedHandlerNew(event, ID)} />
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
        onChangePerson: (combineArray) => dispatch(actions.updateField(combineArray)),
        onUpdateSection: (sectionId, key, status) => dispatch(actions.updateSection(sectionId, key, status))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Element);
