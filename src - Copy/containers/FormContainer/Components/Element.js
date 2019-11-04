import React from 'react';

import Input from '../../../components/UI/Input/Input';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/actions';

class Element extends React.Component {

    checkValidity = (value, rules) => {
        let isValid = true;
        if (!rules) {
            return true;
        }
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

    inputChangedHandlerNew = (event, key) => {
        const obj = {};
        obj.value = event.target.value;
        obj.valid = this.checkValidity(event.target.value, this.props.elementInfo.validation);
        this.props.onChangePerson(key, obj, this.props.node, this.props.index);
    }
   
    render() {
        const elementInfo = this.props.elementInfo;
        const value = this.props.individual[this.props.node][this.props.index][ID].value;
       
        return (
            <div className={"col-md-4 " + elementInfo.classes.join(' ')}>
                            <Input
                                elementType={elementInfo.elementType}
                                elementConfig={elementInfo.elementConfig}
                                value={value}
                                label={elementInfo.label}
                                invalid=""
                                shouldValidate=""
                                touched={elementInfo.touched}
                                errorMessage="This field is required"
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
        onChangePerson: (key, value, node, index) => dispatch(actions.updateField(key, value, node, index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Element);
