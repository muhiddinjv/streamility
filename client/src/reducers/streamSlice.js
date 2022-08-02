import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const streamSlice = createSlice({
    name: 'streamSlice',
    initialState: {
        stream_list: {}
    },
    
    reducers: {
        fetchStream(state, action){
            state.stream_list = {...state.stream_list, [action.payload.id]: action.payload}
        },

        createStream: (state, action) => {
            state.stream_list = {...state.stream_list, [action.payload.id]: action.payload}
        },
        
        editStream: (state, action) => {
            state.stream_list = {...state.stream_list, [action.payload.id]: action.payload}
        },
        
        deleteStream(state, action){
            state.stream_list = _.omit(state, action.payload)
        }
    }
});

export const {fetchStream, createStream, editStream, deleteStream} = streamSlice.actions;

export default streamSlice.reducer