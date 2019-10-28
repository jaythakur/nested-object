export default {
    valid: true,
    active: true,
    title: 'Individual Basic Information',
    id: 'basicInformation',
    classes: ['sub-section'],
    formData: {
        row1: {
            id: 'row1',
            classes: ['row'],
            fields: {
                prefix: {
                    elementType: 'select',
                    classes: [],
                    elementConfig: {
                        name: 'prefix',
                        id: 'prefix',
                        placeholder: 'Prefix',
                        options: [
                            { value: '', displayValue: 'Please Select' },
                            { value: 'option1', displayValue: 'Option 1' },
                            { value: 'option2', displayValue: 'Option 2' },
                            { value: 'option3', displayValue: 'Option 3' },
                            { value: 'option4', displayValue: 'Option 4' }
                        ]
                    },
                    validation: {
                        required: true
                    },
                    label: 'Prefix',
                    id: 'prefix',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                }
            }
        },
        row2: {
            id: 'row2',
            classes: ['row'],
            fields: {
                firstName: {
                    elementType: 'input',
                    classes: [],
                    elementConfig: {
                        type: 'text',
                        name: 'firstName',
                        id: 'firstName',
                        placeholder: 'Enter First Name',
                        maxLength: 20
                    },
                    validation: {
                        required: true,
                        pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
                    },
                    label: 'First Name',
                    id: 'firstName',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                },
                middleName: {
                    elementType: 'input',
                    classes: [],
                    elementConfig: {
                        type: 'text',
                        name: 'middleName',
                        id: 'middleName',
                        placeholder: 'Enter Middle Name',
                        maxLength: 20
                    },
                    validation: {},
                    label: 'Middle Name',
                    id: 'middleName',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                }
            }
        },
        row3: {
            id: 'row3',
            classes: ['row'],
            fields: {
                lastName: {
                    elementType: 'input',
                    classes: [],
                    elementConfig: {
                        type: 'text',
                        name: 'lastName',
                        id: 'lastName',
                        placeholder: 'Enter Last Name',
                        maxLength: 20
                    },
                    validation: {
                        required: true
                    },
                    label: 'Last Name',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                }
            }
        },
        row4: {
            id: 'row4',
            classes: ['row'],
            fields: {
                suffix: {
                    elementType: 'select',
                    classes: [],
                    elementConfig: {
                        type: 'text',
                        name: 'suffix',
                        id: 'suffix',
                        placeholder: 'Suffix',
                        options: [
                            { value: '', displayValue: 'Please Select' },
                            { value: 'option1', displayValue: 'Option 1' },
                            { value: 'option2', displayValue: 'Option 2' },
                            { value: 'option3', displayValue: 'Option 3' },
                            { value: 'option4', displayValue: 'Option 4' }
                        ]
                    },
                    validation: {},
                    label: 'Suffix',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                }
            }
        },
        row5: {
            id: 'row5',
            classes: ['row'],
            fields: {
                clientOrgination: {
                    elementType: 'select',
                    classes: [],
                    elementConfig: {
                        type: 'text',
                        name: 'clientOrgination',
                        id: 'clientOrgination',
                        placeholder: 'Client Orgination',
                        options: [
                            { value: '', displayValue: 'Please Select' },
                            { value: 'option1', displayValue: 'Option 1' },
                            { value: 'option2', displayValue: 'Option 2' },
                            { value: 'option3', displayValue: 'Option 3' },
                            { value: 'option4', displayValue: 'Option 4' }
                        ]
                    },
                    validation: {
                        required: true
                    },
                    label: 'Client Orgination',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: '',
                    dependencies: true
                },
                referral: {
                    elementType: 'select',
                    classes: ['hide'],
                    elementConfig: {
                        type: 'text',
                        name: 'referral',
                        id: 'referral',
                        placeholder: 'Referral',
                        options: [
                            { value: '', displayValue: 'Please Select' },
                            { value: 'option1', displayValue: 'Option 1' },
                            { value: 'option2', displayValue: 'Option 2' },
                            { value: 'option3', displayValue: 'Option 3' },
                            { value: 'option4', displayValue: 'Option 4' }
                        ]
                    },
                    validation: {
                        required: true
                    },
                    label: 'Referral',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                },
                campaign: {
                    elementType: 'input',
                    classes: ['hide'],
                    elementConfig: {
                        type: 'text',
                        name: 'campaign',
                        id: 'campaign',
                        placeholder: 'Campaign'
                    },
                    validation: {
                        required: true
                    },
                    label: 'Campaign',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                },
                prospecting: {
                    elementType: 'select',
                    classes: ['hide'],
                    elementConfig: {
                        type: 'text',
                        name: 'prospecting',
                        id: 'prospecting',
                        placeholder: 'Prospecting',
                        options: [
                            { value: '', displayValue: 'Please Select' },
                            { value: 'option1', displayValue: 'Option 1' },
                            { value: 'option2', displayValue: 'Option 2' },
                            { value: 'option3', displayValue: 'Option 3' },
                            { value: 'option4', displayValue: 'Option 4' }
                        ]
                    },
                    validation: {
                        required: true
                    },
                    label: 'Prospecting',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                },
            }
        }
    }
}