import React from 'react';

import './Input.css';

const input = ( props ) => {
    let inputElement = null;
    let validationError = null;
    let required = null;
    let tooltip =  null;
    let helpText = null;
    const inputClasses = ['InputElement'];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push('Invalid');
        validationError = <p className='ValidationError'>{props.errorMessage}</p>;
    }

    if (Object.keys(props.shouldValidate).length > 0 && props.shouldValidate.required) {
        required = <span className="required">*</span>
    }
    
    if (props.tooltipText) {
        tooltip = <span data-toggle='tooltip' 
        className="elementTooltip" 
        title='We need your phone number because...'>(?)</span>
    }

    if (props.hasOwnProperty('helpText')) {
        helpText = <small className="form-text text-muted">{props.helpText}</small>
    }
    
    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
                onBlur={props.blured}
                onClick={props.clicked} />;
            break;
        case ( 'label' ):
            inputElement = <label htmlFor={props.id}>{props.value}</label>;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        case ( 'radio' ):
            inputElement = (
                <React.Fragment>
                    {props.elementConfig.options.map(option => (
                        <div className="form-check form-check-inline" key={option.value}>
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name={props.elementConfig.name} 
                                id={option.id} 
                                value={option.value}
                                defaultChecked={option.value === props.value}
                                onChange={props.changed} />
                            <label className="form-check-label" htmlFor={option.id}>{option.displayValue}</label>
                        </div>
                    ))}
                </React.Fragment>
            );
            break;
            case ( 'checkbox' ):
            inputElement = (
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        name={props.elementConfig.name} 
                        id={props.elementConfig.id} 
                        value={props.elementConfig.option.value}
                        defaultChecked={props.elementConfig.option.value === props.value}
                        onChange={props.changed} />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">{props.elementConfig.option.displayValue}</label>
                </div>
            )
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className="form-group">
            <label className="Label">
                {props.label} 
                {required}
                {tooltip}
            </label>
            {inputElement}
            {validationError}
            {helpText}
        </div>
    );

};

export default input;