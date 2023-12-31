import React, { forwardRef } from "react";
import classes from "./sidebar.module.css";
import Link from "next/link";
import { Space, Menu } from "antd";
// icons
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import {
  MdDashboard,
  MdHome,
  MdTravelExplore,
  MdQueryStats,
} from "react-icons/md";
import { BsCardImage } from "react-icons/bs";

function SideBar(props, ref) {
  const { collapsed } = props;
  return (
    <React.Fragment>
      <Menu
        mode="inline"
        defaultSelectedKeys="home"
        className={classes.sidebar}
      >
        {/* logo */}
        <div className={classes.logo_container}>
          <div className={classes.logo}>
            <Image src={logo} alt="logo" />
          </div>
        </div>
        {/* home */}
        <Menu.Item eventKey="home" ref={ref} title="Home" color="#899dab">
          <Link href="/" passHref>
            <a>
              <Space size="middle">
                <MdHome />
                {!collapsed && "Home"}
              </Space>
            </a>
          </Link>
        </Menu.Item>
        {/* dashboard */}
        <Menu.Item eventKey="dashboard" ref={ref} title="Dashboard">
          <Link href="/dashboard" passHref>
            <a>
              <Space size="middle">
                <MdDashboard />
                {!collapsed && "Dashboard"}
              </Space>
            </a>
          </Link>
        </Menu.Item>
        {/* explore */}
        <Menu.Item eventKey="explore" ref={ref} title="Explore">
          <Link href="/explore" passHref>
            <a>
              <Space size="middle">
                <MdTravelExplore />
                {!collapsed && "Explore"}
              </Space>
            </a>
          </Link>
        </Menu.Item>
        {/* stats */}
        <Menu.Item eventKey="stats" ref={ref} title="Stats">
          <Link href="/stats" passHref>
            <a>
              <Space size="middle">
                <MdQueryStats />
                {!collapsed && "Stats"}
              </Space>
            </a>
          </Link>
        </Menu.Item>
        {/* create */}
        <Menu.Item eventKey="create" ref={ref} title="Create">
          <Link href="/create" passHref>
            <a>
              <Space size="middle">
                <BsCardImage />
                {!collapsed && "Create"}
              </Space>
            </a>
          </Link>
        </Menu.Item>
      </Menu>
    </React.Fragment>
  );
}

export default forwardRef(SideBar);
