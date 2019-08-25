import { USER } from './types';

export const loginRequest = (params) => ({
  type: USER.LOGIN_REQUEST,
  payload: {params},
  cb
});

export const loginSuccess = (res) => ({
  type: USER.LOGIN_SUCCESS,
  payload: {res},
  cb
});

export const loginFailure = (error) => ({
  type: USER.LOGIN_FAILURE,
  payload: {error},
  cb
});