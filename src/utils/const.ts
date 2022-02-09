export const themes = [
  {
    id: "default",
    defaultColor: "#39393a",
    name: "默认（秋风同款）",
    src: "https://s3.qiufeng.blue/muji/1616691252491.jpg",
    isColor: true,
    defaultUrl: "https://s3.qiufeng.blue/muji/template/template1.pdf",
  },
  {
    id: "blue",
    defaultColor: "#5974D4",
    name: "极简色",
    src: "https://s3.qiufeng.blue/muji/1616691336866.jpg",
    isColor: true,
    defaultUrl: "https://s3.qiufeng.blue/muji/template/template2.pdf",
  },
  {
    id: "orange",
    defaultColor: "#39393a",
    name: "朝阳黄",
    src: "https://s3.qiufeng.blue/muji/1616691364694.jpg",
    isColor: false,
    defaultUrl: "https://s3.qiufeng.blue/muji/template/template3.pdf",
  },
  // {
  //   id: "pupple",
  //   defaultColor: "#36448f",
  //   name: "全彩风",
  //   src: "https://s3.qiufeng.blue/muji/WechatIMG2705.jpg",
  //   isColor: true,
  //   defaultUrl: 'https://s3.qiufeng.blue/muji/template/template4.pdf',
  // },
];

export const LOCAL_STORE = {
  MD_RESUME: "md-resume",
  MD_COUNT: "md-count",
  MD_THEME: "md-theme",
  MD_COLOR: "md-color",
  MD_THEME_LIST: "md-theme-list",
  MD_UPDATE_LOG: "md-update-log",
  MD_HISTORY: "md-history",
};

export const INIT_COLOR =
  localStorage.getItem(LOCAL_STORE.MD_COLOR) || "#39393a";

document.body.style.setProperty("--bg", INIT_COLOR);

export const UPDATE_LOG_VERSION = 4;

export const TUTORIALS_GUIDE = `
## 1.标题层级该怎么写？

简历生成可以写出很多漂亮的主题简历，但是同时我们也 Markdown 扩展了一些额外的解析规则，因此也会对写法有一定的规范。

建议在写简历过程中，使用**一级标题**来写在开头，常用来描述整体的主旨与标题，常用的就是，求职者的姓名 + 求职岗位的模式

例如: 

\\# 秋风 - 前端工程师

这样不仅能能让面试官一眼就看到你这份简历的用途，因为在实际过程中，有很多同学没有很好地注明投递的方向，很容易造成投递方向错误。

在写内容过程中，建议使用**二级标题**来写。

例如: 

\\## 教育背景 

\\## 工作经验

\\## 项目经验

\\## 基础技能

![1615716349000](https://s3.qiufeng.blue/blog/1615716349000.jpg)



## 2.如何写左右结构？
由于在 Markdown 中直接写左右结构比较困难，因此我们扩展了 Markdown 的基础语法。这个抒写语法，对于 Markdown 重度使用者也不是什么高级的语法， VuePress、React官网等各大社区网站中都有用到。

示例:

![WechatIMG30782](https://s3.qiufeng.blue/blog/WechatIMG30782.png)


## 3.换主题颜色？

在部分模板中，你可以通过更换自己所喜欢的主题色。

点击预览的右上方按钮，可以进行更换主题色景。

![1615716042526](https://s3.qiufeng.blue/blog/1615716042526.jpg)

注意，只有标记可换色的模板才可以进行更换主题色。

![1615716378016](https://s3.qiufeng.blue/blog/1615716378016.jpg)


## 4.遇到生成失败问题

建议重新点击导出 pdf，如果遇到 5 次以上可不使用，建议咨询客服。

## 5.客服咨询

你在使用中有任何问题，可以添加技术客服微信（qiufengblue）进行咨询，技术客服会拉你进入讨论群，讨论群中包含且不限于，本项目的未来发展、问题解答以及功能更新。


`;

export const UPDATE_CONTENT = `
由于产品正在建设初期，希望广大网友能够多多提供一些建议，你们的建议使我们前进的动力。
<img src="https://s3.qiufeng.blue/blog/1618197167151.jpg" style="width:200px" />

## 2021.04.17
- 增加简历模板中心
- 更新 logo
- 优化首页排版方式
- 优化编辑模式预览模式的切换
- 增加历史记录

## 2021.03.28
- 修复因center标签引起的渲染位置错误
- 修改了list列表的拆分方式
- 修复了引插入图片引起导出不一致情况
- 修复渐变主题下的导出不一致情况

## 2021.03.22
- 修复 tag 的间距问题
- 增加预览功能，预览可查看导出后的排版样式

## 2021.03.20
- 修复导出pdf后，在mac下复制错乱问题
- 增加固定A4大小预览
- 增加内置渲染插件
- 增加更新提示
- 增加一页纸导出模式

## 2021.03.16
- 优化主题的间距样式
- 导出后的增加边距

## 2021.03.15 
- 支持多套模板切换主题
- 支持快捷icon输入
- 支持导出pdf
- 支持 markdown 导入/导出
- 加入使用教程说明

`;

export const INIT_CONTENT = `
# 党兴东 - 前端Leader

::: left
对一切前沿知识保持充分的好奇。

男/1988.11

北京经济技术研修学院/计算机软件开发


本科/2009年毕业

:::

::: right
[icon:github https://github.com/RealCoolSnow](https://github.com/RealCoolSnow)

[icon:email 670696652@qq.com](mailto:670696652@qq.com)

icon:weixin CoolSnow

:::

## 个人介绍

- 10年项目开发与管理经验,完整经历PC互联网到移动互联网变革，从架构设计到DevOps，从Web、H5到小程序、Electron、APP，从独立开发到团队管理都有丰富的经验
- 精通JavaScript、TypeScript语言，精通Vue、React、Element、Tailwind CSS等开发框架，掌握Webpack、Vite等构建工具，熟悉pnpm workspace、monorepo等项目管理工具，有大型前端项目开发与管理经验（五年以上开发经验，两年以上管理经验）
- 精通Android客户端开发，掌握Java、C++语言，熟悉Flutter跨端开发，有三年以上客户端开发经验。参与过亿级用户APP的开发。个人开发过的移动端APP/游戏总用户超过3000万
- 熟悉Go、Python、Node.js、MySql、Redis等后端开发技术，有后端开发经验
- 有很强的学习能力，对新技术、行业趋势保持浓厚兴趣
- 丰富的创业团队、创业项目、从0到1的经历和经验

## 工作经历

### 凯世星球（北京）科技有限公司（2017.1-至今）<font color="#3b82f6">跨境金融</font>

\`Vue3\` \`React\` \`Monorepo\` \`Node.js\` \`工程化\` \`Android/iOS\` 

**前端Leader**

- 测试测试

### 北京万国万购信息技术有限公司（2015.12-2017.1）<font color="#ec4899">跨境电商（创业项目）</font>

### 奇虎360（2014.1-2015.12）<font color="#22c55e">安全</font>

### 创新工场（2013.6-2014.1）<font color="#8b5cf6">手游（创业项目）</font>

### 迅游科技（2011.12-2013.6）<font color="#84cc16">游戏加速</font>

### 华为（2011.6-2011.12）<font color="#14b8a6">通信</font>
`;
