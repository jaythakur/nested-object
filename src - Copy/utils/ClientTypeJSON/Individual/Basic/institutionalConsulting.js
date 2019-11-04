export default {
    valid: true,
    active: true,
    title: 'Institutional Consulting',
    id: 'institutionalConsulting',
    classes: ['sub-section'],
    formData: {
        row1: {
            id: 'row1',
            classes: ['row'],
            fields: {
                contractId: {
                    elementType: 'input',
                    classes: [],
                    elementConfig: {
                        name: 'contractId',
                        id: 'contractId',
                        type: 'text',
                        placeholder: 'Contract ID'
                    },
                    validation: {
                        required: true
                    },
                    label: 'Contract ID',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                },
                consultingContract: {
                    elementType: 'input',
                    classes: [],
                    elementConfig: {
                        name: 'consultingContract',
                        id: 'consultingContract',
                        type: 'text',
                        placeholder: 'Consulting Contract'
                    },
                    validation: {
                        required: true
                    },
                    label: 'Consulting Contract',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                }
            }
        }
    }
}