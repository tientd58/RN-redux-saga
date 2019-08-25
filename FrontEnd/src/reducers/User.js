import { USER } from '../actions/types';

const INITIAL_STATE = {

}

export default User = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER.LOGIN_REQUEST: return state;
    case USER.LOGIN_SUCCESS: return state;
    case USER.LOGIN_FAILURE: return state;
    default: return state;
  }
}