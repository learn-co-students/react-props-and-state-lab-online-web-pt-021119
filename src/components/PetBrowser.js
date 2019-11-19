import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {
  renderCards = () => {
    return (
      <div className="ui cards">
        {this.props.pets.map((pet) =>  {
          return <Pet
              pet={pet}
              onAdoptPet={this.props.onAdoptPet}
              canAdopt={pet.isAdopted}
            />
        })}
      </div>
    )
  }

  render() {
    return this.renderCards()

    // return <div className="ui cards"><Pet onAdoptPet={event => this.props.onAdoptPet(event)} /></div>
  }
}

export default PetBrowser
