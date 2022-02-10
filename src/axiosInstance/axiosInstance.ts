import axios from "axios";

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
export const key = '?apikey=b4ae785f';
export const axiosInstance = axios.create(configOMB);