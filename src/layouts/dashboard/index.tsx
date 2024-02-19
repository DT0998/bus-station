"use client";
import React, { useState } from "react";
import "./index.scss";
import SideBar from "./sidebar";
import { Layout } from "antd";
import HeaderMenu from "./header";
import MyWallet from "../../components/MyWallet";
import Footer from "./footer";

const { Header, Sider, Content } = Layout;

function DashboardLayout(props: any) {
  const { children } = props;
  const [collapsed, setCollapsed] = useState(false);
  const [collapsedWidth, setCollapsedWidth] = useState<number>(0);
  const [trigger, setTrigger] = useState<null | string>(null);

  const onBreakpointCollapsed = (broken: any) => {
    setCollapsedWidth(broken ? 0 : 70);
    setTrigger(broken ? null : "");
  };

  const onCollapse = (value: any) => {
    setCollapsed(value);
  };

  return (
    <React.Fragment>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsible
          collapsedWidth={collapsedWidth || undefined}
          onBreakpoint={onBreakpointCollapsed}
          onCollapse={onCollapse}
          collapsed={collapsed}
          trigger={trigger}
          className="p-0"
        >
          <SideBar collapsed={collapsed} />
        </Sider>
        <Layout>
          <div className="sticky top-0">
            <Header className="header flex items-center">
              <HeaderMenu collapsed={collapsed} onClickMenu={setCollapsed} />
            </Header>
          </div>
          <MyWallet />
          <Content className="content p-8 text-white flex-grow">{children}</Content>
          <Footer />
        </Layout>
      </Layout>
    </React.Fragment>
  );
}
export default DashboardLayout;
