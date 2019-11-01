import basicInformationJson from './basicInformation';
import taxAffiliationJson from './taxAffiliation';
import clientAddressJson from './clientAddress';
import clientEmailAddressJson from './clientEmailAddress';
import eDeliveryJson from './eDelivery';
import clientTelephoneJson from './clientTelephone';
import institutionalConsultingJson from './institutionalConsulting';

export default {
    open: true,
    valid: true,
    title: 'Basic',
    id: 'basic',
    classes: ['section'],
    subSections: {
        basicInformation: basicInformationJson,
        taxAffiliation: taxAffiliationJson
        /*clientAddress: clientAddressJson,
        /*taxAffiliation: taxAffiliationJson,*/
        /*clientEmailAddress: clientEmailAddressJson,
        eDelivery: eDeliveryJson,
        clientTelephone: clientTelephoneJson,
        institutionalConsulting: institutionalConsultingJson*/
    }
}