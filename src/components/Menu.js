import React from "react";
import axios from "axios";

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            name: this.name,
            address: this.address,
            contact: this.contact,
            menu: {}
        }
    }

    componentDidMount() {
        let apiURL = "http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/items/200";
        const axiosData = axios.get(apiURL)
            .then((response) => {
                console.log(response)
                this.setState({ menu: axiosData })
            })
            .catch(function (error) {
                console.log(error)
            })
        console.log(axiosData);
    }

    render(){
        return(
            <div>
                Hi
            </div>
        )
    }

}

export default Menu;
