import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class CountriesList extends Component {

    state = {
        countries : []
    }

    // using async await here  to get list of countries 
    async componentDidMount(){
        let response = await axios.get('https://restcountries.eu/rest/v2/all')
        console.log(response.data)
        this.setState({
            countries: response.data
        })
    }


    
//confused about how to pass the country code as the key  can i do that 
    render() {
        console.log('CountriesList')
 
        if (this.state.countries.length === 0) {
            return <p>Loading List. . . </p>
        }

        return (
            <div>
                {
                    this.state.countries.map((country, i) => {
                        return <p key={i}> 
                            <Link to={`/countries/${i}`} >{country.name}</Link>
                            
                        </p>
                    })
                }
            </div>
        )
       
    }
}

export default CountriesList