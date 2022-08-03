import { Link, NavLink, Outlet } from "react-router-dom";
import "./index.css";

export default function Layout() {
  return (
    <div>
      <nav>
        <NavLink activeclassname="active" className="nav" to="/">
          Home
        </NavLink>
        <NavLink className="nav" to="/help">
          Help Page
        </NavLink>
        <NavLink className="nav" to="/done">
          Done Page
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
