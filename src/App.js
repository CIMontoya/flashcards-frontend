import React, { Component } from 'react';
import './App.css';
import Cards from './components/cards.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      methods: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001')
    .then(data => data.json())
    .then(messagesJSON => {
      this.setState({
        methods: messagesJSON
      })
    })
  }

  render() {
    return (
      <div className="container">
        <h1>JS FlashCards</h1>
        <div className="card">
          {this.state.methods ? <Cards methods={this.state.methods}/> : ""}
        </div>
      </div>
    );
  }
}

export default App;
