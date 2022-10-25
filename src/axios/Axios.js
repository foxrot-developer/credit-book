import axios from "axios";

const Axios = axios.create({
    baseURL: 'http://13.233.127.235:8888/'
});

Axios.interceptors.request.use((request) => {
    // document.querySelector(".loading-bg").style.display = "block";
    return request;
});

Axios.interceptors.response.use(
    (response) => {
        // document.querySelector(".loading-bg").style.display = "none";
        return response;
    },
    (error) => {
        // document.querySelector(".loading-bg").style.display = "none";
        throw error;
    }
);

export default Axios;