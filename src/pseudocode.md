- The pieces are an overall Menu, 5 sections of the menu, and menu items in each    section
- 5 sections
    - Apps, Entrees, Sides, Drinks, Desserts
        - Apps: >= 8 unique items
        - Entrees >= 12 unique items and could have 1 be a special of the day
        - Sides >= 8 unique items
        - Drinks >= 8 unique items
        - Desserts >= 4 unique items and could have 1 be a special of the day



class Menu extends React.Component
    constructor
        super
        state {
            name:
            address:
            contact:
            menu: {} empty object
        }

- watch vid 12 for reference espclly w/ the assgnd var & where it's used
- componentDidMount() {
    let apiURL = "https://website"
    const axiosData = axios.get(apiURL)
        .then(function (response) {
            console.log(response.data);
            set price data for each item
            loop through response.data to make different arrays for the specific meal types
        this.setState({ menu: axiosData })
        })
        .catch(function (error) {
            console.log(error);
        })
        console.log(axiosData)

    - assign variable to window.localStorage.getItem({ menu }) getting the data from 
        the menu object that was populated with the API call
    - console.log to make sure the data is there   
    - Conditional in the componentDidMount method
    if(is this the menu object??) {
        console.log to check
        this.setState({ menu: JSON.parse(menu) })
    }
}

- componentDidUpdate() {
    console.log to make sure in the update
        window.localStorage.setItem({ menu object, JSON.stringify(this.state.menu) })
}

- render() {
    return (
        - container
            - row
                - column
                    - header {this.state.name} {this.state.address}
            - separate menu components
                -separate item components
            - row
                - column
                    - contact {this.state.contact}
    )

}

** reusable for each section of the menu
- function menuSec (props)
    - return the HTML format
        - row
            - column
                - section heading from the array type that section is populating
                    - items

**reusable for each item
- function item (props)   
    - return the HTML format
        - item name from array
        - paragraph element with description and price
        - STRETCH of an img element with a picture of the item




- Axios
    - componentDidMount lifecycle method used with the API call
    - in video around 14:30 mark watch for how to use this or this_ in the 
        componentDidMount method
    - conditional in the render method (explanation in video around 16:00 mark)
        - need to use conditional rendering when using asynchronous data because 
            first call will have no data
        - use a ternary as good practice -- look up Object.keys method 
- Data from the API call will be saved as an empty object in state