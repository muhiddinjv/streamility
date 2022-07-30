// export const editStream = (id, formValues) => async (dispatch) => {
//     const response = await streams.put(`/streams/${id}`, formValues);
//     console.log('response :>> ', response);
//     console.log('formValues :>> ', formValues);
  
//     dispatch({ type: EDIT_STREAM, payload: response.data });
//     history.push('/');
//   };

import { createSlice } from "@reduxjs/toolkit";
// import { deleteStream } from "../actions";

const editStreamSlice = createSlice({
    name: 'editStream',
    initialState: {
        stream_list: {},
    },
    reducers:{
        editStream: (state, action)=>{
            state.stream_list = {...state.stream_list, [action.payload.id]: action.payload}}
        },
        deleteStream: (state, action) => {
            state.stream_list = _.omit(state, action.payload)
        }
    },

})