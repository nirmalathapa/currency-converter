import React from 'react'
import './App.css'
import {getSymbols, getRate} from './api'
import CurrencyOptions from './CurrencyOptions'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      from: 'EUR',
      to: 'EUR',
      amount: 1,
      currencies: [],
      result: null,
    }
  }

  async componentDidMount() {
    const symbols = await getSymbols()
    const currencies = Object.keys(symbols)
    this.setState({
      currencies,
    })
  }

  handleFromCurrency = event => {
    this.setState({
      from: event.target.value,
    })
  }

  handleToCurrency = event => {
    this.setState({
      to: event.target.value,
    })
  }

  handleFormSubmit = async event => {
    event.preventDefault()
    const {from, to, amount} = this.state
    const rate = await getRate(from, to, amount)
    this.setState({
      result: rate * amount,
    })
  }

  handleAmount = event => {
    this.setState({
      amount: event.target.value,
    })
  }

  render() {
    return (
      <div className="bg-white rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 p-4 px-3 py-10 bg-gray-200 flex justify-center">
        <div className="w-full max-w-xs">
          <form
            onSubmit={this.handleFormSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="amount">
                  Amount:
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="amount"
                  type="number"
                  value={this.state.amount}
                  onChange={this.handleAmount}
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="from">
                  From:
                </label>
                <select
                  id="from"
                  className="w-full block"
                  value={this.state.from}
                  onChange={this.handleFromCurrency}>
                  <CurrencyOptions currencies={this.state.currencies} />
                </select>
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="to">
                  To:
                </label>
                <select
                  id="to"
                  className="w-full"
                  value={this.state.to}
                  onChange={this.handleToCurrency}>
                  <CurrencyOptions currencies={this.state.currencies} />
                </select>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <input
                  type="submit"
                  value="Convert"
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="result w-full px-3 mb-6 md:mb-0">
                <h2 className="text-center text-5xl">
                  {this.state.result}
                </h2>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default App
