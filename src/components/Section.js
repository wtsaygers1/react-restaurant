import React from "react";
import Item from "./Item"

function Section(props) {
  
    const mappedItems = props.sectionData.items.map((item, index) => {
        return (
            <Item
                key={index}
                // sectionName={sectionName}
                // sectionData={this.state.menuData[sectionName]}
                itemData={item}
            />
        )
    });
    
    return (
        <div className="row menuSection">
            <h3>
                {props.sectionData.label}
            </h3>
           <ul>
               {mappedItems}
           </ul>
        </div>

    );


}

export default Section;