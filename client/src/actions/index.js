import streams from "../apis/streams";
// import history from '../history';

import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post("/streams", {...formValues, userId});

  dispatch({ type: CREATE_STREAM, payload: response.data });
  // history.push('/');//get the user back to the root route
};

export const fetchStreams = (formValues) => async (dispatch) => {
  const response = await streams.get("/streams", formValues);
  
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.put(`/streams/${id}`, formValues);
  // console.log('response :>> ', response);
  // console.log('formValues :>> ', formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
  // history.push('/');
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);
  
  dispatch({ type: DELETE_STREAM, payload: id });
};

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
