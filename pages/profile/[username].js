import React from 'react'
import { useRouter } from 'next/router' 
import userdata from "../../components/userdata.js"
import styles from "../../styles/Profile.module.css"
import MyCoin from '../../components/MyCoin'

export default function Profile({coins}) {
    const [portfolioValue, setPortfolioValue]= React.useState()
    const [myPortfolio2, setMyPortfolio2]=React.useState()
    let myCoinsPortfolio=[]
    const router=useRouter()
    const{username}=router.query
    const allCoins=coins.coins
    let myPortfolio=[]
    const kor= userdata.filter(data=> data.username===username)
      const user=kor[0]
      myPortfolio=user.coins.map(coin=>{
        const tajCoin= allCoins.filter(c=> c.id===coin.name)
        let value= Math.round((tajCoin[0].price*coin.quantity) * 100) / 100 
        return(
          {...coin, 
            value:value,
            price:tajCoin[0].price,
            priceChange1d:tajCoin[0].priceChange1d,
            img:tajCoin[0].icon,
            nameCoin:tajCoin[0].name
            
          }
        )
      })
     
      React.useEffect(() => {
        setMyPortfolio2(myPortfolio)
        let value=0
        console.log(myPortfolio2, "port")
        for(let i=0; i<userdata.length; i++){
            value=value+myPortfolio[i].value
        }
        const value2= Math.round((value) * 100) / 100
        setPortfolioValue(value2)
      }, [] );

     

     if(myPortfolio2!==undefined){
      myCoinsPortfolio=myPortfolio2.map(coin=>
        <MyCoin
        value={coin.value}
        name={coin.name}
        quantity={coin.quantity}
        priceChange1d={coin.priceChange1d}
        price={coin.price}
        img={coin.img}
        nameCoin={coin.nameCoin}
        />)

        
        
     }
  return (
    <div>
      <div>Hy, {username}! Your portfolio value is: {portfolioValue}$</div>
      <div className={styles.myPortfolio} >{myCoinsPortfolio}</div>
    

    </div>
  )
}


export const getStaticProps= async()=>{
    
  const res=await fetch(`https://api.coinstats.app/public/v1/coins`)

  const coins=await res.json()
  return{
      props:{coins}
  }
}

export const getStaticPaths= async()=>{
  const users=userdata.map(user=>user.username)
  const paths= users.map(username=>({params: {username:username}}))
  return{
      paths,
      fallback:false,
  }

}
