import { baseCombineActionTypes } from './baseTypes';

export const USER = {
  ...baseCombineActionTypes('LOGIN'),
  ...baseCombineActionTypes('PROFILE'),
  ...baseCombineActionTypes('GET_ALL_USER')
};

export const HOME = {
  ...baseCombineActionTypes('GET_ALL_PRODUCT')
};