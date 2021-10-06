import axios, { AxiosInstance } from 'axios';

const httpAxios: () => AxiosInstance = (keyJWT: any = undefined) => {
  const axiosCreate = axios.create({
    baseURL: 'https://yts.mx',
    headers: {
      // keyJWT : Authorization: 'bearer accessKey' ?
    },
  });
  return axiosCreate;
};

export default httpAxios;
