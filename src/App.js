import React from "react";
import "./App.css";
import { getSymbols, getRate } from "./api";
import CurrencyOptions from "./CurrencyOptions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "EUR",
      to: "EUR",
      amount: 1,
      currencies: [],
      result: null
    };
  }

  async componentDidMount() {
    const symbols = await getSymbols();
    const currencies = Object.keys(symbols);
    this.setState({
      currencies
    });
  }

  handleFromCurrency = event => {
    this.setState({
      from: event.target.value
    });
  };

  handleToCurrency = event => {
    this.setState({
      to: event.target.value
    });
  };

  handleFormSubmit = async event => {
    event.preventDefault();
    const { from, to, amount } = this.state;
    const rate = await getRate(from, to, amount);
    this.setState({
      result: rate * amount
    });
  };

  handleAmount = event => {
    this.setState({
      amount: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Amount:
            <input
              type="number"
              value={this.state.amount}
              onChange={this.handleAmount}
            />
          </label>
          <label>
            From:
            <select value={this.state.from} onChange={this.handleFromCurrency}>
              <CurrencyOptions currencies={this.state.currencies} />
            </select>
          </label>
          <label>
            To:
            <select value={this.state.to} onChange={this.handleToCurrency}>
              <CurrencyOptions currencies={this.state.currencies} />
            </select>
          </label>
          <input type="submit" value="Convert" />
        </form>
        <div className="result">
          <h2>{this.state.result}</h2>
        </div>
      </div>
    );
  }
}

export default App;
