import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getProduct } from "../../redux/reducers/productSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../components/Home/Home.module.css";

const Products = () => {
  const dispatch = useDispatch();
  const { items: products, status } = useSelector((state) => state.products);
  const [searchText, setSearchText] = useState("");
  const [sorted, setSorted] = useState("");
  const filteredData =
    products &&
    products
      .filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      )
      .sort((a, b) => {
        if (sorted === "asc") return Number(a.price) - Number(b.price);
        if (sorted === "desc") return Number(b.price) - Number(a.price);
        return 0;
      });

  useEffect(() => {
    dispatch(getProduct());
    JSON.parse(localStorage.getItem("basket")) || [];
    JSON.parse(localStorage.getItem("wish")) || [];
  }, []);

  if (status === "loading") return <p>Yuklenir...</p>;
  if (status === "failed") return <p>Xeta Bas Verdi!!!</p>;

  function AddToCart(item) {
    let basket = JSON.parse(localStorage.getItem("basket"))||[]
    let existingItem = basket.find((product)=>product._id === item._id);
    if (existingItem) {
        existingItem.quantity +=1
    }
    else {
        basket.push({...item,quantity:1})
    }
    alert("Sebete Elave Edildi")
    localStorage.setItem("basket",JSON.stringify(basket))
  }
  function AddToWish(item) {
    let wish = JSON.parse(localStorage.getItem("wish"))||[]
    let existingItem = wish.find((product)=>product._id === item._id);
    if (existingItem) {
        alert("Bu Mehsul artiq Favorilerde Var")
    }
    else {
        wish.push(item)
    }
    alert("Favorilere Elave Edildi")
    localStorage.setItem("wish",JSON.stringify(wish))
  }
  return (
    <div className={styles.products}>
      <div className="container">
        <div className={styles.products_body}>
          <div className={styles.products_title}>
            <h1>New Arrivals</h1>
          </div>
          <div className={styles.filtered}>
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button onClick={() => setSorted("asc")}>ASC</button>
            <button onClick={() => setSorted("desc")}>DESC</button>
            <button onClick={() => setSorted("default")}>DEFAULT</button>
          </div>
          <div className={styles.products_cards}>
            {filteredData.slice(0, 6).map((item) => {
              return (
                <div className={styles.products_card}>
                  <img src={item.image} />
                  <h3>{item.title}</h3>
                  <h4>{item.price}</h4>
                  <div className={styles.products_card_button1}>
                    <a href="#" onClick={()=>AddToCart(item)}>ADD TO CART</a>
                  </div>
                  <div className={styles.products_card_button2}>
                    <a href="#" onClick={()=>AddToWish(item)}>ADD TO WISH</a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
