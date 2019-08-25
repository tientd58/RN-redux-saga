import { get, post, put, delete } from './Api';

export const login = (params) => post('/login', params);