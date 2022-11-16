import React from 'react'
import Axios  from 'axios'
import styles from "../../styles/Coins.module.css"
import Link from 'next/link'

export default function CoinList({coinData}) {
  return (
    <div className={styles.coinBox}>
      {coinData.coins.map(coin=> {
        return (
        <Link href="/coins/[coinname]" as={`/coins/${coin.id}`}>
        <div className={styles.coin}>
            <h1>{coin.name}</h1>
            <img src={coin.icon} />
            <p>{coin.price}</p>
        </div>
        </Link>
        
     ) })}
    </div>
  )
}
export const getStaticProps=async()=>{
    const res= await fetch("https://api.coinstats.app/public/v1/coins?skip=0")
    const data= await res.json();

    return{
        props:{
            coinData:data
        },
        revalidate:10,
    }
}

