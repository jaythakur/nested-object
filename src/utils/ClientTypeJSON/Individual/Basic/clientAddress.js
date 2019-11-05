export default {
    valid: true,
    active: true,
    title: 'Client Address',
    id: 'clientAddress',
    classes: ['sub-section'],
    formData: {
        address: {
            id: 'address',
            classes: [],
            fields: [
                {
                    row1: {
                        id: 'row1',
                        classes: ['row'],
                        fields: {
                            addressType: {
                                elementType: 'select',
                                classes: [],
                                value: '',
                                valid: true,
                                required: true,
                                validation: {
                                    isRequired: true
                                },
                                elementConfig: {
                                    name: 'addressType',
                                    id: 'addressType',
                                    options: [
                                        { value: '', displayValue: 'Please Select' },
                                        { value: 'option1', displayValue: 'Option 1' },
                                        { value: 'option2', displayValue: 'Option 2' },
                                        { value: 'option3', displayValue: 'Option 3' },
                                        { value: 'option4', displayValue: 'Option 4' }
                                    ]
                                },
                                label: 'Address Type',
                                id: 'addressType',
                                tooltipText: ''
                            },
                            line2: { 
                                elementType: 'input',
                                classes: [],                                
                                value: '',
                                valid: true,
                                required: true,
                                validation: {
                                    isRequired: true
                                },
                                elementConfig: {
                                    type: 'text',
                                    name: 'line2',
                                    id: 'line2',
                                    placeholder: 'Enter Line 2',
                                    maxLength: 20
                                },
                                label: 'Line2',
                                id: 'line2',
                                tooltipText: ''
                            }
                        }
                    },
                    row2: {
                        id: 'row2',
                        classes: ['row'],
                        fields: {
                            line1: { 
                                elementType: 'input',
                                classes: [],                                
                                value: '',
                                valid: true,
                                required: true,
                                validation: {
                                    isRequired: true
                                },
                                elementConfig: {
                                    type: 'text',
                                    name: 'line2',
                                    id: 'line1',
                                    placeholder: 'Enter Line 2',
                                    maxLength: 20
                                },
                                label: 'Line2',
                                id: 'line2',
                                tooltipText: ''
                            }
                        }
                    }
                }
            ]
        }
    }
}