import axios from "axios";

const configOMB = {
    baseURL: 'https://www.omdbapi.com/',
};
export const key = '?apikey=b4ae785f';
export const axiosInstance = axios.create(configOMB);