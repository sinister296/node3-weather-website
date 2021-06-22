const request = require('request')

const forecast = (lati, longi, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5e2f6da421013d60616e497dedfc8123&query='+ longi +','+ lati +'&units=m'

    request({ url, json:true }, (error, {body}) =>{
        if(error) {
            callback('Cannot connect to weather services.', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            const data = body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature +' degrees outside. It feels like ' + body.current.feelslike + ' degrees.'
            callback(undefined, data)
        }
    })
}

module.exports = forecast