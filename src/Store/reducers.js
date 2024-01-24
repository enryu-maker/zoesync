const initialState = {
    access: null,
    room: null,
    clean: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                access: action.payload,
            };
        case "ROOM":
            return {
                ...state,
                room: action.payload,
            };
        default:
            return state;
    }
}