export const basicSectionRules =  (updatedObj, idsArray = [], value) => {
    if (idsArray.indexOf('clientOrgination') !== -1) {
        updatedObj.basic.subSections.basicInformation.formData.row5.individual.campaign.classes = ['hide'];
        updatedObj.basic.subSections.basicInformation.formData.row5.individual.referral.classes = ['hide'];
        updatedObj.basic.subSections.basicInformation.formData.row5.individual.prospecting.classes = ['hide'];
        if (value === 'option1') {
            updatedObj.basic.subSections.basicInformation.formData.row5.individual.campaign.classes = [];
            updatedObj.basic.subSections.basicInformation.formData.row5.individual.campaign.value = '';

        }
        else if (value === 'option2') {
            updatedObj.basic.subSections.basicInformation.formData.row5.individual.referral.classes = [];
            updatedObj.basic.subSections.basicInformation.formData.row5.individual.referral.value = '';
        }
        else if (value === 'option3') {
            updatedObj.basic.subSections.basicInformation.formData.row5.individual.prospecting.classes = [];
            updatedObj.basic.subSections.basicInformation.formData.row5.individual.prospecting.value = '';
        }
        return updatedObj;
    } else if (idsArray.indexOf('clientAddressLocation') !== -1) {
        const len = (updatedObj.basic.subSections.clientAddress.formData.row1.individual).length;
        const copyFromIndex = len-2;
        const copiedIndex = len-1;
        updatedObj.basic.subSections.clientAddress.formData.row1.individual[copyFromIndex].details.row1.individual.location.elementType = 'label';
        let removeAddressFromList = updatedObj.basic.subSections.clientAddress.formData.row1.individual[copyFromIndex].details.row1.individual.location.value;
        /*let getClientSelectdAddress = localStorage.getItem('clientSelectdAddress');
        let clientSelectdAddress = '';
        if(getClientSelectdAddress !== null) {
            clientSelectdAddress = JSON.parse(getClientSelectdAddress);
            clientSelectdAddress.push(removeAddressFromList);
        } else {
            clientSelectdAddress = [removeAddressFromList];
        }
        localStorage.setItem('clientSelectdAddress', JSON.stringify(clientSelectdAddress));*/
        const oldOptions = updatedObj.basic.subSections.clientAddress.formData.row1.individual[copiedIndex].details.row1.individual.location.elementConfig.options;
        const newOptios = oldOptions.filter( currentValue => currentValue.value !== removeAddressFromList)
        updatedObj.basic.subSections.clientAddress.formData.row1.individual[copiedIndex].details.row1.individual.location.elementConfig.options = newOptios;
    }

    return updatedObj;
}