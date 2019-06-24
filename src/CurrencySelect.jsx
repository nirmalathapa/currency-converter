import React from 'react'

const CurrencySelect = ({id, value, handleChange, currencies}) => (
  <select
    id="id"
    className="w-full"
    value={value}
    onChange={handleChange}>
    <CurrencyOptions currencies={currencies} />
  </select>
)

const CurrencyOptions = ({ currencies }) =>
  currencies.map(currency => (
    <option key={currency} value={currency}>
      {currency}
    </option>
  ));

export default CurrencySelect;
