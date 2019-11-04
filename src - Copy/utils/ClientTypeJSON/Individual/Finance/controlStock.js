export default {
    valid: true,
    active: true,
    title: 'Control Stock',
    id: 'controlStock',
    classes: ['sub-section'],
    formData: {
        row1: {
            id: 'row1',
            classes: ['row'],
            fields: {
                controlStockRadio: {
                    elementType: 'radio',
                    classes: [],
                    elementConfig: {
                        name: 'controlStockRadio',
                        id: 'controlStockRadio',
                        options: [
                            { value: 'Yes', displayValue: 'Yes', id: 'controlStockRadio1' },
                            { value: 'No', displayValue: 'No', id: 'controlStockRadio2' }
                        ]
                    },
                    validation: {
                        required: true
                    },
                    label: 'Is the client or an immediate Family',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                }
            }
        }
    }
}