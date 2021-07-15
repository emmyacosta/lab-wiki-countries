import React, { Component } from 'react'
import axios from 'axios'


// not sure how to display the  country borders or area  confused

class CountryDetail extends Component {

    state = {
        countryDetail: null,
    }

    getData = async () => {
        
        let code = await axios.get(`https://restcountries.eu/rest/v2/alpha/${this.props.match.params.code}`)
        let response = await axios.get(`https://restcountries.eu/rest/v2/name/${this.props.match.params.name}`)
        console.log(code)

        let country = {
            code: this.props.match.params.code,
            name : response.data.name,
            capital: response.data.weight,
            area: response.data.area,
            borders: response.data.borders
        }
        this.setState({
            countryDetail: country
        })

       
    }

    componentDidMount(){
        console.log('Detail MOUNTED')
        this.getData()
    }

    componentDidUpdate(){
        let newId = this.props.match.params.code
        let stateId = this.state.countryDetail.code

        console.log('Detail UPDATED')

        if(newId !== stateId) {
            this.getData() 
        }
    }

    render(){
        console.log('Detail RENDERED')
        if (!this.state.countryDetail) {
            return <p>Loading Details. . . </p>
        }

        const {countryDetail} = this.state

        return (
         
            <div>
            <h1>{countryDetail.name}</h1>
            <table className="table">
              <tbody>
                <tr>
                  <td style="width: 30%">Capital</td>
                  <td>{ countryDetail.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  { countryDetail.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li>{ countryDetail.borders}</li> 
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )
    }
}

export default CountryDetail