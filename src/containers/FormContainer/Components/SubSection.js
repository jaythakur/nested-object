import React from 'react';

import Row from './Row';

class SubSection extends React.Component {

    render() {
        const formDataArray = [];
        for (let key in this.props.subSectionInfo.formData) {
            formDataArray.push({
                id: key,
                config: this.props.subSectionInfo.formData[key]
            });
        }
        return (
            <div id={this.props.subSectionInfo.id} className={this.props.subSectionInfo.classes.join(' ')}>
                <h5>{this.props.subSectionInfo.title}</h5>
                {formDataArray.map( formDataElement => (
                    <Row 
                        key={formDataElement.id} 
                        rowInfo={formDataElement.config} />
                ))}
            </div>
        )
    }
}

export default SubSection;
