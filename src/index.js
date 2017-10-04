import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import person from "./reducers";
import App from "./components/Person";
import style from './index.css';

const store = createStore(person);

const render = () =>
    ReactDOM.render(
        <App
            person={store.getState()}
            changeName={name => store.dispatch({ type: "CHANGE_NAME", payload: name })} //add name action creater
            changeAddress={address =>
                store.dispatch({ type: "CHANGE_ADDRESS", payload: address })} //add college action creater
            openNameModal={() => store.dispatch({ type: "OPEN_NAME", payload: true })}
            closeNameModal={() =>
                store.dispatch({ type: "OPEN_NAME", payload: false })}
            openAddressModal={() =>
                store.dispatch({ type: "OPEN_ADDRESS", payload: true })}
            closeAddressModal={() =>
                store.dispatch({ type: "OPEN_ADDRESS", payload: false })}
            openTeamsModal={() =>
                store.dispatch({ type: "OPEN_TEAM", payload: true })}
            closeTeamsModal={() =>
                store.dispatch({ type: "OPEN_TEAM", payload: false })}
            addInputs={ newInput =>
                store.dispatch({ type: "ADD_INPUTS", payload: newInput})
            }
            updateTeam = { teams =>
                store.dispatch({type: "UPDATE_TEAMS", payload: teams})
            }
        />,
        document.getElementById("root")
    );

render();
store.subscribe(render);
