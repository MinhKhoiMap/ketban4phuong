import { CREATE_USER, RETRIEVE_USER, UPDATE_USER, DELETE_USER } from "./types";
import UserService from "../../services/users.service";

const getUser = (id) => async (dispatch) => {
  try {
    const response = await UserService.getUser(id);

    dispatch({
      type: RETRIEVE_USER,
      payload: response,
    });
  } catch (err) {
    console.log(err);
  }
};

const createUser = (user) => async (dispatch) => {
  try {
    const response = await UserService.createUser(user);

    dispatch({
      type: CREATE_USER,
      payload: user,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateProfile = (newProfile) => async (dispatch) => {
  try {
    const response = await UserService.updateProfile(newProfile.googleID, newProfile);

    dispatch({ type: UPDATE_USER, payload: newProfile });
  } catch (err) {
    console.log(err);
  }
};
