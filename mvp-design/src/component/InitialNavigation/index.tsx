import React from "react";
import "./index.scss";
import copyright from "./assets/copyright.svg";
import name from "./assets/name.png";
import cube from "./assets/neon-cube.png";
import weibo from "./assets/weibo.svg";

class InitialNavigation extends React.Component<InitialNavigationProps> {
  static defaultProps = {
    title: "NEOTAPE",
    headerLink: "xxx",
    weiboLink: "xxx",
    contactLink: "xxx",
    list: [
      {
        title: "首页",
        src: "xxx"
      }
    ]
  };

  readonly state = {
    open: false
  };

  constructor(props: Readonly<InitialNavigationProps>) {
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
    const { title, headerLink, weiboLink, contactLink, list } = this.props;
    return (
      <div className="initial-navigation">
        <header id="head" className={open ? "open" : ""}>
          <div className="common">
            <span className="ly-flex">
              <div className="side">
                <img src={copyright} alt="C" />
              </div>
              <div className="main">
                <a href={headerLink}>{title}</a>
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
                    {list.map((item, index) => (
                      <li key={index + item.title}>
                        <a
                          className={
                            open
                              ? `fade-in fade-nav fade-delay0${index + 1}`
                              : `fade-nav fade-delay0${index + 1}`
                          }
                          href={item.src}
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
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
                    <a href={weiboLink}>
                      <img
                        src={weibo}
                        style={{
                          width: "1.5rem",
                          height: "1.5rem"
                        }}
                        alt="Weibo"
                      />
                    </a>
                  </li>
                  <li>
                    <a href={contactLink}>contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <span
            onClick={this.toggle.bind(this)}
            className={open ? "open" : ""}
            id="hamburger"
          >
            {/*查看详情btn*/}
          </span>
        </header>
        <span onClick={this.toggle.bind(this)} className="mask">
          {/*蒙层mask*/}
        </span>
      </div>
    );
  }
}

export default InitialNavigation;
