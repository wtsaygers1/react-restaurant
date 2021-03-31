import React from "react";
import axios from "axios";

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            name: this.name,
            address: this.address,
            contact: this.contact,
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
                "apps": {
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

                let tmpArray = this.state.menuData;
                response.data.map(obj => {
                    if (tmpArray[obj.meal_type.type]) {
                        obj.price = tmpArray[obj.meal_type.type].highPrice;
                        obj.menuTitle = tmpArray[obj.meal_type.type].label;
                        tmpArray[obj.meal_type.type].items.push(obj);
                    }
                })
                this.setState({ menuData: tmpArray })
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
        return (
            <div>
                Hi
            </div>
        )
    }

}

export default Menu;
