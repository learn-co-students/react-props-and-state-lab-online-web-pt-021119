import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
	handleAdopt = (id) => {
		this.pet.isAdopted = !this.pet.isAdopted
	}

    render() {
		const pets = this.props.pets.map(pet => <div className="ui cards"><Pet onAdoptPet={this.handleAdopt} pet={pet}/></div>)
		if (this.props.pets.length !== 0) {
			return (pets)
		} else {
		return (<div className="ui cards"></div>)
		}
  }
}

export default PetBrowser
