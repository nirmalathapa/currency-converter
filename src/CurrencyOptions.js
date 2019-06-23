import React from "react";

const CurrencyOptions = ({ currencies }) =>
  currencies.map(currency => (
    <option key={currency} value={currency}>
      {currency}
    </option>
  ));
export default CurrencyOptions;
