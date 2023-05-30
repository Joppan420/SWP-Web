import React from 'react'
import styles from './Card.module.css'

export default function Card(props) {
    return(
        <div className={styles.main}>
            <img src='https://www.w3schools.com/howto/img_avatar.png' height={'300px'} width={'300px'} alt = 'notWorking'/>
            <div className={styles.name}>{props.firstname + " " + props.surname}</div>
            <div className={styles.department}>{props.workingAs}</div> 
        </div>
    )
}