import React from "react";

function Items(props) {

    console.log(props);

    return(

            <li className="row menuItems">
                {props.itemData.name}
                {props.itemData.highPrice}
                {props.itemData.description}

            </li>
        

    );
}

export default Items;