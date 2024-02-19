"use client";
import React from "react";
import { Input } from "antd";
import "./index.scss";
import { FaWallet } from "react-icons/fa";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import useMediaQuery from "../../../utils/hook/useMediaquery";
import { useAppDispatch } from "../../../config/store";
import { toggleMenu } from "../../../redux/layout/sidebar/slice";

const { Search } = Input;
function Header(props: any) {
  const { collapsed } = props;
  const dispatch = useAppDispatch();
  const isTablet = useMediaQuery("(max-width: 768px)");

  const openDrawer = () => {
    dispatch(toggleMenu());
  };

  // search
  const onSearch = (value: any) => console.log(value);

  // collapse menu
  const collapsedMenu = collapsed ? (
    <MenuUnfoldOutlined />
  ) : (
    <MenuFoldOutlined />
  );

  return (
    <div className="flex p-[10px] flex-col md:flex-row w-full md:justify-between md:items-center items-end gap-[10px]">
      <Search
        placeholder="Search Collections ...."
        onSearch={onSearch}
        className="md:w-2/4 search-btn"
      />
      <div
        className="text-white text-lg leading-16 cursor-pointer transition-colors duration-300 hover:text-blue-500"
        onClick={() => props.onClickMenu(!collapsed)}
      >
        {isTablet && collapsedMenu}
      </div>
      {!isTablet && (
        <FaWallet onClick={openDrawer} className="text-white text-lg" />
      )}
    </div>
  );
}

export default Header;
