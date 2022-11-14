import React from 'react'
import styles from "../../styles/About.module.css"

export default function News(props) {
  return (
    <div className={styles.article}>
      <h3>{props.article.title}</h3>
      <p>{props.article.body}</p>
    </div>
  )
}
