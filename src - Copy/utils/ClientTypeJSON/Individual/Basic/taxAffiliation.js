export default {
    valid: true,
    active: true,
    title: 'Tax Affiliation',
    id: 'taxAffiliation',
    classes: ['sub-section'],
    formData: {
        row1: {
            id: 'row1',
            classes: ['row'],
            fields: {
                usCitizen: {
                    elementType: 'radio',
                    classes: [],
                    id: 'usCitizen',
                    elementConfig: {
                        type: 'radio',
                        name: 'usCitizen',
                        id: 'usCitizen',
                        options: [
                            { value: true, displayValue: 'Yes', id: 'usCitizenYes' },
                            { value: false, displayValue: 'No', id: 'usCitizenNo' }
                        ]
                    },
                    validation: {
                        required: true
                    },
                    label: 'Us Citizen',
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
                residentAlien: {
                    elementType: 'radio',
                    classes: [],
                    id: 'residentAlien',
                    elementConfig: {
                        type: 'radio',
                        name: 'residentAlien',
                        id: 'residentAlien',
                        options: [
                            { value: true, displayValue: 'Yes', id: 'residentAlienYes' },
                            { value: false, displayValue: 'No', id: 'residentAlienNo' }
                        ]
                    },
                    validation: {
                        required: false
                    },
                    label: 'Resident Alien',
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
                countryOfCitizenship: {
                    elementType: 'select',
                    classes: [],
                    id: 'countryOfCitizenship',
                    elementConfig: {
                        name: 'countryOfCitizenship',
                        id: 'countryOfCitizenship',
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
                    label: 'Country Of Citizenship',
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
                countryOfBirth: {
                    elementType: 'select',
                    classes: [],
                    id: 'countryOfBirth',
                    elementConfig: {
                        name: 'countryOfBirth',
                        id: 'countryOfBirth',
                        options: [
                            { value: '', displayValue: 'Please Select' },
                            { value: 'option1', displayValue: 'Option 1' },
                            { value: 'option2', displayValue: 'Option 2' },
                            { value: 'option3', displayValue: 'Option 3' },
                            { value: 'option4', displayValue: 'Option 4' }
                        ]
                    },
                    validation: {},
                    label: 'Country Of Birth',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                },
                language: {
                    elementType: 'select',
                    classes: [],
                    id: 'language',
                    elementConfig: {
                        name: 'language',
                        id: 'language',
                        options: [
                            { value: '', displayValue: 'Please Select' },
                            { value: 'option1', displayValue: 'Option 1' },
                            { value: 'option2', displayValue: 'Option 2' },
                            { value: 'option3', displayValue: 'Option 3' },
                            { value: 'option4', displayValue: 'Option 4' }
                        ]
                    },
                    validation: {},
                    label: 'Langauage',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                }
            }
        },
        /*row5: {
            id: 'row5',
            classes: ['row'],
            fields: {
                passport: {
                    elementType: 'input',
                    classes: [],
                    elementConfig: {
                        type: 'text',
                        name: 'passport',
                        id: 'passport',
                        placeholder: 'Passport'
                    },
                    validation: {
                        required: true
                    },
                    label: 'Passport',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                },
                tin: {
                    elementType: 'input',
                    classes: [],
                    elementConfig: {
                        name: 'language',
                        id: 'language',
                        placeholder: 'Tin'
                    },
                    validation: {
                        required: true
                    },
                    label: 'Tin',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                }
            }
        },
        row6: {
            id: 'row6',
            classes: ['row'],
            fields: {
                tax: {
                    elementType: 'radio',
                    classes: [],
                    elementConfig: {
                        type: 'radio',
                        name: 'tax',
                        id: 'tax',
                        options: [
                            { value: true, displayValue: 'Yes', id: 'taxYes' },
                            { value: false, displayValue: 'No', id: 'taxNo' }
                        ]
                    },
                    validation: {
                        required: false
                    },
                    label: 'Tax',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                }
            }
        },
        row7: {
            id: 'row7',
            classes: ['row'],
            fields: {
                tinType: {
                    elementType: 'select',
                    classes: [],
                    elementConfig: {
                        name: 'tinType',
                        id: 'tinType',
                        options: [
                            { value: '', displayValue: 'Please Select' },
                            { value: 'option1', displayValue: 'Option 1' },
                            { value: 'option2', displayValue: 'Option 2' },
                            { value: 'option3', displayValue: 'Option 3' },
                            { value: 'option4', displayValue: 'Option 4' }
                        ]
                    },
                    validation: {},
                    label: 'Tin Type',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                }
            }
        },
        row8: {
            id: 'row8',
            classes: ['row'],
            fields: {
                federalMarginal: {
                    elementType: 'select',
                    classes: [],
                    elementConfig: {
                        name: 'federalMarginal',
                        id: 'federalMarginal',
                        options: [
                            { value: '', displayValue: 'Please Select' },
                            { value: 'option1', displayValue: 'Option 1' },
                            { value: 'option2', displayValue: 'Option 2' },
                            { value: 'option3', displayValue: 'Option 3' },
                            { value: 'option4', displayValue: 'Option 4' }
                        ]
                    },
                    validation: {},
                    label: 'Federal Marginal Tax Rate',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                }
            }
        }*/
    }
}