export default {
    valid: true,
    active: true,
    title: 'E-Delivery',
    id: 'eDelivery',
    classes: ['sub-section'],
    formData: {
        row1: {
            id: 'row1',
            classes: ['row'],
            fields: {
                dDeliveryPrefrence: {
                    elementType: 'select',
                    classes: [],
                    elementConfig: {
                        name: 'dDeliveryPrefrence',
                        id: 'dDeliveryPrefrence',
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
                    label: 'E Delivery Prefrence',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                }
            }
        },
        row2: {
            id: 'row1',
            classes: ['row'],
            fields: {
                eDeliveryRadio: {
                    elementType: 'radio',
                    classes: [],
                    elementConfig: {
                        type: 'radio',
                        name: 'eDeliveryRadio',
                        id: 'eDeliveryRadio',
                        options: [
                            { value: true, displayValue: 'Yes', id: 'eDeliveryRadioYes' },
                            { value: false, displayValue: 'No', id: 'eDeliveryRadioNo' }
                        ]
                    },
                    validation: {
                        required: true
                    },
                    label: 'Some text',
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
                eDeliveryCheckBox: {
                    elementType: 'checkbox',
                    classes: [],
                    elementConfig: {
                        type: 'checkbox',
                        name: 'eDeliveryCheckBox',
                        id: 'eDeliveryCheckBox',
                        option: {
                            value: 'yes', displayValue: 'eDeliveryCheckBox'
                        }
                    },
                    validation: {},
                    label: '',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                }
            }
        }
    }
}