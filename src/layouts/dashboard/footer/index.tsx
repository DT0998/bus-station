"use client";
import { Layout } from "antd";
const { Footer: FooterAntd } = Layout;

function Footer() {
  return (
    <FooterAntd
      className="p-0 flex-shrink-0 flex-grow-0"
      style={{ background: "#0e1217" }}
    >
      <div className="text-white p-[20px]">Footer</div>
    </FooterAntd>
  );
}

export default Footer;
