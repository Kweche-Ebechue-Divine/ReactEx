import React from 'react'
import styles from "./NewsSection.module.css";

export default function NewsSection(props) {
  return (
    <div className={styles.news}>
      <h1 className={styles.heading} >{props.heading}</h1>
      <div>{props.details}</div>
      <div>{props.time}</div>
      

    </div>
  )
}
