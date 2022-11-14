import http from "..http-common";

class UserServiceClass {
  constructor() {}

  getUserByID(googleID) {
    return http.get(`/api/users?id=${googleID}`);
  }

  createUser(user) {
    return http.post("/api/users/create", user);
  }

  updateProfile(id, newProfile) {
    return http.put(`api/users/update/${id}`, newProfile);
  }

  deleteUser(id) {
    return http.delete(`/api/users/deleteById/${id}`);
  }
}

export default new UserServiceClass();
