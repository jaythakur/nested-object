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
                    label: 'Prefix',
                    id: 'basicInformation_prefix',
                    tooltipText: '',
                    classes: [],
                    elementType: 'select',
                    value: '',
                    valid: true,
                    required: true,
                    validation: {
                        isRequired: true
                    },
                    elementConfig: {
                        name: 'basicInformation_prefix',
                        id: 'basicInformation_prefix',
                        options: [
                            { value: '', displayValue: 'Please Select' },
                            { value: 'option1', displayValue: 'Option 1' },
                            { value: 'option2', displayValue: 'Option 2' },
                            { value: 'option3', displayValue: 'Option 3' },
                            { value: 'option4', displayValue: 'Option 4' }
                        ]
                    }
                }
            }
        },
        row2: {
            id: 'row2',
            classes: ['row'],
            fields: {
                firstName: {
                    label: 'First Name',
                    id: 'basicInformation_firstName',
                    tooltipText: '',
                    classes: [],
                    elementType: 'input',
                    value: '',
                    valid: true,
                    required: true,
                    validation: {
                        isRequired: true
                    },
                    elementConfig: {
                        type: 'text',
                        name: 'basicInformation_firstName',
                        id: 'basicInformation_firstName',
                        placeholder: 'Enter First Name',
                        maxLength: 20
                    }
                },
                lastName: {
                    label: 'Last Name',
                    id: 'basicInformation_lastName',
                    tooltipText: '',
                    classes: [],
                    elementType: 'input',
                    value: '',
                    valid: true,
                    required: true,
                    validation: {
                        isRequired: true
                    },
                    elementConfig: {
                        type: 'text',
                        name: 'basicInformation_lastName',
                        id: 'basicInformation_lastName',
                        placeholder: 'Enter Last Name',
                        maxLength: 20
                    }
                }
            }
        },
        /*row3: {
            id: 'row3',
            classes: ['row'],
            fields: {
                lastName: {
                    elementType: 'input',
                    classes: [],
                    id: 'lastName',
                    elementConfig: {
                        type: 'text',
                        name: 'lastName',
                        id: 'lastName',
                        placeholder: 'Enter Last Name',
                        maxLength: 20
                    },
                    label: 'Last Name',
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
                    id: 'suffix',
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
                    id: 'clientOrgination',
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
                    id: 'referral',
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
                    id: 'campaign',
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
                    classes: [],
                    id: 'prospecting',
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
        } */
    }
}