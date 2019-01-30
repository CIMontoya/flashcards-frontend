import React, { Component } from 'react';



class Card extends Component {

  render() {
    return (
      <div>
        <div className="card-title">
          {this.props.description}
        </div>
        <form>
          <input type="text"></input>
          <button type="submit"></button>
        </form>
      </div>
    );
  }
}

export default Card;
