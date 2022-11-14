import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shitcoin</title>
      </Head>
      
     <h1 className={styles.title}>Welcome to <span>SHITCOIN</span></h1>
     <h3>We rip you off in shittyest ways</h3>
     <p>We have high transaction fees and poor costumer suport </p>
    </div>
  )
}
