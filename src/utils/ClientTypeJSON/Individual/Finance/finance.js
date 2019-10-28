import financialInformationJson from './financialInformation';
import scapJson from './scap';
import investmentExperienceJson from './investmentExperience';
import controlStockJson from './controlStock';
import largeTraderJson from './largeTrader';

export default {
    open: true,
    valid: true,
    title: 'Finance',
    id: 'finance',
    classes: ['section'],
    subSections: {
        financialInformation: financialInformationJson,
        scap: scapJson,
        investmentExperience: investmentExperienceJson,
        controlStock: controlStockJson,
        largeTrader: largeTraderJson
    }
}