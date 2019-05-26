// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

import { createStore } from "redux";

function playlist(state = [], action) {
  if (action.type === "ADD_TRACK") {
    return [...state, action.payload];
  }
  return state;
}

const store = createStore(playlist);

const addTrackBtn = document.querySelector(".addTrack");
const trackInput = document.querySelector(".trackInput");
const list = document.querySelector(".list");

store.subscribe(() => {
  list.innerHTML = "";
  trackInput.value = "";

  store.getState().forEach(track => {
    const li = document.createElement("li");
    li.textContent = track;
    list.appendChild(li);
  });
});

addTrackBtn.addEventListener("click", () => {
  const trackName = trackInput.value;
  store.dispatch({ type: "ADD_TRACK", payload: trackName });
});
