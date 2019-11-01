const initialState = {
    fields: {
        prefix: {
            value: ''
        },
        firstName: {
            value: ''
        },
        middleName: {
            value: ''
        },
        lastName: {
            value: ''
        },
        suffix: {
            value: ''
        },
        clientOrgination: {
            value: ''
        },
        referral: {
            value: ''
        },
        campaign: {
            value: ''
        },
        prospecting: {
            value: ''
        },
        usCitizen: {
            value: ''
        },
        residentAlien: {
            value: ''
        },
        countryOfCitizenship: {
            value: ''
        },
        countryOfBirth: {
            value: ''
        },
        language: {
            value: ''
        }
    }
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'UPDATE_FIELD':
            const clonedFields = {...state.fields};
            const payload = action.payload;
            return {
                ...state,
                fields: {
                    ...state.fields,
                    [action.payload.key]: payload.value,
                    firstName: payload.value
                }
            }
        break;
    }
    return state;

};

export default reducer;