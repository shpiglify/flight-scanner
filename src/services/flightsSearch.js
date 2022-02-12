import flightsDB from '../../public/data/flights.json'

export const searchSameDayFlights = (origin,destination,day) => {
    return flightsDB.filter(flight => {
        return flight.date === day && flight.origin === origin && flight.destination === destination
    })
}

export const searchRoundTripFlights = (origin,destination,departureDay,returnDay) => {
  const departureDayFlights = searchSameDayFlights(origin,destination,departureDay)
  console.log(returnDay)
  const returnDayFlights = searchSameDayFlights(destination,origin,returnDay)
  const roundTripFlights = []
  console.log(departureDayFlights,returnDayFlights)
  for(let i = 0 ; i < departureDayFlights.length; i++){
    if(departureDayFlights[i] && returnDayFlights[i]){
      roundTripFlights.push([departureDayFlights[i],returnDayFlights[i]])
    } 
  }
  return roundTripFlights;
}

export const getHotDestinations = () => {
   return [ {
        "id": "e9118270-f279-48f5-bedf-51a6a7e78edc",
        "date": "13/02/2022",
        "flightNumber": "LY65",
        "departure": 1644722178432,
        "arrival": 1644758298432,
        "originCode": "TLV",
        "origin": "Tel Aviv",
        "destinationCode": "PVG",
        "destination": "Shanghai",
        "flightDuration": 36120000,
        "airline": "Elal",
        "airlineLogo": "https://dealandgo.co.il/img/airlines/ELY.png",
        "stops": "non-Stop",
        "aircraft": "Boeing 747 Freighter",
        "price": 681
      },
      {
        "id": "288d9525-59cb-4499-917b-ed1424d19f80",
        "date": "13/02/2022",
        "flightNumber": "LY65",
        "departure": 1644760199487,
        "arrival": 1644796319487,
        "originCode": "TLV",
        "origin": "Tel Aviv",
        "destinationCode": "PVG",
        "destination": "Shanghai",
        "flightDuration": 36120000,
        "airline": "Elal",
        "airlineLogo": "https://dealandgo.co.il/img/airlines/ELY.png",
        "stops": "non-Stop",
        "aircraft": "Boeing 739",
        "price": 103
      }]
}