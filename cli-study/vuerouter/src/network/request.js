import axios from "axios";

export default function(config) {
    const instance = axios.create({
        baseURL: "http://10.157.122.165:8108",
        timeout: 50000,
    })

    instance.interceptors.request.use(config => {
        console.log(config);
        return config
    }, err => {
        console.log(err);
        return err
    })

    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
        return err
    })

    return instance(config)
}