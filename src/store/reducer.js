  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "GET_COMMENT":
        state.data = action.payload.data
        return {
          ...state,
        };
      case "ADD_NEW_COMMENT":
        return {
          ...state,
          data: [action.payload.newComment, ...state.data]
        };
      case "GET_COMMENTS_SUCCESS":
        return {
          ...state,
          data: action.payload,
          isLoading: false
        };
      case "GET_COMMENTS_ERROR":
        return {
          ...state,
          error: action.payload,
          isLoading: false
        };
      default:
        return state;
    }
  };
  