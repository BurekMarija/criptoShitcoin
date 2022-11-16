import Layout from '../components/Layout'
import '../styles/globals.css'
import UserProvider from "./context/state"
import Head from 'next/head'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    
  <UserProvider>
    <Head>
        <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
        <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
        <Link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet"></Link>
        
      </Head>
    <Layout>
      <Component {...pageProps} />
      </Layout>
      </UserProvider>
  )
}

export default MyApp
