const userActions = {};

userActions.setUser = (dispath, data) => {
  dispath({
    type: 'SET_USER',
    value: data,
  });
};
userActions.setUsers = (dispath, data) => {
  dispath({
    type: 'SET_USERS',
    values: data,
  });
};

export default userActions;
