const initialState = {
    fields: {
        prefix: {
            value: ''
        },
        address: [
            {
                addressType: {
                    value: ''
                },
                line1: {
                    value: ''
                },
                line2: {
                    value: ''
                }
            }
        ],
        firstName: {
            value: ''
        }

    }
}

const reducer = (state = initialState, action) => {

    const clonedFields = { ...state.fields };
    switch (action.type) {
        case 'UPDATE_FIELD':
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

        case 'UPDATE_ADDRESS':
            const cloneSingleObject = [...clonedFields[action.payload.node]]
            const clonedIndexObject = {...cloneSingleObject[action.payload.index]};
            clonedIndexObject[action.payload.key] = action.payload.value;
            cloneSingleObject[action.payload.index] = clonedIndexObject
            clonedFields[action.payload.node] = cloneSingleObject
            return {
                ...state,
                fields: clonedFields
            }            
        break;

        case 'ADD_NEW_SECTION':
            const clonedKey = [...clonedFields[action.payload.key]];
            const clonedSingleKeyObject = JSON.parse(JSON.stringify(clonedKey[action.payload.index]));
            Object.entries(clonedSingleKeyObject).filter( (element, index) => {
                element[1].value = '';
            });
            clonedKey.push(clonedSingleKeyObject);
            clonedFields[action.payload.key] = clonedKey;
            return {
                ...state,
                fields: clonedFields
            }
        break;
    }
    return state;

};

export default reducer;
