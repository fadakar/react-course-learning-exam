import {BASE_API_URL} from "../enviroment";
import axios from "axios";

const Api = axios.create({
    baseURL: BASE_API_URL,
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default Api;