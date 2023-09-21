import commentAction from "../actions/commentAction";
import createComment from "../actions/createCommentAction";

const initialState = {
    comments: [],
    error: null
}

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case commentAction.pending.type:
            return {
                ...state,
                error: null
            };
        case commentAction.fulfilled.type:
            return {
                ...state,
                comments: action.payload.comments,
                error: null
            };
        case commentAction.rejected.type:
            return {
                ...state,
                error: action.payload.error
            };
        case createComment.pending.type:
            return {
                ...state,
                error: null
            };
        case createComment.fulfilled.type:
            return {
                ...state,
                comments: [action.payload.comments].concat(state.comments),
                error: null
            };
        case createComment.rejected.type:
            return {
                ...state,
                error: action.payload.error
            };
        default:
            return state;
    }
}

export default commentReducer;
