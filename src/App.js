import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import TodoList from "./component/TodoList/TodoList";
import ContactForm from "./component/ContactForm/ContactForm";
import "./styles/style.css";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/todos">Todos</Link>
        <br />
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        {/* Redirect root path to /todos */}
        <Route path="/" element={<Navigate to="/todos" replace />} />

        <Route path="/todos" element={<TodoList />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}
