import React from 'react';

import './clientOnBoarding.scss';
import cobFormObject from '../../utils/form';
import FormContainer from '../FormContainer/formContainer';

class ClientOnBoarding extends React.Component {

    onChangeHndler = (event) => {
        // console.log(cobFormObject.clientTypes[event.target.value]);
        // console.log(Object.keys(cobFormObject.clientTypes[event.target.value]))
    }

    render() {
        const clientTypes = Object.entries(cobFormObject.clientTypes);
        return (
                <div className="starter-template">
                    <h1>Get Started</h1>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="selectParty">Select Party</label>
                                <select name="clientType" id="clientType" className="form-control" onChange={this.onChangeHndler}>
                                    <option value="">Please Select</option>
                                    {clientTypes.map( (clientType, index) => {
                                        return (
                                            <option 
                                                value={clientType[0]} 
                                                key={index}
                                                >{clientType[1].title}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <FormContainer />
                        </div>
                    </div>
                </div>
        )
    }
}

export default ClientOnBoarding;
