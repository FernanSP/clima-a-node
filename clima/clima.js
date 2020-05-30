const axios = require('axios');
const API_KEY_WEATHER = require('../API_KEYS/keys').getAPIKeys('API_KEY_WEATHER');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY_WEATHER}&units=metric`);

    return resp.data.main.temp;
}



module.exports = {
    getClima
}