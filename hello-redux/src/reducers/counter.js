//カウントの値を制御する
//オブジェクトで制御したいが Error: Objects are not valid as a React child (found: object with keys {}). If you meant to render a collection of children, use an array instead
//新しいオブジェクトを返せばいいみたい。

const initialState = [0, true]
let result = 0;

export default (state = [0, 1], action) => {
    switch (action.type) {
        case 'INCREMENT':
            result = state[0] + action.payload
            return [result, true];
        case 'DECREMENT':
            result = state[0] - action.payload
            return [result, true];
        default:
            return state;
    }
};
