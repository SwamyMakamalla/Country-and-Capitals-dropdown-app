import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    userSelectedCity: countryAndCapitalsList[0],
  }

  onSelectedCity = event => {
    const userText = event.target.value

    const selectedCity = countryAndCapitalsList.filter(
      item => item.id === userText,
    )
    this.setState({userSelectedCity: selectedCity[0]})
  }

  render() {
    const {userSelectedCity} = this.state

    const {capitalDisplayText, country} = countryAndCapitalsList
    console.log(capitalDisplayText, country)
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Countries and capitals</h1>
          <select
            id="countries"
            name="options"
            className="options"
            onChange={this.onSelectedCity}
          >
            {countryAndCapitalsList.map(eachCity => (
              <option value={eachCity.id} key={eachCity.id}>
                {eachCity.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="countries" className="label-text">
            is capital of which country?
          </label>
          <p className="country-name">{userSelectedCity.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
