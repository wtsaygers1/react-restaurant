import React from "react";

function Items(props) {

    console.log(props);

    return(

            <li className="row menuItems">
                {props.itemData.name}
                {/* {props.itemData.highPrice} */}
                <span>{props.itemData.description}</span>
            </li>
        

    );
}

export default Items;