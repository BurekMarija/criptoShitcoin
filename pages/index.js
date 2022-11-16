import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.css" 
import { Carousel } from 'react-responsive-carousel'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shitcoin</title>
         </Head>
      
        <div className={styles.slide}>
        <Carousel dynamicHeight={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={10000}>
                <div>
                  <img src="https://media.istockphoto.com/id/1304093999/photo/bitcoin-e-commerce-concept-on-digital-screen.jpg?b=1&s=170667a&w=0&k=20&c=wHflmbql7d9wBghcEw5WxG4bA-tW7XWxLqY2JYeT65M=" alt=""/>
                  <p className="legend">Welcome to <span>SHITCOIN</span></p> 
                </div>
                <div>
                <img src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J5cHRvY3VycmVuY3l8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt=""/>
                <p className="legend">We rip you off in shittyest ways</p>
                </div>
                <div>
                <img src="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y3J5cHRvY3VycmVuY3l8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt=""/>
                <p className="legend">We have high transaction fees and poor costumer suport </p >
                </div>
            </Carousel>
        </div>
      
      
    </div>
  )
}


/*
     <h1 className={styles.title}>Welcome to <span>SHITCOIN</span></h1>
     <h3>We rip you off in shittyest ways</h3>
     <p>We have high transaction fees and poor costumer suport </p>*/ 