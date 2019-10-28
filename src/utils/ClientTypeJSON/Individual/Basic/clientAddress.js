export default {
    valid: true,
    active: true,
    title: 'Client Address',
    id: 'clientAddress',
    classes: ['sub-section'],
    formData: {
        row1: {
            id: 'row1',
            classes: [],
            fields: {
                    key: '1',
                    primary: true,
                    id: 'clientAddressLocation',
                    classes: [],
                    formData: {
                        row1: {
                            id: 'row1',
                            classes: ['row'],
                            fields: {
                                locationField: {
                                    elementType: 'select',
                                    classes: [],
                                    elementConfig: {
                                        name: 'location',
                                        id: 'location',
                                        placeholder: 'location',
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
                                    label: 'Location',
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
                                    elementType: 'input',
                                    classes: [],
                                    elementConfig: {
                                        type: 'text',
                                        name: 'line1',
                                        id: 'line1',
                                        placeholder: 'Enter Line1',
                                        maxLength: 20
                                    },
                                    validation: {
                                        required: true
                                    },
                                    label: 'Line1',
                                    value: '',
                                    valid: true,
                                    touched: false,
                                    tooltipText: ''
                                },
                                line2: {
                                    elementType: 'input',
                                    classes: [],
                                    elementConfig: {
                                        type: 'text',
                                        name: 'line2',
                                        id: 'line2',
                                        placeholder: 'Enter Line2',
                                        maxLength: 20
                                    },
                                    validation: {
                                        required: true
                                    },
                                    label: 'Line2',
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
                                line3: {
                                    elementType: 'input',
                                    classes: [],
                                    elementConfig: {
                                        type: 'text',
                                        name: 'line3',
                                        id: 'line3',
                                        placeholder: 'Enter Line3',
                                        maxLength: 20
                                    },
                                    validation: {
                                        required: true
                                    },
                                    label: 'Line3',
                                    value: '',
                                    valid: true,
                                    touched: false,
                                    tooltipText: ''
                                },
                                line4: {
                                    elementType: 'input',
                                    classes: [],
                                    elementConfig: {
                                        type: 'text',
                                        name: 'line4',
                                        id: 'line4',
                                        placeholder: 'Enter Line4',
                                        maxLength: 20
                                    },
                                    validation: {
                                        required: true
                                    },
                                    label: 'Line4',
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
                                country: {
                                    elementType: 'select',
                                    classes: [],
                                    elementConfig: {
                                        name: 'country',
                                        id: 'country',
                                        placeholder: 'Country',
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
                                    label: 'Country',
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
                                city: {
                                    elementType: 'input',
                                    classes: [],
                                    elementConfig: {
                                        type: 'text',
                                        name: 'city',
                                        id: 'city',
                                        placeholder: 'Enter city',
                                        maxLength: 20
                                    },
                                    validation: {
                                        required: true
                                    },
                                    label: 'City',
                                    value: '',
                                    valid: true,
                                    touched: false,
                                    tooltipText: ''
                                },
                                state: {
                                    elementType: 'select',
                                    classes: [],
                                    elementConfig: {
                                        name: 'state',
                                        id: 'state',
                                        placeholder: 'State',
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
                                    label: 'State',
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
                                zipCode: {
                                    elementType: 'input',
                                    classes: [],
                                    elementConfig: {
                                        type: 'text',
                                        name: 'zipCode',
                                        id: 'zipCode',
                                        placeholder: 'Enter Zip Code',
                                        maxLength: 20
                                    },
                                    validation: {
                                        required: true
                                    },
                                    label: 'ZipCode',
                                    value: '',
                                    valid: true,
                                    touched: false,
                                    tooltipText: ''
                                },
                                zipOverride: {
                                    elementType: 'checkbox',
                                    classes: [],
                                    elementConfig: {
                                        type: 'checkbox',
                                        name: 'zipOverride',
                                        id: 'zipOverride',
                                        option: {
                                            value: 'yes', displayValue: 'Zip Override'
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
                        row7: {
                            id: 'row5',
                            classes: ['row'],
                            fields: {
                                postalCode: {
                                    elementType: 'input',
                                    classes: [],
                                    elementConfig: {
                                        type: 'text',
                                        name: 'postalCode',
                                        id: 'postalCode',
                                        placeholder: 'Enter Postal Code',
                                        maxLength: 20
                                    },
                                    validation: {
                                        required: true
                                    },
                                    label: 'Postal Code',
                                    value: '',
                                    valid: true,
                                    touched: false,
                                    tooltipText: ''
                                },
                                playBackAddress: {
                                    elementType: 'checkbox',
                                    classes: [],
                                    elementConfig: {
                                        type: 'checkbox',
                                        name: 'playBackAddress',
                                        id: 'playBackAddress',
                                        option: {
                                            value: 'yes', displayValue: 'Click here to use client mailing address as playback primary address'
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
        },
        row2: {
            id: 'row2',
            classes: [],
            fields: {
                    key: '1',
                    primary: true,
                    id: 'clientAddressLocation',
                    classes: [],
                    formData: {
                        row1: {
                            id: 'row1',
                            classes: ['row'],
                            fields: {
                                location: {
                                    elementType: 'select',
                                    classes: [],
                                    elementConfig: {
                                        name: 'location',
                                        id: 'location',
                                        placeholder: 'location',
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
                                    label: 'Location',
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
                                    elementType: 'input',
                                    classes: [],
                                    elementConfig: {
                                        type: 'text',
                                        name: 'line1',
                                        id: 'line1',
                                        placeholder: 'Enter Line1',
                                        maxLength: 20
                                    },
                                    validation: {
                                        required: true
                                    },
                                    label: 'Line1',
                                    value: '',
                                    valid: true,
                                    touched: false,
                                    tooltipText: ''
                                },
                                line2: {
                                    elementType: 'input',
                                    classes: [],
                                    elementConfig: {
                                        type: 'text',
                                        name: 'line2',
                                        id: 'line2',
                                        placeholder: 'Enter Line2',
                                        maxLength: 20
                                    },
                                    validation: {
                                        required: true
                                    },
                                    label: 'Line2',
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
                                line3: {
                                    elementType: 'input',
                                    classes: [],
                                    elementConfig: {
                                        type: 'text',
                                        name: 'line3',
                                        id: 'line3',
                                        placeholder: 'Enter Line3',
                                        maxLength: 20
                                    },
                                    validation: {
                                        required: true
                                    },
                                    label: 'Line3',
                                    value: '',
                                    valid: true,
                                    touched: false,
                                    tooltipText: ''
                                },
                                line4: {
                                    elementType: 'input',
                                    classes: [],
                                    elementConfig: {
                                        type: 'text',
                                        name: 'line4',
                                        id: 'line4',
                                        placeholder: 'Enter Line4',
                                        maxLength: 20
                                    },
                                    validation: {
                                        required: true
                                    },
                                    label: 'Line4',
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
                                country: {
                                    elementType: 'select',
                                    classes: [],
                                    elementConfig: {
                                        name: 'country',
                                        id: 'country',
                                        placeholder: 'Country',
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
                                    label: 'Country',
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
                                city: {
                                    elementType: 'input',
                                    classes: [],
                                    elementConfig: {
                                        type: 'text',
                                        name: 'city',
                                        id: 'city',
                                        placeholder: 'Enter city',
                                        maxLength: 20
                                    },
                                    validation: {
                                        required: true
                                    },
                                    label: 'City',
                                    value: '',
                                    valid: true,
                                    touched: false,
                                    tooltipText: ''
                                },
                                state: {
                                    elementType: 'select',
                                    classes: [],
                                    elementConfig: {
                                        name: 'state',
                                        id: 'state',
                                        placeholder: 'State',
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
                                    label: 'State',
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
                                zipCode: {
                                    elementType: 'input',
                                    classes: [],
                                    elementConfig: {
                                        type: 'text',
                                        name: 'zipCode',
                                        id: 'zipCode',
                                        placeholder: 'Enter Zip Code',
                                        maxLength: 20
                                    },
                                    validation: {
                                        required: true
                                    },
                                    label: 'ZipCode',
                                    value: '',
                                    valid: true,
                                    touched: false,
                                    tooltipText: ''
                                },
                                zipOverride: {
                                    elementType: 'checkbox',
                                    classes: [],
                                    elementConfig: {
                                        type: 'checkbox',
                                        name: 'zipOverride',
                                        id: 'zipOverride',
                                        option: {
                                            value: 'yes', displayValue: 'Zip Override'
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
                        row7: {
                            id: 'row5',
                            classes: ['row'],
                            fields: {
                                postalCode: {
                                    elementType: 'input',
                                    classes: [],
                                    elementConfig: {
                                        type: 'text',
                                        name: 'postalCode',
                                        id: 'postalCode',
                                        placeholder: 'Enter Postal Code',
                                        maxLength: 20
                                    },
                                    validation: {
                                        required: true
                                    },
                                    label: 'Postal Code',
                                    value: '',
                                    valid: true,
                                    touched: false,
                                    tooltipText: ''
                                },
                                playBackAddress: {
                                    elementType: 'checkbox',
                                    classes: [],
                                    elementConfig: {
                                        type: 'checkbox',
                                        name: 'playBackAddress',
                                        id: 'playBackAddress',
                                        option: {
                                            value: 'yes', displayValue: 'Click here to use client mailing address as playback primary address'
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
        }
    }
}