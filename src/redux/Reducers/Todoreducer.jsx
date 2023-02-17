const initialState = {
  data: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "Add_TODO":
      return {};
    case "Delete_TODO":
      return {};

    default:
      return state;
  }
};

export default todos;
