import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    hotelDetail: {},
    typeRoom: [],
    typeRoomDetail:{}
};

export const hotelsSlice = createSlice({
    name: "hotels",
    initialState,
    reducers: {
        setHotelReserva: (state, action) => {
            state.hotelDetail = action.payload; // Actualiza el estado con los países obtenidos
        },
        setTypeRoom:(state, action) => {
            state.typeRoom = action.payload;  
    },
        setTypeRoomDetail:(state, action) => {
            state.typeRoomDetail = action.payload;  
    }
}
})


export const typeRoom =  (userId) => async (dispatch) => {
    const {data} = await axios.get(`https://backendfindhotel-dev.fl0.io/roomType/user/${userId}`)
    dispatch(setTypeRoom(data))
}



export const { setHotelReserva, setTypeRoom, setTypeRoomDetail} = hotelsSlice.actions;

export default hotelsSlice.reducer;

