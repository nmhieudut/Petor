export const AuthServices = {
  login(username, password) {
    const userPayload = {
      username,
      password,
    };
    return null;
  },
  register(displayName, username, password) {
    const userPayload = {
      displayName,
      username,
      password,
    };
    return null;
  },
  getCurrentUser() {
    return null;
  },
};
