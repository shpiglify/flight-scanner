import flightsDB from '../../public/data/flights.json'

const sameDayFlightsSearchTerm = {
    originCode: "TLV",
    destinationCode: "LCA",
    departureDay: '18/02/2022',
}


export const searchSameDayFlights = (origin,destination,departureDay) => {
    return flightsDB.filter(flight => {
        return flight.date === departureDay && flight.origin === origin && flight.destination === destination
    })
}


const {originCode, destinationCode, departureDay} = sameDayFlightsSearchTerm

console.log(searchSameDayFlights(originCode, destinationCode, departureDay))