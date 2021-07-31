import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'https://book.alitechbot.uz/api',
    timeout: 20000,
    timeoutErrorMessage: 'Connection is lost. Server not responded'
})

export default axios;