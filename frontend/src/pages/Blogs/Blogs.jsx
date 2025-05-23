import React from "react";
import styles from "../../components/Home/Home.module.css";

const Blogs = () => {
  return (
    <div className={styles.blogs}>
      <div className="container">
        <div className={styles.blogs_body}>
          <div className={styles.blogs_title}>
            <div className={styles.blogs_title}>
              <h1>Latest Blogs</h1>
            </div>
            <div className={styles.blogs_cards}>
                <div className={styles.blogs_card}>
                    <img src="https://preview.colorlib.com/theme/coloshop/images/blog_1.jpg" alt="" />
                </div>
                <div className={styles.blogs_card}>
                    <img src="https://preview.colorlib.com/theme/coloshop/images/blog_2.jpg" alt="" />
                </div>
                <div className={styles.blogs_card}>
                    <img src="https://preview.colorlib.com/theme/coloshop/images/blog_3.jpg" alt="" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
