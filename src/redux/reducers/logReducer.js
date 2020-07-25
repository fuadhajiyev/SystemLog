import * as Action from "../actions/types";

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Action.GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case Action.ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      };
    case Action.DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
        loading: false,
      };
    case Action.UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map((log) =>
          log.id === action.payload.id ? action.payload : log
        ),
      };
    case Action.SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case Action.CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case Action.SEARCH_LOGS:
      return {
        ...state,
        logs: action.payload,
      };
    case Action.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case Action.LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
