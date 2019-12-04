import React from 'react';

import BasicInformation from './BasicInformation';
import TaxAffiliation from './TaxAffiliation';

const Basic = props => {
    return (
        <React.Fragment>
            <BasicInformation />
            <TaxAffiliation />
        </React.Fragment>
    )
}

export default Basic;
