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
        let newObj;
        if (this.props.nodeKey !== '' && this.props.nodeIndex !== '') {
            newObj = {...obj.attributes, ...this.checkValidity(event.target.value, this.props.fields[this.props.nodeKey][this.props.nodeIndex][key], this.props.elementInfo)};
            obj.attributes = newObj;
            stateArray.push(obj);
            this.props.onChangePerson(stateArray, this.props.nodeKey, this.props.nodeIndex);
            // this.props.onUpdateSection(this.props.subSectionId, key, obj.attributes.valid);
        } else {
            newObj = {...obj.attributes, ...this.checkValidity(event.target.value, this.props.fields[key], this.props.elementInfo)};
            obj.attributes = newObj;
            stateArray.push(obj);
            const newArray = this.rules(key, event.target.value);
            const combineArray = newArray.length > 0 ? stateArray.concat(newArray) : stateArray;
            this.props.onChangePerson(combineArray, '', '');
            this.props.onUpdateSection(this.props.subSectionId, key, obj.attributes.valid);
        }
        
    }
   
    render() {
        let valid;
        let isRequired;
        let fieldConfig;
        let fieldValue;
        let errorMessage;
        let combineClasses;
        let ID = this.props.id;
        let elementInfo = this.props.elementInfo;
        if (this.props.nodeKey !== '' && this.props.nodeIndex !== '') {
            const nodeKey = this.props.nodeKey;
            const nodeIndex = this.props.nodeIndex;
            valid = this.props.fields[nodeKey][nodeIndex][ID].valid;
            isRequired = this.props.fields[nodeKey][nodeIndex][ID].required;
            fieldConfig = {...elementInfo.elementConfig, ...this.props.fields[nodeKey][nodeIndex][ID].config}
            fieldValue = this.props.fields[nodeKey][nodeIndex][ID].value;
            let jsonClasses = elementInfo.classes;
            const stateClasses = this.props.fields[nodeKey][nodeIndex][ID].classes === undefined ? [] : this.props.fields[nodeKey][nodeIndex][ID].classes;
            combineClasses = [...jsonClasses, ...stateClasses];
            combineClasses = [...new Set(combineClasses)];
            const fieldShowClassIndex = combineClasses.indexOf('show');
            if (fieldShowClassIndex !== -1) {
                const findHideClassIndex = combineClasses.indexOf('hide');
                if (findHideClassIndex !== -1) {
                    combineClasses.splice(findHideClassIndex, 1);
                }
            }
            combineClasses = combineClasses.length > 0 ? combineClasses.classes.join(' ') : '';
            errorMessage = this.props.fields[nodeKey][nodeIndex][ID].errorMessage; 
        } else {
        valid = this.props.fields[ID].valid;
        isRequired = this.props.fields[ID].required;
        fieldConfig = {...elementInfo.elementConfig, ...this.props.fields[ID].config}
        fieldValue = this.props.fields[ID].value;
        let jsonClasses = elementInfo.classes;
        const stateClasses = this.props.fields[ID].classes === undefined ? [] : this.props.fields[ID].classes;
        combineClasses = [...jsonClasses, ...stateClasses];
        combineClasses = [...new Set(combineClasses)];
        const fieldShowClassIndex = combineClasses.indexOf('show');
        if (fieldShowClassIndex !== -1) {
            const findHideClassIndex = combineClasses.indexOf('hide');
            if (findHideClassIndex !== -1) {
                combineClasses.splice(findHideClassIndex, 1);
            }
        }
        combineClasses = combineClasses.length > 0 ? combineClasses.classes.join(' ') : '';
        errorMessage = this.props.fields[ID].errorMessage;
        }
        
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
        onChangePerson: (combineArray, nodeKey, nodeIndex) => dispatch(actions.updateField(combineArray, nodeKey, nodeIndex)),
        onUpdateSection: (sectionId, key, status) => dispatch(actions.updateSection(sectionId, key, status))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Element);
