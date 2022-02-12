import React from "react";
import styles from "../Screens/Flights-Results/FlightsResult.module.css";

export default function Tickets({ roundTripTickests, oneWayTickests }) {
  const roundTripElements = roundTripTickests
    ? roundTripTickests.map((ticket, i) => {
        const secondTicket = Object.values(oneWayTickests);
        return (
          <>
            <div className={styles.roudTripticket}>
              <div className={styles.roundTicketDataContainer}>
                <section className={styles.flightDetails} key={i}>
                  <div className={styles.roundTicketInnerContainer}>
                    <div className="flight num">
                      <h4>{ticket.flightNumber}</h4>
                    </div>
                    <div className="depArvTime">
                      <h4>
                        {ticket.departure} - {ticket.arrival}
                      </h4>
                    </div>
                    <div className="fromTo">
                      <h4>{ticket.origin}</h4>
                      <h4>{ticket.destination}</h4>
                    </div>
                    <div className="total">
                      <h4>{ticket.terminal}</h4>
                      <h4>06h 00m</h4>
                    </div>
                  </div>
                </section>
                <section className={styles.flightDetails}>
                  <div className={styles.roundTicketInnerContainer}>
                    <div className="flight num">
                      <h4>{secondTicket[i].flightNumber}</h4>
                    </div>
                    <div className="depArvTime">
                      <h4>
                        {secondTicket[i].departure} - {secondTicket[i].arrival}
                      </h4>
                    </div>
                    <div className="fromTo">
                      <h4>{secondTicket[i].origin}</h4>
                      <h4>{secondTicket[i].destination}</h4>
                    </div>
                    <div className="total">
                      <h4>{secondTicket[i].terminal}</h4>
                      <h4>06h 00m</h4>
                    </div>
                  </div>
                </section>
              </div>
              <section className={styles.flightPrice}>
                <div className="icon">
                  <span>icon</span>
                </div>
                <div className="price">
                  <span>400$</span>
                </div>
                <div className="button">
                  <button>Book</button>
                </div>
              </section>
            </div>
          </>
        );
      })
    : null;

  return <>{roundTripElements}</>;
}
