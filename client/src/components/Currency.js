import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Currency = (props) => {
  const {amount} = props
  const {currency} = useContext(GlobalContext);
  return (
    <>{amount.toLocaleString('en-US', { style: 'currency', currency: currency, })}</>
  )
}
