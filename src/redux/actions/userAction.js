const addUser = (userObject) => {
  return {
    type: "ADD_USER",
    payload: userObject,
  };
};

const deleteUser = (email) => {
  return {
    type: "DELETE_USER",
    payload: email,
  };
};

const addNumber = (userObject) => {
  return {
    type: "ADD_NUMBER",
    payload: userObject,
  };
};

const deleteNumber = (userObject) => {
  return {
    type: "DELETE_NUMBER",
    payload: userObject,
  };
};

export default { addUser, deleteUser, addNumber, deleteNumber};
