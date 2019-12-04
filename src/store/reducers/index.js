const initialState = {
    basicInformation: {
        firstName: '',
        lastName: ''
    },
    taxAffiliation: {
        firstName: '',
        lastName: ''
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_BASIC_INFORMATION':
            return {
                ...state,
                basicInformation: {
                    ...state.basicInformation,
                    [action.payload.key]: action.payload.value
                }
            }
            break;
            
        case 'UPDATE_BASIC_INFORMATION':
            return {
                ...state,
                basicInformation: {
                    ...state.basicInformation,
                    [action.payload.key]: action.payload.value
                }
            }
            break;
    }
    return state;

};

export default reducer;
