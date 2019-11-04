import React from 'react';

import SubSection from './SubSection';

class Section extends React.Component {
   
    render() {
        return (
            <div id={this.props.sectionInfo.id}>
                <h3>{this.props.sectionInfo.title}</h3>
                {Object.entries(this.props.sectionInfo.subSections)
                    .map( subSectionElement => (
                    <SubSection 
                        key={subSectionElement[0]} 
                        subSectionId={subSectionElement[0]}
                        subSectionInfo={subSectionElement[1]} />
                ))}
            </div>
        )
    }
}

export default Section;
