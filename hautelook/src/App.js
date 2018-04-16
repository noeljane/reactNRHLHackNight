import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

axios({
  method: 'get', 
  url: 'https://www.nordstromrack.com/api/search2/catalog/search?query{searchquery}'
  })
  .then((res, err) => {
    if(err) console.log(err)
    console.log(res.data)
  })
  

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hits: [],
    }
  }

  // componentDidMount () {
  //   fetch(API + DEFAULT_QUERY)
  //     .then(response => response.json())
  //     .then(data => this.setState({hits: data.hits}))
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
