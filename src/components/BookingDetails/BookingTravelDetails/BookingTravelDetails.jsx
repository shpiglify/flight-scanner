import React, { useState } from "react";
import styles from "./BookingTravelDetails.module.css";
function BookingTravelDetails() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
  });
  const [error, setError] = useState("");

  return (
    <>
      <form className={styles.form}>
        <section className={styles.emailInput}>
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => {
              setUserDetails({ ...userDetails, email: e.target.value });
            }}
          />
        </section>
        <section className={styles.travelDetailInputs}>
          <input
            className={styles.nameInput}
            type="text"
            placeholder="First Name"
            onChange={(e) => {
              setUserDetails({ ...userDetails, firstName: e.target.value });
            }}
          />
          <input
            className={styles.lastNameInput}
            type="text"
            placeholder="Last Name"
            onChange={(e) => {
              setUserDetails({ ...userDetails, lastName: e.target.value });
            }}
          />
          <div className={styles.birthDayInput}>
            <input
              className={styles.year}
              type="date"
              min="1900-01-01"
              max={new Date().toISOString().split("T")[0]}
              onChange={(e) => {
                setUserDetails({ ...userDetails, dateOfBirth: e.target.value });
              }}
            />
          </div>
          <select
            className={styles.selectOption}
            value={userDetails.gender}
            onChange={(e) => {
              setUserDetails({ ...userDetails, gender: e.target.value });
            }}
          >
            <option></option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </section>
        <section className={styles.continue}>
          <input
            type="submit"
            className={styles.continueBtn}
            value="Continue"
          />
        </section>
      </form>
    </>
  );
}

export default BookingTravelDetails;
