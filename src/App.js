import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "EUR",
      to: "EUR",
      amount: 1
    };
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
