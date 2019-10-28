export default {
    valid: true,
    active: true,
    title: 'Large Trader',
    id: 'largeTrader',
    classes: ['sub-section'],
    formData: {
        row1: {
            id: 'row1',
            classes: ['row'],
            fields: {
                largeTraderRadio: {
                    elementType: 'radio',
                    classes: [],
                    elementConfig: {
                        name: 'largeTraderRadio',
                        id: 'largeTraderRadio',
                        options: [
                            { value: 'Yes', displayValue: 'Yes', id: 'largeTraderRadio1' },
                            { value: 'No', displayValue: 'No', id: 'largeTraderRadio2' }
                        ]
                    },
                    validation: {
                        required: true
                    },
                    label: 'Is the client a Large Trader as defined by SEC ?',
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
                inactiveLargeTraders: {
                    elementType: 'checkbox',
                    classes: [],
                    elementConfig: {
                        name: 'inactiveLargeTraders',
                        id: 'inactiveLargeTraders',
                        option: {
                            value: 'Yes', displayValue: 'Inactive Large Trader'
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