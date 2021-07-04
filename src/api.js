import axios from 'axios';

const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params:{
        key:'AIzaSyBslrqetKbUsMwUJ-r7yWibK2LH5cfxkuQ',
    }
})

//'AIzaSyAPk1c2M2kVKkKmkXx1N5QY-MqE-E_qULM'
export default request;