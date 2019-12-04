export const updateField = (combineArray, nodeKey, nodeIndex) => {
    if (nodeKey !== '' && nodeIndex !== '') {
        return {
            type: 'UPDATE_ARRAY_FIELD',
            payload: {
                nodeKey: nodeKey,
                nodeIndex: nodeIndex,
                combineArray: combineArray
            }
        }
    } else {
        return {
            type: 'UPDATE_FIELD',
            payload: combineArray
        }
    }
}

export const addNewSection = (nodeKey, index) => {
    return {
        type: 'ADD_NEW_SECTION',
        payload: {
            key: nodeKey,
            index: index
        }
    }
}

export const removeNewSection = (nodeKey, index) => {
    return {
        type: 'REMOVE_SECTION',
        payload: {
            key: nodeKey,
            index: index
        }
    }
}

export const updateSection = (sectionId, key, status) => {
    return {
        type: 'UPDATE_SECTION_STATUS',
        payload: {
            sectionId: sectionId,
            key: key,
            status: status
        }
    }
}

export const setInitialState = (obj) => {
    let intialState = {};
    Object.entries(obj.sections).forEach( section => {
        Object.entries(section[1].subSections).forEach( subSection => {
            Object.entries(subSection[1].formData).forEach( row => {
                if (Array.isArray(row[1].fields)) {
                    intialState[row[0]] = [];
                    row[1].fields.forEach(fieldArray => {
                        let dynamicObj = {};
                        Object.entries(fieldArray).forEach( row => {
                            Object.entries(row[1].fields).forEach( field => {
                                dynamicObj[field[0]] =  field[1]
                            })
                        });
                        intialState[row[0]].push(dynamicObj)
                    })
                    
                } else {
                    Object.entries(row[1].fields).forEach( field => {
                        intialState[field[0]] =  field[1]
                    })
                }
            })
        })
    });

    return {
        type: 'SET_INITIAL_STATE',
        payload: intialState
    }
}
