import { createStore } from "redux";
import React, { Component } from "react";
import slidingImagesReducer from "../reducer/images_reducer";

export const store = createStore(slidingImagesReducer, ["UpdateImages"]);

export default store;

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    console.info("saving state into localStorage");
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (error) {}
};
