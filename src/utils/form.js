import basicJson from './ClientTypeJSON/Individual/Basic/basic';
import finanaceJson from './ClientTypeJSON/Individual/Finance/finance';

export default {
    clientTypes: {
        individual: {
            title: 'Individual',
            sections: {
                basic: basicJson,
                /*finance: finanaceJson*/
            }
        }
    }
}