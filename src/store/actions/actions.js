export const updateField = (key, obj) => {
    return {
        type: 'UPDATE_FIELD',
        payload: {
            key: key,
            value: obj
        }
    }
}

