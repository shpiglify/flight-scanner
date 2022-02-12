import React from "react";
import styles from "./BookingPayMent.module.css";

export default function BookingPayMent() {
  return (
    <div className={styles.paymentPage}>
      <h3> Payment</h3>
      <div className={styles.payMentContainer}>
        <form className={styles.payMentDetails}>
          <div className={styles.payMentDetailsCardNumber}>
            <label>Credit card number</label>
            <input type="number" />
          </div>
          <div className={styles.payMentDetailsCardExpiration}>
            <label className={styles.ExpirationTitle}>Expiration Date</label>
            <div className={styles.ExpirationDate}>
              <input
                type="number"
                
                className={styles.payMentDetailsCardExpirationMonth}
              />
              <input
                type="number"
                className={styles.payMentDetailsCardExpirationYear}
              />
            </div>
          </div>
          <div className={styles.payMentDetailsCardCvc}>
            <label>Cvc/Cvv</label>
            <input type="number" />
          </div>
          <div className={styles.payMentDetailsBtn}>
            <input type="submit" value="Pay Now" />
          </div>
        </form>
        <article className={styles.payMentTotalImage}>
          <div className={styles.price}>
            <h5>To pay</h5>
            <h1>$384</h1>
          </div>
        </article>
      </div>
    </div>
  );
}
