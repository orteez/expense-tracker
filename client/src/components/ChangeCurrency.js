import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const currencies = [
  {currency : "USD"},
  {currency : "EUR"},
  {currency : "JPY"},
  {currency : "GBP"},
]

export const ChangeCurrency = () => {
  const { changeCurrency } = useContext(GlobalContext);
  const onSelectCurrency = (e) => {
    changeCurrency(e.target.value)
  }
  return (
    <h3>
      Currency
      <select id="currency" onChange={onSelectCurrency}>
        {currencies.map((currency) => (
          <option value={currency.currency}>{currency.currency}</option>
        ))}
      </select>
    </h3>
  )
}
