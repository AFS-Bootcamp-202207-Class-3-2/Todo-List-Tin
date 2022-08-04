import api from "./api";

export const getTodos = () => {
  return api.get("/todos");
};

export const createTodo = (text) => {
  return api.post("/todos", { text });
};

export const updateTodo = (id, todo) => {
  return api.put("/todos/" + id, todo);
};

export const delTodo = (id) => {
  return api.delete("/todos/" + id);
};

// export const updateTextTodo = (id, text) => {
//   return api.put("/todos/" + id, {text});
// };
