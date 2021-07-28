import {service} from './api';

export const getHeader = async () => await service.get('/header');
export const getFooter = async () => await service.get('/footer');
