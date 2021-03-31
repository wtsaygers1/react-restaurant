import React from "react";

function Section(props) {
  
console.log(props);
    return (
        <div className="row menuSection">
            <h3>
                {props.sectionData.label}
            </h3>
        </div>

    );


}

export default Section;