import React from 'react';

import SubSection from './SubSection';

class Section extends React.Component {

    updateDataHandler = (updatedObject) => {
        this.props.backToParent(updatedObject);
    }
   
    render() {
        
        const subSectionsArray = [];
        for (let key in this.props.sectionInfo.subSections) {
            subSectionsArray.push({
                id: key,
                config: this.props.sectionInfo.subSections[key]
            });
        }
        return (
            <div id={this.props.sectionInfo.id}>
                <h3>{this.props.sectionInfo.title}</h3>
                {subSectionsArray.map( subSectionElement => (
                    <SubSection 
                        key={subSectionElement.id} 
                        subSectionInfo={subSectionElement.config}
                        backToParent={this.updateDataHandler} {...this.props}/>
                ))}
            </div>
        )
    }
}

export default Section;
