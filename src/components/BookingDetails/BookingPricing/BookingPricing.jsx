import React from "react";
import styles from "./BookingPricing.module.css";

function BookingPricing() {
  return (
    <>
      <article className={styles.pricing}>
        <div className={styles.priceTitle}>
          <h2>Price Details</h2>
        </div>
        <div className={styles.details}>
          <div className={styles.left}>
            <h3>Travelers</h3>
            <span>adult</span>
            <span>Discount</span>
          </div>
          <div className={styles.right}>
            <h3>Subtotal</h3>
            <span>$400</span>
            <span>-$16</span>
          </div>
        </div>
        <div className={styles.total}>
          <div>
            <h3>Total Price</h3>
          </div>
          <div>
            <span>$384</span>
          </div>
          <div className={styles.alertMessage}>
            <div className={styles.message}></div>
          </div>
        </div>
      </article>
    </>
  );
}

export default BookingPricing;
