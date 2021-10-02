import React from "react";
import styles from "../css/Header.module.css"
export default function Header() {

     
      
  return (
    <div className={styles.header}>
      <div className={styles.Hel}>HELSINGIN SANOMAT</div>
      <ul>
        <li>News</li>
        <li>Foliage</li>
        <li>Room</li>
        <li>Log in</li>
        <li>Hae</li>
        <li>Menu</li>
      </ul>
    </div>

  )
}
