import * as Action from "./types";

//Get logs from Server

export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/logs");
    const data = await res.json();

    dispatch({
      type: Action.GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: Action.LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

//Add new log

export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: Action.ADD_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: Action.LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

//Delete log from Server

export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`/logs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: Action.DELETE_LOG,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: Action.LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

//Update log on server
export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    dispatch({
      type: Action.UPDATE_LOG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: Action.LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

//Search Server log

export const searchLogs = (text) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();

    dispatch({
      type: Action.SEARCH_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: Action.LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

//Set Current log
export const setCurrent = (log) => {
  return {
    type: Action.SET_CURRENT,
    payload: log
  };
};

// Clear Current log
export const clearCurrent = () => {
  return {
    type: Action.CLEAR_CURRENT,
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: Action.SET_LOADING,
  };
};







// export const getLogs = () => {

//   return async (dispatch) => {
//     setLoading();

//     const res = await fetch("/logs");
//     const data = await res.json();

//     dispatch({
//       type: Action.GET_LOGS,
//       payload: data,
//     });
//   };
// };
