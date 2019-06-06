import axios from 'axios';
axios.defaults.baseURL='https://api.openweathermap.org/data/2.5'

export default {
    get: (zipcode) => {
        return axios.get(`/forecast?zip=${zipcode}&APPID=f9a71cbc3cbf3b66a31131e6fcbe118f&units=imperial&cnt=5`);
    }
}