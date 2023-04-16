import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uresId: null,
  nickName: null,
};

export const authSlice = createSlice({
  // назва редюсера
  name: "auth",
  initialState: initialState,
  reducers: {}, // екшени
});
