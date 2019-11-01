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
        console.log('key-'+key+' value '+event.target.value);
        console.log(this.props.elementInfo);
        const obj = {};
        obj.value = event.target.value;
        obj.valid = this.checkValidity(event.target.value, this.props.elementInfo.validation);
        console.log(obj.valid);
        this.props.onChangePerson(key, obj);
    }

    inputChangedHandler = (event, id) => {
        const obj = {...this.state[id]};
        obj.value = event.target.value;
        if(id === 'prefix') {
            var firstName = {...this.state.firstName}
            firstName.value = event.target.value;
            this.setState({firstName})
        }
        /*this.setState({
            [id]: obj
        })*/
        /*const elementInfo = {...this.props.elementInfo};
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        elementInfo.value = value;
        elementInfo.valid = this.checkValidity(elementInfo.value, elementInfo.validation);
        elementInfo.touched = true;
        const updatedObj = {
            updateElement: elementInfo,
            ids: ''
        }
        this.props.backToParent('', updatedObj);*/
    }
   
    render() {
        const elementInfo = this.props.elementInfo;
        const valid = this.props.fields[elementInfo.id].valid !== undefined ? this.props.fields[elementInfo.id].valid : elementInfo.valid;
        console.log('Element-'+valid+'--'+this.props.fields[elementInfo.id].valid);
        return (
            <div className={"col-md-4 " + elementInfo.classes.join(' ')}>
                            <Input
                                elementType={elementInfo.elementType}
                                elementConfig={elementInfo.elementConfig}
                                value={this.props.fields[elementInfo.id].value}
                                label={elementInfo.label}
                                invalid={!valid}
                                shouldValidate={elementInfo.validation}
                                touched={elementInfo.touched}
                                errorMessage="This field is required"
                                tooltipText={elementInfo.tooltipText}
                                changed={(event) => this.inputChangedHandlerNew(event, elementInfo.id)} />
                        </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        fields: state.fields
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChangePerson: (key, value) => dispatch(actions.updateField(key, value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Element);
