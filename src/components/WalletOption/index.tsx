"use client";
import React from "react";
import classes from "./WalletOption.module.css";
import { Row, Col } from "antd";
import { Spin } from "antd";
import Image from "next/image";
// icons
import metamask from "../../assets/image/WalletOption/metamask-alternative.png";

function WalletOption() {
  return (
    <React.Fragment>
      <Row align="middle">
        <li className={`${classes.btn_wallet} ${classes.btn_walletfirst}`}>
          <Col>
            <div className={classes.wallet_connect}>
              <div className={classes.logo}>
                <Image src={metamask} alt="metamask" />
              </div>
              Metamask
            </div>
          </Col>
          <Col className={classes.col}>
            <div className={classes.network}>Popular</div>
            <Spin size="small" />
          </Col>
        </li>
      </Row>
      <Row align="middle">
        <li className={classes.btn_wallet}>
          <Col>
            <div>logo Metamask</div>
          </Col>
          <Col>Popular</Col>
        </li>
      </Row>
      <Row align="middle">
        <li className={classes.btn_wallet}>
          <Col>
            <div>logo Metamask</div>
          </Col>
          <Col>Popular</Col>
        </li>
      </Row>
      <Row justify="center">
        <li className={`${classes.btn_showmore} ${classes.btn_walletlast}`}>
          <Col>
            <div>Show more options</div>
          </Col>
        </li>
      </Row>
    </React.Fragment>
  );
}

export default WalletOption;
