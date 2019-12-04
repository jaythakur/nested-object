import React from 'react';
import { connect } from 'react-redux';

class TaxAffiliation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            formData: {
                firstName: {
                    required: true,
                    valid: true,
                    errorMessage: ''
                },
                lastName: {
                    required: true,
                    valid: true,
                    errorMessage: ''
                }
            }
        }
    }

    validate = (obj, value) => {
        if (value.trim() === '') {
            obj.valid = false;
            obj.errorMessage = 'This field is required';
        } else {
            obj.valid = true;
        }

        return obj;
    }

    blurHandler = event => {
        event.preventDefault();
        const { name, value } = event.target;
        this.props.onBlurUpdate(name, value);
    }

    changeHandler = event => {
        event.preventDefault();
        const { name, value } = event.target;
        let formData = this.state.formData;

        switch (name) {
            case 'firstName':
                formData.firstName = {...formData.firstName, ...this.validate(formData.firstName, value)}
                break;

            case 'lastName':
                formData.lastName = {...formData.lastName, ...this.validate(formData.lastName, value)}
                break;

            default:
                break;
        }

        this.setState({formData, [name]: value});
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('[TaxAffiliation.js] getDerivedStateFromProps');
        if (props.basicInformation.firstName === 'jay') {
            state.formData.firstName.required = false;
        }
        return state;
    }

    render() {
        const formData = this.state.formData;
        console.log('[TaxAffiliation.js] render');
        console.log(this.props.basicInformation)
        return (
            <React.Fragment>
                <div className="form-group">
                    <label htmlFor="firstName">
                        First Name
                        {
                        this.state.formData.firstName.required ? 
                        <span className="required">*</span> : null
                        }
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="firstName" 
                        id="firstName" 
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={this.changeHandler}
                        onBlur={this.blurHandler} />
                    {
                    !formData.firstName.valid ?
                    <div className="error">
                        {formData.firstName.errorMessage}
                    </div> : null }
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">
                        Last Name
                        <span className="required">*</span>
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="lastName" 
                        id="lastName" 
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={this.changeHandler}
                        onBlur={this.blurHandler} />
                        {
                        !formData.lastName.valid ?
                        <div className="error">
                            {formData.lastName.errorMessage}
                        </div> : null }
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        taxAffiliation: state.taxAffiliation,
        basicInformation: state.basicInformation
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onBlurUpdate: (key, value) => 
        dispatch({type: 'UPDATE_TAX_AFFILIATION', payload: { key: key, value: value}})
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(TaxAffiliation);
