const Add_TODO = "Add_TODO";
const Delete_TODO = "Delete_TODO";
export const addtodo = (payload) => ({
  type: Add_TODO,
  payload,
  id: Math.random(),
});
export const deletetodo = (id) => ({
  type: Delete_TODO,
  id,
});
