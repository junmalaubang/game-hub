import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fc2050b1704f4ce3803c8858dfc2a57e'
    }
})