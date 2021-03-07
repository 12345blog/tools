# 私人武器库

纯前端实现一些实用的一些小功能。

- 基于 [Vue](https://vuejs.org/) 的开发框架 [Nuxt.js](https://nuxtjs.org/)
- 使用 [BootstrapVue](https://bootstrap-vue.org/) 作为前端样式
- 引入 [Stylus](https://www.stylus.com/) 做为 CSS 扩展
- 使用 [GitHub Actions](https://github.com/features/actions) 自动构建到 [gh-pages](https://github.com/12345blog/tools/tree/gh-pages) 分支

------

## 目前只有 1 个工具

### 1. 纯前端的 Surge 配置生成工具

https://12345.blog/tools/surge/

本人在大陆使用两个机场 [DlerCloud][Dler] 和 [w8ves][w8ves] 互为备份，他们都有 IEPL/IPLC 和 BGP/NBGP 线路，[w8ves][w8ves] 还有低流量倍率的线路，大量密集的看 Netflix 或 YouTube 等也不用心疼流量使用。

我用 Mac Mini 长期开着 [Surge][Surge] 的网关模式，局域网内所有有需要的设备都可以经它自动走梯子出去，这个工具就是为了生成 [Surge][Surge] 规则而开发的。

主要是弄烦了，两个机场的配置总是有手工的方式合在一个配置文件里，好累的……有个小工具，按自己的规则来，只需要把节点列表粘到一起，然后导出配置就行了，每次订阅更新后的合并，都能省半个小时时间……



个人习惯：

- 按地区和张路类型，分多个策略组
- 不同用途只需要选择用哪个策略组，线路检测和选择的功能让 [Surge][Surge] 自动完成就行
- 日常使用香港的 IEPL 线路，高速
- 在低倍率节点速度优秀的时候，可以用来看视频
- [Telegram][Telegram] 走欧洲节点，德国或英国，这样的路径，好像出口离他们的主服务器更近
- 苹果和微软默认直连，也可以手动切换成使用代理
- 国内视频网站直连
- Netflix 默认走香港线路
- YouTube, Spotify, Disney 等默认走美国线路
- 使用 [SpeedTest][SpeedTest] 测速时，可以手动指定只测直连或某条线路
- 其他访问，走什么线路，看规则命中哪个就走哪个吧
- 在 [Surge][Surge] 网关上直接回绝掉广告地址的网络请求，可以手动选择方式，我习惯用 TinyGIF
- 在大屏幕使用此工具（4K），没做响应式布局之类的小屏优化
- 暂时写这么多吧，常用的也就这些

#### 已（正在）实现的功能

- [x] 方便把多个机场线路合在同一个配置文件里，自动选择线路
- [x] 整理机场节点，在标题开头加上对应国家的 emoji 国旗
- [x] 按个人习惯生成以下配置组
  - [x] General
  - [x] Replica
  - [x] Proxy
  - [x] Proxy Group
  - [x] Rule `基于洞主和原 YoYu 的规则，稍加了一些优化`
  - [x] Host `洞主规则`
  - [x] URL Rewrite `洞主规则`
  - [x] Script `洞主规则`
  - [x] MITM `洞主规则，替换了个人使用的证书`

#### 如果有朋友有兴趣想优化它

在这个文件里 [pages/surge.vue](tree/master/pages/surge.vue)


## 欢迎协作

如果对你也恰好有用，欢迎：

- 加星关注
- 或提交代码


[Dler]: https://bit.ly/getdler
[w8ves]: https://bit.ly/w8ves
[Surge]: https://nssurge.com/
[Telegram]: https://telegram.org/
[SpeedTest]: https://www.speedtest.net/
