import React from "react";
import "./App.css";
import { getSymbols } from "./api";

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
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </label>
          <label>
            To:
            <select>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </label>
          <input type="submit" value="Convert" />
        </form>
      </div>
    );
  }
}

export default App;
