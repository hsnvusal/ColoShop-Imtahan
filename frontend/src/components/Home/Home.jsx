import React from 'react'
import Products from '../../pages/Products/Products'
import styles from "./Home.module.css"
import Arrivals from '../../pages/Arrivals/Arrivals'
import Categories from '../../pages/Categories/Categories'
import Sellers from '../../pages/Sellers/Sellers'
import Newsletter from '../../pages/Newsletter/Newsletter'
import Blogs from '../../pages/Blogs/Blogs'
const Home = () => {
  return (
    <div className={styles}>
        <Arrivals/>
        <Categories/>
        <Products/>
        <Sellers/>
        <Blogs/>
        <Newsletter/>
    </div>
  )
}

export default Home