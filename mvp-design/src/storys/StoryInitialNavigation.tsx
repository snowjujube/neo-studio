import InitialNavigation from "../component/InitialNavigation";
import * as React from "react";

const props: InitialNavigationProps = {
  title: "NEO设计工作室",
  headerLink: "#",
  weiboLink: "#",
  contactLink: "#",
  list: [
    {
      title: "设计作品",
      src: "#"
    },
    {
      title: "音乐作品",
      src: "#"
    },
    {
      title: "项目合作",
      src: "#"
    }
  ]
};

const notes = {
  markdown: `
   # InitialNavigation - 通用Header导航组件
   ## Props
   - title：导航title
   - headerLink：title hyperlink source
   - weiboLink：微博Icon跳转link
   - contactLink：右下角Contact部分跳转地址
   - list：导航列表 - 不超过三个
   
    - title：当前项title
    - src：当前项跳转路径
  `
};

export default function f(stories: any) {
  stories.add("InitialNavigation", () => <InitialNavigation {...props} />, {
    notes
  });
}
