export default {
    valid: true,
    active: true,
    title: 'Investment Experience in years',
    id: 'investmentExperience',
    classes: ['sub-section'],
    formData: {
        row1: {
            id: 'row1',
            classes: ['row'],
            fields: {
                individualStocks: {
                    elementType: 'input',
                    classes: [],
                    elementConfig: {
                        name: 'individualStocks',
                        id: 'individualStocks',
                        type: 'text',
                    },
                    validation: {},
                    label: 'Individual Stocks',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                },
                optionBuy: {
                    elementType: 'input',
                    classes: [],
                    elementConfig: {
                        name: 'optionBuy',
                        id: 'optionBuy',
                        type: 'text'
                    },
                    validation: {},
                    label: 'Option Buy',
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
                equities: {
                    elementType: 'input',
                    classes: [],
                    elementConfig: {
                        name: 'equities',
                        id: 'equities',
                        type: 'text'
                    },
                    validation: {},
                    label: 'Equities',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                },
                optionSell: {
                    elementType: 'input',
                    classes: [],
                    elementConfig: {
                        name: 'optionSell',
                        id: 'optionSell',
                        type: 'text'
                    },
                    validation: {},
                    label: 'Option Sell',
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
                bonds: {
                    elementType: 'input',
                    classes: [],
                    elementConfig: {
                        name: 'netWorth',
                        id: 'netWorth',
                        type: 'text'
                    },
                    validation: {},
                    label: 'Bonds',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                },
                optionFutures: {
                    elementType: 'input',
                    classes: [],
                    elementConfig: {
                        name: 'optionFutures',
                        id: 'optionFutures',
                        type: 'text'
                    },
                    validation: {},
                    label: 'Option Futures',
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
                yearsInvestmentAccount: {
                    elementType: 'input',
                    classes: [],
                    elementConfig: {
                        name: 'yearsInvestmentAccount',
                        id: 'yearsInvestmentAccount',
                        type: 'text'
                    },
                    validation: {
                        required: true
                    },
                    label: 'How many years have you held investment accounts ?',
                    value: '',
                    valid: true,
                    touched: false,
                    tooltipText: ''
                }
            }
        }
    }
}