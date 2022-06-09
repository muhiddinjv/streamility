import _ from "lodash";
import { EDIT_STREAM } from "../actions/types";
import { CREATE_STREAM } from "../actions/types";
import { DELETE_STREAM } from "../actions/types";
import { FETCH_STREAM } from "../actions/types";
import { FETCH_STREAMS } from "../actions/types";

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM: //[action...] is "key interpolation" NOT ARRAY
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_STREAMS:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default streamReducer;
