export const updateField = (key, obj, node, index) => {
    if (node === 'address') {
        return {
            type: 'UPDATE_ADDRESS',
            payload: {
                key: key,
                value: obj,
                node: node,
                index: index
            }
        }
    } else {
    return {
        type: 'UPDATE_FIELD',
        payload: {
            key: key,
            value: obj
        }
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

