import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: [],
};
export const addTotal = createAsyncThunk(
  "players/addTotal",
  async (args, thunkAPI) => {
    try {
      let res = await axios.post(
        `http://localhost:8080/api/v1/bowling/calculate`,
        { game: args[0] }
      );
      console.log(res.data[0].totalScore);
      return [args[1], res.data[0].totalScore];
    } catch {}
  }
);

export const counterSlice = createSlice({
  name: "players",
  initialState: {
    players: [],
  },
  reducers: {
    add: (state, action) => {
      state.players.push(action.payload);
    },

    update: (state, action) => {
      state.players[action.payload[0]].score.push(action.payload[1]);
    },
  },
  extraReducers: {
    [addTotal.fulfilled]: (state, action) => {
      state.players[action.payload[0]].total.push(action.payload[1]);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, update } = counterSlice.actions;

export default counterSlice.reducer;
