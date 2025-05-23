import React from "react";
import styles from "../../components/Home/Home.module.css";

const Categories = () => {
  return (
    <div className={styles.categories}>
      <div className="container">
        <div className={styles.categories_body}>
          <div className={styles.categories_body_card}>
            <img
              src="https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg"
              alt=""
            />
            <div className={styles.categories_card_text}>
              <p>WOMEN`S</p>
            </div>
          </div>
          <div className={styles.categories_body_card}>
            <img
              src="https://preview.colorlib.com/theme/coloshop/images/banner_2.jpg"
              alt=""
            />
            <div className={styles.categories_card_text}>
              <p>WOMEN`S</p>
            </div>
          </div>
          <div className={styles.categories_body_card}>
            <img
              src="https://preview.colorlib.com/theme/coloshop/images/banner_3.jpg"
              alt=""
            />
            <div className={styles.categories_card_text}>
              <p>WOMEN`S</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
