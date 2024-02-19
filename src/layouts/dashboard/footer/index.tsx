"use client";
import { Layout } from "antd";
const { Footer: FooterAntd } = Layout;

function Footer() {
  return (
    <FooterAntd className="p-0 bg-gray-900 flex-shrink-0 flex-grow-0">
      <div className="text-white p-[20px]">Footer</div>
    </FooterAntd>
  );
}

export default Footer;
