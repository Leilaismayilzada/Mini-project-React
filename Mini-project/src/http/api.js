import axios from "axios"
const AxiosInstance = axios.create({
    baseURL:"http://localhost:1337/api/",
    timeout:3000
});


export const getAPIData = async (url, ...config) => {
    return await AxiosInstance.get(url, ...config).then((res) => res?.data?.data);
  };

  export const getAPIbyID = async (url, id) => {
    const response =await AxiosInstance.get(`${url}/${id}`)
    return response.data
  };
  
  