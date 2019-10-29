interface InitialNavigationProps {
  title: string; // 网站标题
  headerLink: string; // 头部link跳转地址
  weiboLink: string; // 微博地址
  contactLink: string; // 联系方式地址
  list: {
    title: string;
    src: string;
  }[];
}
