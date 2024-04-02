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
  const menuItems = [
    {
      key: "home",
      title: "Home",
      className: "title-content",
      label: (
        <Link href="/" passHref>
          <Space size="middle">
            <MdHome />
            {!collapsed && "Home"}
          </Space>
        </Link>
      ),
    },
    {
      key: "dashboard",
      title: "Dashboard",
      className: "title-content",
      label: (
        <Link href="/dashboard" passHref>
          <Space size="middle">
            <MdDashboard />
            {!collapsed && "Dashboard"}
          </Space>
        </Link>
      ),
    },
    {
      key: "explore",
      title: "Explore",
      className: "title-content",
      label: (
        <Link href="/explore" passHref>
          <Space size="middle">
            <MdTravelExplore />
            {!collapsed && "Explore"}
          </Space>
        </Link>
      ),
    },
    {
      key: "stats",
      title: "Stats",
      className: "title-content",
      label: (
        <Link href="/stats" passHref>
          <Space size="middle">
            <MdQueryStats />
            {!collapsed && "Stats"}
          </Space>
        </Link>
      ),
    },
    {
      key: "create",
      title: "Create",
      className: "title-content",
      label: (
        <Link href="/create" passHref>
          <Space size="middle">
            <BsCardImage />
            {!collapsed && "Create"}
          </Space>
        </Link>
      ),
    },
  ];
  return (
    <React.Fragment>
      {/* logo */}
      <div className="w-10 h-15 cursor-pointer mx-auto pt-4">
        <Image src={logo} alt="logo" />
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["home"]}
        className="overflow-y-scroll h-screen"
        items={menuItems}
        theme="dark"
      />
    </React.Fragment>
  );
}

export default SideBar;
