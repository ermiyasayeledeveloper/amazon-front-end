import axios from 'axios'

const axiosInstance = axios.create({
//local instance
   // baseURL: "http://127.0.0.1:5001/alone-fa57b/us-central1/api"
   //deployed
   baseURL: "https://amazon-api-deploy-tjf3.onrender.com"

})

export {axiosInstance}