export const deepCloneObjectWithDefaultValue = (realObject) =>{
    const cloneObject = JSON.parse(JSON.stringify(realObject));
    Object.entries(cloneObject.details).forEach((value, index, row) => {
        Object.entries(value[1].fields).forEach((value, index, fields) => {
            value[1].value = '';
            // value[1].elementType = 'select';
        });
    });

    return cloneObject;
}