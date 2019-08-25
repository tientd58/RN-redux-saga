import axios from 'axios';

import { Storage, StorageKey } from '../modules/utils/storage';

const instanceClient = async () => {
  const token = await Storage.get(StorageKey.AuthToken);
  
  const instance = axios.create({
    baseURL: '',
    headers: {
      'Authorization': token ? `Bearer ${token}` : ''
    }
  });

  return instance;
};

export const get = async (pathUrl, params = {}) => {
  const mergeParams = { params };
  const client = await instanceClient.get(pathUrl, params);
  return client;
};

export const post = async (pathUrl, data = {}) => {
  const client = await instanceClient.post(pathUrl, data);
  return client;
};

export const put = async (pathUrl, data = {}) => {
  const client = await instanceClient.put(pathUrl, data);
  return client;
};

export const delete = async (pathUrl, data = {}) => {
  const client = await instanceClient.delete(pathUrl, data);
  return client;
};
