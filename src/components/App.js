import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleChangeType = (type) => {
    this.setState({filters:{type: type}})
  }

  handlePetsClick = (event) => {
    var getPets = ''
    
    if (this.state.filters.type === "all"){
      getPets = fetch(`/api/pets`)
    } else {
      getPets = fetch(`/api/pets?type=${this.state.filters.type}`)
    }
    getPets
    .then(response => response.json())
    .then(data => {
      
      this.setState({pets: data})})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={type => this.handleChangeType(type)} onFindPetsClick={(event) => this.handlePetsClick(event)}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
