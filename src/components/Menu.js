import React from "react";
import axios from "axios";
import Section from "./Section"

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Walt's Restaurant for People Who Can't Cook Good and Want to Pay Me Good to Cook for Them Too",
            // address: this.address,
            // contact: this.contact,
            menuData: {
                "breakfast": {
                    label: "Bomb Breakfast",
                    items: [],
                    highPrice: 9,
                    lowPrice: 6
                },
                "lunch": {
                    label: "Lunchies",
                    items: [],
                    highPrice: 15,
                    lowPrice: 7
                },
                "dinner": {
                    label: "Entrees",
                    items: [],
                    highPrice: 57,
                    lowPrice: 17
                },
                "appetizers": {
                    label: "Snappy Appies",
                    items: [],
                    highPrice: 13,
                    lowPrice: 6
                },
                "snacks": {
                    label: "Munchies",
                    items: [],
                    highPrice: 5,
                    lowPrice: 2
                },
                "sides": {
                    label: "Add-Ons",
                    items: [],
                    highPrice: 7,
                    lowPrice: 4
                },
                "desserts": {
                    label: "Treats",
                    items: [],
                    highPrice: 16,
                    lowPrice: 8
                },
                "drinks": {
                    label: "Liquid Courage",
                    items: [],
                    highPrice: 17,
                    lowPrice: 9
                },
                "sauces": {
                    label: "Drizzle",
                    items: [],
                    highPrice: 11,
                    lowPrice: 6
                }
            }
        }
    }

    componentDidMount() {
        let apiURL = "http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/items/200";

        axios.get(apiURL)
            .then((response) => {
                console.log(response)

                let tmpObj = this.state.menuData;
                response.data.map(obj => {
                    if (tmpObj[obj.meal_type.type]) {
                        obj.price = tmpObj[obj.meal_type.type].highPrice;
                        obj.menuTitle = tmpObj[obj.meal_type.type].label;
                        tmpObj[obj.meal_type.type].items.push(obj);
                        tmpObj[obj.meal_type.type].items = tmpObj[obj.meal_type.type].items.slice(0, 12);
                    }
                })
                this.setState({ menuData: tmpObj })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    // in componentDidUpdate - send state to local storage
    componentDidUpdate() {
        window.localStorage.setItem("menuData", JSON.stringify(this.state.menuData))
    }

    render() {
        const mappedSections = Object.keys(this.state.menuData).map((sectionName, index) => {
            return (
                <Section
                    key={index}
                    sectionName={sectionName}
                    sectionData={this.state.menuData[sectionName]}
                />
            )
        });

        return (
            <>
                <div className="Header">
                    <h1>{this.state.name}</h1>
                </div>
                <div>
                    {mappedSections}
                </div>
            </>
        )
    }

}

export default Menu;
