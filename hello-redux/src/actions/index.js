export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT'

export const increment = nr => {
    return {
        type: INCREMENT,
        payload: nr
    }
}

export const decrement = nr => {
    return {
        type: DECREMENT,
        payload: nr
    }
}
