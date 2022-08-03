import { Menu } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import {
  EditOutlined,
  QuestionOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import "./index.css";

export default function Layout() {
  const menuItems = [
    {
      key: "home",
      icon: <EditOutlined />,
      label: <NavLink to="/">Home</NavLink>,
    },
    {
      key: "help",
      icon: <QuestionOutlined />,
      label: <NavLink to="/help">Help Page</NavLink>,
    },
    {
      key: "done",
      icon: <CheckOutlined />,
      label: <NavLink to="/done">Done Page</NavLink>,
    },
  ];
  return (
    <div>
      <nav>
        <Menu items={menuItems} mode="horizontal" />
      </nav>
      <Outlet />
    </div>
  );
}
