import React from 'react'
import styles from "../../components/Home/Home.module.css"

const Arrivals = () => {
  return (
    <div className={styles.arrivals}>
        <div className="container">
            <div className={styles.arrivals_body}>
                <p>SPRING / SUMMER COLLECTION 2017</p>
                <h1>Get up to 30% Off <br /> New Arrivals</h1>
                <button className={styles.arrivals_body_button}>SHOP NOW</button>
            </div>
        </div>
    </div>
  )
}

export default Arrivals