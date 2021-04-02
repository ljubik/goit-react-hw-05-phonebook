const init = [
  { id: "",  name:"", tel:"" },
];

const allUsersReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_USER":
      const newS = [...state, payload];
      console.log("ADD_USER", newS);
      return newS;

    case "DELETE_USER":
      const newSt = state.filter((elem) => elem.email !== payload);
      console.log(newSt);
      return newSt;

    case "ADD_NUMBER":
      const newAddN = [...state, payload];
      console.log("ADD_NUMBER", newAddN);
      return newAddN;

    case "DELETE_NUMBER":
      const newDelN = state.filter((elem) => elem.id !== payload);
      console.log("DELETE_NUMBER", newDelN);
      return newDelN; 
  
    default:
      return state;
  }
};

export default allUsersReducer;
