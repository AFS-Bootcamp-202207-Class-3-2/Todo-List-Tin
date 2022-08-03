import { Route, Routes } from "react-router-dom";
import "./App.css";
import TodoDoneList from "./features/todoList/TodoDoneList";
import TodoList from "./features/todoList/TodoList";
import Layout from "./layout/Layout";
import HelpPage from "./pages/HelpPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TodoList />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/done" element={<TodoDoneList />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
