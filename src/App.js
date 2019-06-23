import React from "react";
import "./App.css";
import { getSymbols } from "./api";
import CurrencyOptions from "./CurrencyOptions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "EUR",
      to: "EUR",
      amount: 1,
      currencies: []
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

  render() {
    return (
      <div className="App">
        <form>
          <label>
            Amount:
            <input type="number" />
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
      </div>
    );
  }
}

export default App;
