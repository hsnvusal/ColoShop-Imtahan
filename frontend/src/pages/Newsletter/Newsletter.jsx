import React from 'react'
import styles from "../../components/Home/Home.module.css";

const Newsletter = () => {
  return (
    <div className={styles.newsletter}>
        <div className="container">
            <div className={styles.newsletter_body}>
                <div className={styles.newsletter_text}>
                    <h2>Newsletter</h2>
                    <p>Subscribe to our newsletter and get 20% off your first purchase</p>
                </div>
                <div className={styles.newsletter_input}>
                   <input type="email" placeholder='Your Email...'/>
                   <button className={styles.newsletter_button}>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter