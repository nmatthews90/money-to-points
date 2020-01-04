import React, { Component } from 'react';
import MoneyInput from './components/MoneyInput/MoneyInput';
import PointsOutput from './components/PointsOutput/PointsOutput';
import Header from './components/Header/Header';
import tachyons from 'tachyons';
import './App.css';


class App extends Component {
  state = {
    userInput: ""
  };

  changeHandler = event => {
    this.setState({ userInput: event.target.value });
  };

  render() {
  return (
    <div className="App">
      <Header />
      <MoneyInput
        changeHandler={this.changeHandler}
        userInput={this.userInput}
      />
      <PointsOutput purchaseAmount={this.state.userInput} />
    </div>
  );
  }
}

export default App;
