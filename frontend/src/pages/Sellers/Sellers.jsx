import React from 'react'
import styles from "../../components/Home/Home.module.css";

const Sellers = () => {
  return (
    <div className={styles.sellers}>
          <div className="container">
            <div className={styles.sellers_body}>
              <div className={styles.sellers_title}>
                <h1>New Arrivals</h1>
              </div>
              
              <div className={styles.sellers_cards}>
                    <div className={styles.sellers_card}>
                      <img src="https://preview.colorlib.com/theme/coloshop/images/product_1.png" />
                      <h3>Fujifilm X100T 16 MP Digital Camera (Silver)</h3>
                      <h4>$520.00</h4>
                    </div>
                    <div className={styles.sellers_card}>
                      <img src="https://preview.colorlib.com/theme/coloshop/images/product_2.png" />
                      <h3>Samsung CF591 Series Curved 27-Inch FHD Monitor</h3>
                      <h4>$610.00</h4>
                    </div>
                    <div className={styles.sellers_card}>
                      <img src="https://preview.colorlib.com/theme/coloshop/images/product_3.png" />
                      <h3>Blue Yeti USB Microphone Blackout Edition</h3>
                      <h4>$120.00</h4>
                    </div>
                    <div className={styles.sellers_card}>
                      <img src="https://preview.colorlib.com/theme/coloshop/images/product_4.png" />
                      <h3>Blue Yeti USB Microphone Blackout Edition</h3>
                      <h4>$120.00</h4>
                    </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Sellers