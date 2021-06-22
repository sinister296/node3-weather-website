const request = require('request')
const chalk = require('chalk')


const geocode = (address, callback) =>{
    const url= 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoibmFtYW42MjkiLCJhIjoiY2twcXV4MTZzMDI4aTJvbW5kanVqOHAxYSJ9.XunH31buR6lT6MlFZ-AmWg&limit=1'
    request({ url: url, json:true}, (error, { body } = {}) => {
        if(error) {
            callback('Cannot connect to location services.', undefined)
        } else if (body.features.length === 0){
            callback('Cannot find the location. Try another search.', undefined)
        } else {
            const location= body.features[0].place_name
            const latitude= body.features[0].center[0]
            const longitude= body.features[0].center[1]
            const data = {
                location,
                longitude,
                latitude
            }
            callback(undefined, data)
        }
    })

}

module.exports = geocode