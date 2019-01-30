import React, { Component } from 'react';
import Card from './card.js'


class Cards extends Component {

  render() {
    let count = 0
    let method = [...this.props.methods][count]
    let propsPassed =
    count++
    return (
      <div className="card-body">
        {method ? <Card name={method.name} description={method.description}/> : ""}
      </div>
    );
  }
}

export default Cards;
