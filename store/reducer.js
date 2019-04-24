import initialState, {
  requestedNewThread,
  requestedNewThreadSuccess,
  requestedNewThreadError,
  requestedProfile,
  requestedProfileSuccess,
  requestedProfileError,
  changedInput
} from "./states";
import {
  REQUESTED_NEW_THREAD,
  REQUESTED_NEW_THREAD_SUCCESS,
  REQUESTED_NEW_THREAD_ERROR,
  REQUESTED_PROFILE,
  REQUESTED_PROFILE_SUCCESS,
  REQUESTED_PROFILE_ERROR,
  CHANGED_INPUT
} from "./actionTypes";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGED_INPUT: {
      return changedInput(state, action.title, action.name, action.val);
    }
    case REQUESTED_NEW_THREAD: {
      return requestedNewThread(state, action.meta.address);
    }
    case REQUESTED_NEW_THREAD_SUCCESS: {
      return requestedNewThreadSuccess(
        state,
        action.meta.address,
        action.payload.threadId
      );
    }
    case REQUESTED_NEW_THREAD_ERROR: {
      return requestedNewThreadError(state, action.meta.address, action.error);
    }
    case REQUESTED_PROFILE: {
      return requestedProfile(state);
    }
    case REQUESTED_PROFILE_SUCCESS: {
      return requestedProfileSuccess(state, action.payload.profile);
    }
    case REQUESTED_PROFILE_ERROR: {
      return requestedProfileError(state, action.error);
    }
    default:
      return state;
  }
};

export default reducer;
