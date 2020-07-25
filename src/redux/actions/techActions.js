import * as Action from "./types";

//Get Techs from Server
export const getTechs = () => async (dispatch) => {

  try {

    setLoading();
    const res = await fetch("/techs");
    const data = await res.json();

    dispatch({
      type: Action.GET_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: Action.TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// add tecnician to server
export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: Action.ADD_TECH,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: Action.TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//  delete tech
export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/techs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: Action.DELETE_TECH,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: Action.TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: Action.SET_LOADING,
  };
};
