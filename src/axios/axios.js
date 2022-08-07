import axios from "axios";

const connection = axios.create({
    baseURL: "http://localhost:8080"
});

connection.interceptors.request.use(req => {
    const token = localStorage.getItem('LocalStorageAuthItemTokenKey')
    if(token != null){
        req.headers={'Authorization' : token}
    }
    return req;
})

export default connection;