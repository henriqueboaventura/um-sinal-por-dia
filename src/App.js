import React, { Component } from 'react';
import './App.css';
import Video from './components/Video';
const signs = require('./data.json');

class App extends Component {
  state = {
    word: "",
    description: "",
    video: ""
  }

  componentDidMount() {
    this.loadNewSign();
  }

  loadNewSign() {
    let data = signs.data[Math.floor(Math.random() * (5823 - 1) + 1)]
    this.setState({
      word: data.w,
      description: data.d,
      video: `http://www.acessibilidadebrasil.org.br/libras_3/public/media/palavras/videos/${data.v}`
    })
  }

  handleLoadNewSign = () => {
    this.loadNewSign()
  }

  render() {
    const { word, description, video } = this.state;
    return (
      <div className="App">
        <header>
          <h1>1 sinal por dia!</h1>
        </header>
        <section>
          <h2>Palavra: <strong>{word}</strong></h2>
          <p className="description">{description}</p>
          <Video url={video} />
        </section>
        <button onClick={this.handleLoadNewSign} className="button">Próxima Palavra</button>
        <footer>
          <p>Baseado nas informações disponibilizadas em <a href="http://www.acessibilidadebrasil.org.br/libras_3/">Acessibilidade Brasil.</a></p>
        </footer>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
