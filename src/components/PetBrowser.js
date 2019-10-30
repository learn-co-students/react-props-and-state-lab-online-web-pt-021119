import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    return <div className="ui cards">
      {this.props.pets.map(item => (
        <React.Fragment key={item.id}>
          <Pet pet= { item }/>
        </React.Fragment>
      ))}
    </div>
  }
}

export default PetBrowser
