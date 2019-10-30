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

  updateFilter = (filter) => {
    this.setState({
      filters: {
        type: filter
      }
    })
  }

  updatePets = (pets) => {
    this.setState({
      pets: pets
    })
  }

  fetchingPets = () => {
    let url;
    this.state.filters.type === 'all' ? url = '/api/pets' : url = `/api/pets?type=${ this.state.filters.type }`

    fetch(url)
    .then(response => response.json())
    .then(json => this.updatePets(json))
  }

  adoptPet = (petId) => {
    for(let p of this.state.pets){
      if(p.id === petId) p.isAdopted = true;
    }
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
              <Filters onChangeType={ this.updateFilter } onFindPetsClick={ this.fetchingPets }/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={ this.state.pets } onAdoptPet={ this.adoptPet }/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
