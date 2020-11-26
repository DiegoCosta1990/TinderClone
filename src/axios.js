import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tinder-react-clone.herokuapp.com"
});

export default instance;