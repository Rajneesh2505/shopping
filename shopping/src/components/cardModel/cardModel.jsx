import React from "react";
import styles from "./cardModel.module.css";
import { useValue } from "../../itemContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CartModal() {
  const {cart,value,handleRemove,data,handlePay} = useValue();
  let Cart =data
  .filter((data)=>{
    if(cart.includes(data.id)){
      return data;
    }
  })

  let total = Cart.reduce((total, data)=>{
    return parseInt(total)+parseInt(data.price);
  },0)

   console.log(total,Cart);
  return (
    <>
    <div className={styles.cartModal}>
      <div className={styles.itemContainer}>
      {Cart
      .map(data =>{
            return(
              
                <>
                <div className={styles.cartCard} key={data.id}>
                  <img src={data.image} alt={data.title} />
                  <p>{data.title}</p>
                  <h4>$ {data.price}</h4>
                  <button className={styles.deleteBtn} onClick={() => handleRemove(data)}><FontAwesomeIcon icon={faTrash}/></button>
                </div>
                </>
                
            )
        })}
      </div>
      <div className={styles.totalCard}>
                    <p></p>
                    <h3 className={styles.quantity}>Quantity : {Cart.length}</h3>
                    <h3 className={styles.total}>Total : ${total}</h3>
                </div>
    </div>
      <div>
      <Link to="/Pay"><button className={styles.playbtn} onClick={handlePay}>Pay</button></Link>
    </div>
    </>
  );
}

export default CartModal;

