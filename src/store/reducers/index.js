const initialState = {
    individual: {

    }
}

const reducer = (state = initialState, action) => {

    const clonedFields = { ...state.individual };
    switch (action.type) {
        case 'SET_INITIAL_STATE':
                console.log('here2');
            return {
                ...state,
                individual: action.payload
            }
        case 'UPDATE_FIELD':
            const payload = action.payload;
            payload.forEach( row => {
                if (clonedFields.hasOwnProperty(row.key)) {

                    if (row.attributes.hasOwnProperty('value')) {
                        clonedFields[row.key].value = row.attributes.value;
                    }

                    if (row.attributes.hasOwnProperty('valid')) {
                        clonedFields[row.key].valid = row.attributes.valid;
                    }

                    if (row.attributes.hasOwnProperty('required')) {
                        clonedFields[row.key].required = row.attributes.required;
                        clonedFields[row.key].validation.isRequired = row.attributes.required;
                    }

                    if (row.attributes.hasOwnProperty('config')) {
                        clonedFields[row.key].required = row.attributes.config;
                    }

                    if (row.attributes.hasOwnProperty('errorMessage')) {
                        clonedFields[row.key].errorMessage = row.attributes.errorMessage;
                    }
                    console.log(clonedFields[row.key]);
                    console.log(row.attributes)
                }
            })
            return {
                ...state,
                individual: clonedFields
            }
            break;

            case 'UPDATE_ARRAY_FIELD':
                console.log(action.payload)
                const combineArray = action.payload.combineArray;
                const clonedArrayField = [...clonedFields[action.payload.nodeKey]];
                const clonedObj = {...clonedArrayField[action.payload.nodeIndex]};
                combineArray.forEach( row => {
                    if (clonedObj.hasOwnProperty(row.key)) {

                        if (row.attributes.hasOwnProperty('value')) {
                            clonedObj[row.key].value = row.attributes.value;
                        }
    
                        if (row.attributes.hasOwnProperty('valid')) {
                            clonedObj[row.key].valid = row.attributes.valid;
                        }
    
                        if (row.attributes.hasOwnProperty('required')) {
                            clonedObj[row.key].required = row.attributes.required;
                            clonedObj[row.key].validation.isRequired = row.attributes.required;
                        }
    
                        if (row.attributes.hasOwnProperty('config')) {
                            clonedObj[row.key].required = row.attributes.config;
                        }
    
                        if (row.attributes.hasOwnProperty('errorMessage')) {
                            clonedObj[row.key].errorMessage = row.attributes.errorMessage;
                        }
                    }
            });
            clonedArrayField[action.payload.nodeIndex] = clonedObj;
            clonedFields[action.payload.nodeKey] = clonedArrayField;
            return {
                ...state,
                individual: clonedFields
            }

            break;

            case 'UPDATE_SECTION_STATUS':
            const section = {...clonedFields[action.payload.sectionId]}
            section[action.payload.key] = action.payload.status;
            clonedFields[action.payload.sectionId] = section;
            return {
                ...state,
                individual: clonedFields
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
                    individual: clonedFields
                }
            break;

            case 'REMOVE_SECTION':
                console.log(action.payload.index);
                let clonedKey1 = [...clonedFields[action.payload.key]];
                clonedKey1.splice(action.payload.index, 1);
                clonedFields[action.payload.key] = clonedKey1;
                return {
                    ...state,
                    individual: clonedFields
                }
            break;
    }
    return state;

};

export default reducer;
