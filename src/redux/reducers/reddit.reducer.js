export const FETCH_ARTICLES = "FETCH_ARTICLES";
export const SET_NEW_ARTICLES = "SET_NEW_ARTICLES";
export const SET_TOP_ARTICLES = "SET_TOP_ARTICLES";
export const SET_POPULAR_ARTICLES = "SET_POPULAR_ARTICLES";
export const SET_HOT_ARTICLES = "SET_HOT_ARTICLES";

const INITIAL_STATE = {
  new: {
    data: {
      children: [],
    },
  },
  top: {
    data: {
      children: [],
    },
  },
  popular: {
    data: {
      children: [],
    },
  },
  hot: {
    data: {
      children: [],
    },
  },
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return {
        ...state,
        isLoading: true,
      };
    case SET_NEW_ARTICLES:
      return {
        ...state,
        new: action.payload,
        isLoading: false,
      };
    case SET_TOP_ARTICLES:
      return {
        ...state,
        top: action.payload,
        isLoading: false,
      };
    case SET_POPULAR_ARTICLES:
      return {
        ...state,
        popular: action.payload,
        isLoading: false,
      };
    case SET_HOT_ARTICLES:
      return {
        ...state,
        hot: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
