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
            <select>
              <CurrencyOptions currencies={this.state.currencies} />
            </select>
          </label>
          <label>
            To:
            <select>
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
