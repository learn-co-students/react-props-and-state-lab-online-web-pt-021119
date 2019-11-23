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

  onChangeType = (event) => {
    this.setState({
      filters: { ...this.state.filters, type: event.target.value}
    })
  }

  fetchPets = () => {
    let url = this.state.filters.type !== "all" ? `/api/pets?type=${this.state.filters.type}` : "/api/pets"
    fetch(url).then(response => response.json())
    .then(response => this.setState({
      pets: response

    }))
    }

    onAdoptPet = (petId) => {
      const pets = this.state.pets.map(pet => {
        return pet.id === petId ? {...pet, isAdopted: true} : pet
      });

      this.setState({
        pets 
      })
      



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
              <Filters onFindPetsClick={this.fetchPets} onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
