import React, { DOMElement } from "react";
import "./index.scss";
import copyright from "./assets/copyright.svg";
import name from "./assets/name.png";
import cube from "./assets/neon-cube.png";
import weibo from "./assets/weibo.svg";

export default class Navigation1 extends React.Component {
  readonly state = {
    open: false
  };

  constructor(props: any) {
    super(props);
  }

  // 导航菜单旋转反向
  toggle(): void {
    const { open } = this.state;
    this.setState({
      open: !open
    });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <header id="head" className={open ? "open" : ""}>
          <div className="common">
            <span className="ly-flex">
              <div className="side">
                <img src={copyright} alt="C" />
              </div>
              <div className="main">
                <a href="http://neotape.live/">NEOTAPE.LIVE</a>
              </div>
            </span>
          </div>
          <div className="toggle js-toggle">
            <div className="top">
              <div className="side">
                <img
                  src={name}
                  width="30"
                  alt="Copyright. NEOTAPE.LIVE INC. All Rights Reserved."
                />
              </div>
              <div className="main">
                <nav>
                  <ul>
                    <li>
                      <a
                        className={
                          open
                            ? `fade-in fade-nav fade-delay01`
                            : "fade-nav fade-delay01"
                        }
                        href="#"
                      >
                        时间表
                      </a>
                    </li>
                    <li>
                      <a
                        className={
                          open
                            ? `fade-in fade-nav fade-delay02`
                            : "fade-nav fade-delay02"
                        }
                        href="#"
                      >
                        成员
                      </a>
                    </li>
                    <li>
                      <a
                        className={
                          open
                            ? `fade-in fade-nav fade-delay03`
                            : "fade-nav fade-delay03"
                        }
                        href="#"
                      >
                        合作
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div
              className={
                open
                  ? "bottom fade-nav fade-delayBtm fade-in"
                  : "bottom fade-nav fade-delayBtm"
              }
            >
              <figure>
                <a href="#" target="_blank">
                  <img src={cube} alt="Our Latest Number" />
                </a>
              </figure>
              <nav>
                <ul>
                  <li>
                    <a href="#">
                      <img
                        src={weibo}
                        style={{
                          width: ".4rem",
                          height: ".4rem"
                        }}
                        alt="Weibo"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <span
            onClick={this.toggle}
            className={open ? "open" : ""}
            id="hamburger"
          ></span>
        </header>
        <span onClick={this.toggle} className="mask"></span>
      </div>
    );
  }
}
