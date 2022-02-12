import React from "react";
import { Link } from "react-router-dom";
import styles from "../../components/OneWayTickets/OneWayTickets.module.css";

const Flight = () => {
  const flight = {
      date: "13/02/2022",
      id: 13,
      flightNumber: "LY217",
      departure: "07:15",
      arrival: "10:45",
      originCode: "TLV",
      origin: "Tel Aviv",
      destinationCode: "LHR",
      destination: "London",
      airlineLogo: "https://dealandgo.co.il/img/airlines/ELY.png",
      airline: "Elal",
      stops: "non-Stop",
      FlightDuration: "5h 30m",
      aircraft: "Boeing 787-9",
    }
  const i = 3
  return (
    <div className={styles.OneWayticket} key={i}>
      <section className={styles.OneWayflightDetails}>
        <div className={styles.OneWayticketOne}>
          <div className={styles.flightNum}>
            <h4>{flight.flightNumber}</h4>
            <div className={styles.airlineLogo}>
              <img src={flight.airlineLogo} />
            </div>
          </div>
          <div className={styles.depArvTime}>
            <h4>
              {flight.departure} - {flight.arrival}
            </h4>
          </div>
          <div className={styles.fromTo}>
            <h4>{flight.origin}</h4>
            <h4>{flight.destination}</h4>
          </div>
          <div className={styles.total}>
            <h4>{flight.terminal}</h4>
            <h4>{flight.FlightDuration}</h4>
          </div>
        </div>
      </section>
      <section className={styles.OneWayflightPrice}>
        <div className={styles.icon}>
          <span>icon</span>
        </div>
        <div className={styles.price}>
          <span>400$</span>
        </div>
        <div className={styles.button}>
          <Link
            to="/booking"
          >
            Select
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Flight;
