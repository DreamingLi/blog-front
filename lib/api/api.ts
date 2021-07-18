import axios from 'axios';
import {config} from '../../config';
const isDev = process.env.NODE_ENV === 'development';


const service = axios.create({
  baseURL: isDev ? config.backendUrl : '',
});

const serviceWithoutInterceptors = axios.create({
  baseURL: isDev ? config.backendUrl : '',
});

service.interceptors.request.use(
    (config) => {
      console.log(config);
      return config;
    },
);

service.interceptors.response.use(
    (resp) => {
      if (resp.status === 200) {
        return resp.data;
      } else {
        alert(resp);
      }
    },
);

export {service, serviceWithoutInterceptors};
