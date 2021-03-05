import axios from "axios";

export default function(config) {
    const instance = axios.create({
        baseURL: "http://10.157.122.165:8108",
        timeout: 50000,
    })

    return instance(config)
}