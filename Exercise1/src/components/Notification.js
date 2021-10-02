import React from 'react'
import styles from "../css/Notification.module.css";
    
    export default function Notification(props){
      return (
        <div className={styles.notification}>
    
        <span>{props.topic}:</span>{props.description}
          
        </div>
      
  )

}
