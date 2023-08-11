import { DECREMENT, INCREMENT, REMOVE } from "../actions/constant";

const changeTheNumber = (state = [], action) => {
    if (action.type === INCREMENT) {
        return [action.state + 1, ...state];
    }
    if (action.type === DECREMENT) {
        // state.length = state.length ? state.length - 1 : [];
        // return [...state];
        console.log(...state.slice(0,state.length-1));
        const newState = state.length ? [...state.slice(0, state.length - 1)] : [];
        return newState;
    }
    if (action.type === REMOVE) {
        return [];
    }
    return state;
}

export default changeTheNumber;