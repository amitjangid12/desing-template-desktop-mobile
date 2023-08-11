import { DECREMENT, INCREMENT, REMOVE } from "./constant"

export const increment = (data) => {
    console.log(data);
    return {
        type: INCREMENT,
        data
    }

}

export const decrement = (data) => {
    console.log(data);

    return {
        type: DECREMENT,
        data
    }

}

export const removeAllProduct = () => {

    return {
        type: REMOVE
    }
}