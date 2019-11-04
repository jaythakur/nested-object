export default {
    valid: true,
    active: true,
    title: 'SCAP',
    id: 'scap',
    classes: ['sub-section'],
    formData: {
        row1: {
            id: 'row1',
            classes: ['row'],
            fields: {
                scapRadio: {
                    elementType: 'radio',
                    classes: [],
                    elementConfig: {
                        name: 'scapRadio',
                        id: 'scapRadio',
                        options: [
                            { value: 'Yes', displayValue: 'Yes', id: 'scapRadio1' },
                            { value: 'No', displayValue: 'No', id: 'scapRadio2' }
                        ]
                    },
                    validation: {
                        required: true
                    },
                    label: 'Do you receive substantial amount of revenue of (over 50%)(trade/export) from a country outside of United States ?',
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
                scapAffectedParties: {
                    elementType: 'select',
                    classes: [],
                    elementConfig: {
                        name: 'scapAffectedParties',
                        id: 'scapAffectedParties',
                        options: [
                            { value: '', displayValue: 'Please Select' },
                            { value: 'option1', displayValue: 'Option 1' },
                            { value: 'option2', displayValue: 'Option 2' },
                            { value: 'option3', displayValue: 'Option 3' },
                            { value: 'option4', displayValue: 'Option 4' }
                        ]
                    },
                    validation: {},
                    label: 'SCAP - Sensitive Country Affected Parties',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                }
            }
        }
    }
}