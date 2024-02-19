"use client";
import React from "react";
import Link from "next/link";
import { Space, Menu } from "antd";
import "./index.scss";
// icons
import Image from "next/image";
import logo from "../../../assets/image/logo.png";
import {
  MdDashboard,
  MdHome,
  MdTravelExplore,
  MdQueryStats,
} from "react-icons/md";
import { BsCardImage } from "react-icons/bs";

function SideBar(props: any) {
  const { collapsed } = props;
  return (
    <React.Fragment>
      <Menu
        mode="inline"
        defaultSelectedKeys={["home"]}
        className="overflow-y-scroll bg-gray-900 h-screen"
      >
        {/* logo */}
        <div className="bg-gray-900">
          <div className="w-10 h-15 cursor-pointer mx-auto pt-4">
            <Image src={logo} alt="logo" />
          </div>
        </div>
        {/* home */}
        <Menu.Item eventKey="home" title="Home" color="#899dab">
          <Link href="/" passHref>
            <Space size="middle">
              <MdHome />
              {!collapsed && "Home"}
            </Space>
          </Link>
        </Menu.Item>
        {/* dashboard */}
        <Menu.Item
          eventKey="dashboard"
          title="Dashboard"
          color="#899dab"
          className="title-content"
        >
          <Link href="/dashboard" passHref>
            <Space size="middle">
              <MdDashboard />
              {!collapsed && "Dashboard"}
            </Space>
          </Link>
        </Menu.Item>
        {/* explore */}
        <Menu.Item
          eventKey="explore"
          title="Explore"
          color="#899dab"
          className="title-content"
        >
          <Link href="/explore" passHref>
            <Space size="middle">
              <MdTravelExplore />
              {!collapsed && "Explore"}
            </Space>
          </Link>
        </Menu.Item>
        {/* stats */}
        <Menu.Item
          eventKey="stats"
          title="Stats"
          color="#899dab"
          className="title-content"
        >
          <Link href="/stats" passHref>
            <Space size="middle">
              <MdQueryStats />
              {!collapsed && "Stats"}
            </Space>
          </Link>
        </Menu.Item>
        {/* create */}
        <Menu.Item
          eventKey="create"
          title="Create"
          color="#899dab"
          className="title-content"
        >
          <Link href="/create" passHref>
            <Space size="middle">
              <BsCardImage />
              {!collapsed && "Create"}
            </Space>
          </Link>
        </Menu.Item>
      </Menu>
    </React.Fragment>
  );
}

export default SideBar;
