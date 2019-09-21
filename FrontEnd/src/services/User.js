import { get, post, put } from './Api';

export const login = (params) => post('/login', params);