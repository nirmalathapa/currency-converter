import React from "react";
import "./App.css";

function App() {
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

export default App;
