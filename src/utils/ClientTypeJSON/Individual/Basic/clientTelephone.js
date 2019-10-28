export default {
    valid: true,
    active: true,
    title: 'Telephone Information',
    id: 'clientTelephone',
    classes: ['sub-section'],
    formData: {
        row1: {
            id: 'row1',
            classes: [],
            fields: [
                {
                    key: '1',
                    primary: true,
                    id: 'clientTelephoneSelection',
                    details: {
                        row1: {
                            id: 'row1',
                            classes: ['row'],
                            fields: {
                                telephoneLabel: {
                                    elementType: 'select',
                                    classes: [],
                                    elementConfig: {
                                        name: 'telephoneLabel',
                                        id: 'telephoneLabel',
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
                                    label: 'Telephone Label',
                                    value: '',
                                    valid: true,
                                    touched: false,
                                    tooltipText: ''
                                },
                                countryCode: {
                                    elementType: 'select',
                                    classes: [],
                                    elementConfig: {
                                        name: 'countryCode',
                                        id: 'countryCode',
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
                                    label: 'Country Code',
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
                                areaCityCode: {
                                    elementType: 'input',
                                    classes: [],
                                    elementConfig: {
                                        type: 'text',
                                        name: 'areaCityCode',
                                        id: 'areaCityCode',
                                        placeholder: 'Enter Area City Code',
                                        maxLength: 20
                                    },
                                    validation: {
                                        required: true
                                    },
                                    label: 'Enter Area City Code',
                                    value: '',
                                    valid: true,
                                    touched: false,
                                    tooltipText: ''
                                },
                                phoneNumber: {
                                    elementType: 'input',
                                    classes: [],
                                    elementConfig: {
                                        type: 'text',
                                        name: 'phoneNumber',
                                        id: 'phoneNumber',
                                        placeholder: 'Phone Number',
                                        maxLength: 20
                                    },
                                    validation: {
                                        required: true
                                    },
                                    label: 'Phone Number',
                                    value: '',
                                    valid: true,
                                    touched: false,
                                    tooltipText: ''
                                },
                                ext: {
                                    elementType: 'input',
                                    classes: [],
                                    elementConfig: {
                                        type: 'text',
                                        name: 'ext',
                                        id: 'ext',
                                        placeholder: 'ext',
                                        maxLength: 20
                                    },
                                    validation: {
                                        required: true
                                    },
                                    label: 'Ext',
                                    value: '',
                                    valid: true,
                                    touched: false,
                                    tooltipText: ''
                                }
                            }
                        }
                    }
                }
            ]
        }
    }
}