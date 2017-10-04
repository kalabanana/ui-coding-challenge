const defaultState = {
    isNameModalOpen: false,
    isAddressModalOpen: false,
    isTeamsModalOpen: false,
    inputs: ['input-0', 'input-1', 'input-2'],
    name: "John Smith",
    address: "123 Bowl Lane NewYork, NY 10021",
    favoriteTeams: []
};
const axios = require('axios');

const route = "http://localhost:8080/api";


const rootReducer =  (state =defaultState, action) => {
    switch (action.type) {
        case "CHANGE_NAME":
            state = {...state, name: action.payload, isNameModalOpen: false};
            axios.post(route, state).then(function(response) {
            });
            return state;
        case "CHANGE_ADDRESS":
            state = {...state, address: action.payload, isAddressModalOpen: false};
            axios.post(route, state).then(function(response) {
            });
            return state;
        case "OPEN_NAME":
            return {...state, isNameModalOpen: action.payload};
        case "OPEN_ADDRESS":
            return {...state, isAddressModalOpen: action.payload};
        case "OPEN_TEAM":
            return {...state, isTeamsModalOpen: action.payload};
        case "ADD_INPUTS":
            return {...state, inputs: [...state.inputs, action.payload]};
        case "UPDATE_TEAMS":
            axios.post(route, state).then(function(response) {
            });
            return {...state, favoriteTeams: action.payload, isTeamsModalOpen: false};
        default:
            return state;
    }
};

export default rootReducer;