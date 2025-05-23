import React, { useEffect, useState } from 'react'
import styles from "./Wish.module.css";

const Wish = () => {
    const [wish,setWish] = useState([]);

    useEffect(()=>{
        const storedWish = JSON.parse(localStorage.getItem("wish"))||[];
        setWish(storedWish);
    })

    const updateWish = (newWish) => {
    setWish(newWish);
    localStorage.setItem("wish", JSON.stringify(newWish));
  };

    const removeFromWish = (id) =>{
        const newWish = wish.filter((item)=>item._id !==id);
        updateWish(newWish);
    }
    
  return (
    <div className={styles.containerWish}>
      <h2>Wish</h2>
      {wish.length === 0 ? (
        <p>Wish boşdur.</p>
      ) : (
        <div className={styles.product_cards}>
          {wish.map((item, index) => (
            <div className={styles.product_card}  key={index} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
                <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>Qiymət: ${item.price}</p>
              <p>Miqdar: {item.quantity}</p>


              <button onClick={() => removeFromWish(item._id)}>🗑 Sil</button>
            </div>
            
          ))}
        
        </div>
      )}
    </div>
  )
}

export default Wish