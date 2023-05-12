import React from 'react'
import styles from './List.module.css'

export default function List(props) {
  return (
    <div className={styles.main}>{props.drink}</div>
  )
}
