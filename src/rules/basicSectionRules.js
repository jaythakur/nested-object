export const basicSectionRules =  (updatedObj, idsArray = [], value) => {
    if (idsArray.indexOf('clientOrgination') !== -1) {
        updatedObj.basic.subSections.basicInformation.formData.row5.fields.campaign.classes = ['hide'];
        updatedObj.basic.subSections.basicInformation.formData.row5.fields.referral.classes = ['hide'];
        updatedObj.basic.subSections.basicInformation.formData.row5.fields.prospecting.classes = ['hide'];
        if (value === 'option1') {
            updatedObj.basic.subSections.basicInformation.formData.row5.fields.campaign.classes = [];
            updatedObj.basic.subSections.basicInformation.formData.row5.fields.campaign.value = '';

        }
        else if (value === 'option2') {
            updatedObj.basic.subSections.basicInformation.formData.row5.fields.referral.classes = [];
            updatedObj.basic.subSections.basicInformation.formData.row5.fields.referral.value = '';
        }
        else if (value === 'option3') {
            updatedObj.basic.subSections.basicInformation.formData.row5.fields.prospecting.classes = [];
            updatedObj.basic.subSections.basicInformation.formData.row5.fields.prospecting.value = '';
        }
        return updatedObj;
    } else if (idsArray.indexOf('clientAddressLocation') !== -1) {
        const len = (updatedObj.basic.subSections.clientAddress.formData.row1.fields).length;
        const copyFromIndex = len-2;
        const copiedIndex = len-1;
        updatedObj.basic.subSections.clientAddress.formData.row1.fields[copyFromIndex].details.row1.fields.location.elementType = 'label';
        let removeAddressFromList = updatedObj.basic.subSections.clientAddress.formData.row1.fields[copyFromIndex].details.row1.fields.location.value;
        /*let getClientSelectdAddress = localStorage.getItem('clientSelectdAddress');
        let clientSelectdAddress = '';
        if(getClientSelectdAddress !== null) {
            clientSelectdAddress = JSON.parse(getClientSelectdAddress);
            clientSelectdAddress.push(removeAddressFromList);
        } else {
            clientSelectdAddress = [removeAddressFromList];
        }
        localStorage.setItem('clientSelectdAddress', JSON.stringify(clientSelectdAddress));*/
        const oldOptions = updatedObj.basic.subSections.clientAddress.formData.row1.fields[copiedIndex].details.row1.fields.location.elementConfig.options;
        const newOptios = oldOptions.filter( currentValue => currentValue.value !== removeAddressFromList)
        updatedObj.basic.subSections.clientAddress.formData.row1.fields[copiedIndex].details.row1.fields.location.elementConfig.options = newOptios;
    }

    return updatedObj;
}