import React from 'react'
import { useRouter } from 'next/router'
import Axios  from 'axios'
import styles from "../../styles/Coin.module.css"


export default function Coin({coin}) {
  return (
        <div className={styles.coinBox} >
            <h1>{coin.coin.name}</h1>
            <div><img src={coin.coin.icon} /></div>
            <span>Price:</span><span>{coin.coin.price}</span>
            <span>Symbol:</span><span>{coin.coin.symbol}</span>
            <span>Rank:</span><span>{coin.coin.rank}</span>
            <span>Price change 1day:</span><span>{coin.coin.priceChange1d}%</span>
            <span>Market cap:</span><span>{coin.coin.marketCap}</span>
            <span>Website url:</span><span>{coin.coin.websiteUrl}</span>

        </div>

  )
}

export const getStaticProps= async(context)=>{
    
    const res=await fetch(`https://api.coinstats.app/public/v1/coins/${context.params.coinname}`)

    const coin=await res.json()
    return{
        props:{coin}
    }
}

export const getStaticPaths= async()=>{
    const data= await Axios.get(`https://api.coinstats.app/public/v1/coins`)
    const coins=data.data.coins
    const ids=coins.map(coin=>coin.id)
    const paths= ids.map(id=>({params: {coinname:id}}))
    return{
        paths,
        fallback:false,
    }

}
