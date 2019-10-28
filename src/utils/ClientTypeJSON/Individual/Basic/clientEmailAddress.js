export default {
    valid: true,
    active: true,
    title: 'Email Address',
    id: 'clientEmailAddress',
    classes: ['sub-section'],
    formData: {
        row1: {
            id: 'row1',
            classes: [],
            fields: [
                {
                    key: '1',
                    primary: true,
                    id: 'clientEmailAddress',
                    details: {
                        row1: {
                            id: 'row1',
                            classes: ['row'],
                            fields: {
                                email: {
                                    elementType: 'input',
                                    classes: [],
                                    elementConfig: {
                                        name: 'email',
                                        id: 'email',
                                        placeholder: 'Email',
                                        type: 'email'
                                    },
                                    validation: {
                                        required: true,
                                        isEmail: true
                                    },
                                    label: 'Email',
                                    value: '',
                                    valid: true,
                                    touched: false,
                                    tooltipText: ''
                                },
                                note: {
                                    elementType: 'input',
                                    classes: [],
                                    elementConfig: {
                                        name: 'note',
                                        id: 'note',
                                        placeholder: 'note',
                                        type: 'text'
                                    },
                                    validation: {
                                        required: true
                                    },
                                    label: 'Note',
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
                                line1: {
                                    elementType: 'radio',
                                    classes: [],
                                    elementConfig: {
                                        name: 'primaryEmail',
                                        id: 'primaryEmail',
                                        options: [
                                            {value: true, displayValue: 'Primary Email', id: ''}
                                        ]
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
            ]
        },
        row2: {
            id: 'row2',
            classes: ['row'],
            fields: {
                noEmailAddress: {
                    elementType: 'checkbox',
                    classes: [],
                    elementConfig: {
                        type: 'checkbox',
                        name: 'noEmailAddress',
                        id: 'noEmailAddress',
                        option: {
                            value: 'yes', displayValue: 'No Email Address Available'
                        }
                    },
                    validation: {},
                    label: '',
                    value: 'yes',
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
                emailVerified: {
                    elementType: 'checkbox',
                    classes: [],
                    elementConfig: {
                        type: 'checkbox',
                        name: 'emailVerified',
                        id: 'emailVerified',
                        option: {
                            value: 'yes', displayValue: 'Email Verified'
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