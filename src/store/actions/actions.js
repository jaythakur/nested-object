export const updateField = (combineArray) => {
    return {
        type: 'UPDATE_FIELD',
        payload: combineArray
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
                Object.entries(row[1].fields).forEach( field => {
                    intialState[field[0]] =  field[1]
                })
            })
        })
    });
    console.log('here');
    return {
        type: 'SET_INITIAL_STATE',
        payload: intialState
    }
}
