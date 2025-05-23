import React, { useEffect, useState } from "react";
import styles from "./Basket.module.css";



const Basket = () => {
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(storedBasket);
  }, []);
  const updateBasket = (newBasket) => {
    setBasket(newBasket);
    localStorage.setItem("basket", JSON.stringify(newBasket));
  };
  const removeFromBasket = (id) => {
    const newBasket = basket.filter((item) => item._id !== id);
    updateBasket(newBasket);
  };
  const increaseQuantity = (id) => {
    const newBasket = basket.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateBasket(newBasket);
  };
  const decreaseQuantity = (id) => {
    const newBasket = basket
      .map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    updateBasket(newBasket);
  };

  
  function getTotalPrice(basket) {
    return basket.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  return (
    <div className={styles.containerBasket}>
      <h2>Sebet</h2> <br />
      <h2>Umumu Sebet Qiymeti : ${getTotalPrice(basket)}</h2>
      {basket.length === 0 ? (
        <p>Sebet Bosdur.</p>
      ) : (
        <div className={styles.product_cards}>
          {basket.map((item, index) => (
            <div className={styles.product_card} key={index}>
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <p>Qiymet: ${item.price}</p>
              <p>Miqdar: {item.quantity}</p>

              <button
                className={styles.product_card_button}
                onClick={() => removeFromBasket(item._id)}
              >
                🗑 Sil
              </button>
              <button onClick={() => increaseQuantity(item._id)} style={{marginRight:'20px'}}>+</button>
              <button onClick={() => decreaseQuantity(item._id)}>-</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Basket;
