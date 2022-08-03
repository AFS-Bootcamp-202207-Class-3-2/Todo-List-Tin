import api from "./api";

export const getTodos = () => {
  return api.get("/todos");
};

export const createTodo = (text) => {
  return api.post("/todos", { text });
};

export const updateTodo = (id, done) => {
  return api.put("/todos/" + id, {done});
};

export const delTodo = (id) => {
    return api.delete("/todos/" + id);
  };