import React from 'react'
import News from '../components/News'
import styles from "../styles/About.module.css"

export default function about(articles) {
  const allArticles=articles.articles
 const allNews=allArticles.map((news) => <News key={news.id} article={news}/>)
  return (
    <div>
      <div className={styles.news}>
      {allNews}
    </div>
    </div>
    
  )
}

export const getStaticProps= async () =>{
  const res=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
  const articles=await res.json()

  return{
    props:{
      articles
    }
  }
}