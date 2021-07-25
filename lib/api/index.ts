import {service} from './api';


export const getNav = async () => await service.get('/header');
