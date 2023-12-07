import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Button, Layout, Menu, MenuProps, Space } from "antd";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  LoginOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PauseCircleOutlined,
  SnippetsFilled,
} from "@ant-design/icons";

import "./App.css";

import { isLoginSelector } from "./app/auth/authSelectors.ts";

const { Header, Footer, Sider, Content } = Layout;

import { axiosInstance } from "./utils/axios";

const headerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#fff",
  height: 64,
  paddingInline: 15,
  backgroundColor: "#7dbcea",
};

const contentStyle: React.CSSProperties = {
  backgroundColor: "#108ee9",
};

const siderStyle: React.CSSProperties = {
  color: "#fff",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group",
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Processing", "1", <ClockCircleOutlined />),
  getItem("Delay", "2", <PauseCircleOutlined />),
  getItem("Ready", "3", <CheckCircleOutlined />),
  getItem("Cancel", "3", <CloseCircleOutlined />),
];

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const isLogin = useSelector(isLoginSelector);

  console.log(collapsed, "collapsed");

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    axiosInstance.get("/");
  }, []);

  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Header style={headerStyle}>
        <Space align="center"></Space>
        <Button type="text" icon={<SnippetsFilled />}>
          Notes
        </Button>
        <Space align="center">
          {isLogin ? (
            <Button icon={<LogoutOutlined />}>Logout</Button>
          ) : (
            <>
              <a href={"/auth/google"}>Login With Google</a>
              <Button icon={<LoginOutlined />}>Login</Button>
            </>
          )}
        </Space>
      </Header>
      <Layout>
        <Sider style={siderStyle} collapsed={collapsed}>
          <Button
            type="primary"
            onClick={toggleCollapsed}
            style={{ margin: 16 }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="dark"
            items={items}
          />
        </Sider>
        <Content style={contentStyle}>Content</Content>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
}

export default App;
