  
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
      default:
        return state;
    }
  };
  