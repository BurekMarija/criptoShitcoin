import React from 'react'
import styles from "../styles/About.module.css"

export default function News(props) {
    const fullTitle=props.article.title
    const title= fullTitle.split(' ').slice(0,5).join(' ');
  return (
    <div className={styles.article}>
      <h3>{title}</h3>
      <p>{props.article.body}</p>
    </div>
  )
}
