import React from 'react';
import video from '../video/Delivery.mp4';
import Style from './OrderSuccess.module.css'; 


  
const OrderSuccess = () => {
    return (
      <div className={Style.orderContainer}>
        <div className={Style.orderAnimation}>
          <div className={Style.backgroundVideo}>
            <video src={video} className={Style.Video} autoPlay loop />
          </div>
        </div>
        <h1>Order Placed Successfully!</h1>
        <p>Your order has been successfully processed. Thank you for shopping with us!</p>
      </div>
    );
  };
  

export default OrderSuccess;

