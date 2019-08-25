import { baseCombineActionTypes } from './baseTypes';

export const USER = {
  ...baseCombineActionTypes('LOGIN'),
  ...baseCombineActionTypes('PROFILE')
};

export const HOME = {
  ...baseCombineActionTypes('GET_ALL_PRODUCT')
};