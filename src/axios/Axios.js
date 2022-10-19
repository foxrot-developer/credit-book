import axios from "axios";

const Axios = axios.create({
    baseURL: 'http://3.110.106.192:8888/'
});

Axios.interceptors.request.use((request) => {
    document.querySelector(".loading-bg").style.display = "block";
    return request;
});

Axios.interceptors.response.use(
    (response) => {
        document.querySelector(".loading-bg").style.display = "none";

        return response;
    },
    (error) => {
        document.querySelector(".loading-bg").style.display = "none";
        throw error;
    }
);

export default Axios;