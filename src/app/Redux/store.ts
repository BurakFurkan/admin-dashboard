"use client"
import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./Features/clientSlice";
import TeamMemberReducer from "./Features/teamSlice";

export const store = configureStore({
  reducer: {
    clients:clientsReducer,
    team:TeamMemberReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;