import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header_body}>
          <div className={styles.header_body_logo}>
            <a href="/">
              COLO
              <span>SHOP</span>
            </a>
          </div>
          <div className={styles.header_body_container}>
            <div className={styles.header_body_items}>
              <a href="/">HOME</a>
              <a href="/admin">ADMIN</a>
              <a href="/wish">WISH</a>
              <a href="/">PAGES</a>
              <a href="/">BLOG</a>
              <a href="/">CONTACT</a>
            </div>

            <div className={styles.header_body_icons}>
              <a href="#">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
              <a href="#">
                <i className="fa-solid fa-user"></i>
              </a>
              <a href="/basket">
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
            </div>
            <div className={styles.header_body_hamburger}>
              <a href="#">
                <i className="fa-solid fa-bars"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
