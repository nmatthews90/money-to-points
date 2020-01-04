import React, { Component } from 'react';
import MoneyInput from './components/MoneyInput/MoneyInput';
import PointsOutput from './components/PointsOutput/PointsOutput';
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
    <div>
      <p>A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction.</p>
        <p>(e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).</p>

    <input
      type="number"
      onChange={this.changeHandler}
      value={this.state.userInput}
    />

      <MoneyInput purchaseAmount={this.state.userInput} />
      <PointsOutput />


    </div>
  )
  }
}

export default App;
