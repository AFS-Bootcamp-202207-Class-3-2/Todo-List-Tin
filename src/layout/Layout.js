import { Menu } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { EditOutlined, QuestionOutlined, CheckOutlined} from '@ant-design/icons';
import "./index.css";

export default function Layout() {
  return (
    <div>
      <nav>
        <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
          <Menu.Item key="home" icon={<EditOutlined />}>
            <NavLink to="/">
              Home
            </NavLink>
          </Menu.Item>
          <Menu.Item key="help" icon={<QuestionOutlined />}>
            <NavLink  to="/help">
              Help Page
            </NavLink>
          </Menu.Item>
          <Menu.Item key="done" icon={<CheckOutlined />}>
            <NavLink  to="/done">
              Done Page
            </NavLink>
          </Menu.Item>
        </Menu>
      </nav>
      <Outlet />
    </div>
  );
}
