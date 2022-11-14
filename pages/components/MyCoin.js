import React from 'react'
import styles from "../../styles/Profile.module.css"

export default function MyCoin(props) {
  console.log(props)
  return (
    <div  key={props.name}>
      <div className={styles.coinBox}  >
            <h1>{props.nameCoin}</h1>
            <div><img src={props.img} /></div>
            <span>Quantity:</span><span>{props.quantity}</span>
            <span >Value:</span><span >{props.value}</span>
            <span>Price:</span><span>{props.price}</span>
            <span>Price change 1day:</span><span>{props.priceChange1d}%</span>
          </div>
    </div>
  )
}
