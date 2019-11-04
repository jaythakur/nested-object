export default {
    valid: true,
    active: true,
    title: 'Financial Information',
    id: 'financialInformation',
    classes: ['sub-section'],
    formData: {
        row1: {
            id: 'row1',
            classes: ['row'],
            fields: {
                annualIncome: {
                    elementType: 'select',
                    classes: [],
                    elementConfig: {
                        name: 'annualIncome',
                        id: 'annualIncome',
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
                    label: 'Annual Income',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                },
                actualAnnualIncome: {
                    elementType: 'input',
                    classes: [],
                    elementConfig: {
                        name: 'actualAnnualIncome',
                        id: 'actualAnnualIncome',
                        type: 'text'
                    },
                    validation: {},
                    label: 'Actual Annual Income',
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
                liquidAssets: {
                    elementType: 'select',
                    classes: [],
                    elementConfig: {
                        name: 'liquidAssets',
                        id: 'liquidAssets',
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
                    label: 'Liquid Assets',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                },
                actualWorthOfLiquidAssests: {
                    elementType: 'input',
                    classes: [],
                    elementConfig: {
                        name: 'actualWorthOfLiquidAssests',
                        id: 'actualWorthOfLiquidAssests',
                        type: 'text'
                    },
                    validation: {},
                    label: 'Actual Worth Of Liquid Assests',
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
                netWorth: {
                    elementType: 'select',
                    classes: [],
                    elementConfig: {
                        name: 'netWorth',
                        id: 'netWorth',
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
                    label: 'Net Worth',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                },
                actualNetWorth: {
                    elementType: 'input',
                    classes: [],
                    elementConfig: {
                        name: 'actualNetWorth',
                        id: 'actualNetWorth',
                        type: 'text'
                    },
                    validation: {},
                    label: 'Actual Net Worth',
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
                ubsRepresent: {
                    elementType: 'select',
                    classes: [],
                    elementConfig: {
                        name: 'ubsRepresent',
                        id: 'ubsRepresent',
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
                    label: 'What percentage of your total investable',
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
                financialVerified: {
                    elementType: 'checkbox',
                    classes: [],
                    elementConfig: {
                        name: 'financialVerified',
                        id: 'financialVerified',
                        option: {
                            value: 'Yes', displayValue: 'Financial Verified?'
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
        },
        row6: {
            id: 'row6',
            classes: ['row'],
            fields: {
                projectedRequriementDate: {
                    elementType: 'input',
                    classes: [],
                    elementConfig: {
                        name: 'projectedRequriementDate',
                        id: 'projectedRequriementDate',
                        type: 'text'
                    },
                    validation: {},
                    label: 'Projected Requriement Date',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                },
                assestGoal: {
                    elementType: 'input',
                    classes: [],
                    elementConfig: {
                        name: 'assestGoal',
                        id: 'assestGoal',
                        type: 'text'
                    },
                    validation: {},
                    label: 'Assest Goal',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                }
            }
        },
    }
}