运行监视
===========================
黄花机场综合能源管理系统，项目编号：-------<br><br><br>

```
├── build/                                   // webpack config directory
│     ├── webpack.dev.config.js                 // config for webpack when run development bundle
│     └── webpack.prod.config.js                // config for webpack when run production bundle
├── client/                                  // client directory
│     ├── about/                                // `about` module
│     ├── common/                               // `common` module
│     ├── home/                                 // `home` module
│     ├── shared/                               // shared module
│     ├── explore/                              // `explore` module
│     ├── index.js                              // client entry file
│     └── routes.js                             // client route config
├── dist/                                    // bundle output directory
│     ├── client/                               // the client side output directory
│     └── server/                               // the server side output directory
├── server/                                  // server directory
│     ├── controllers/                          // controllers in server
│     ├── middlewares/                          // custom middlewares in server
│     ├── models/                               // models in server
│     ├── routes/                               // routes in server
│     ├── app.js                                // create koa instance in server
│     ├── server.dev.js                         // entry file in development mode
│     └── server.prod.js                        // entry file in production mode
├── views/                                   // views directory
│     ├── dev/                                  // output files generated by tpl in development mode
│     ├── prod/                                 // output files generated by tpl in production mode
│     └── tpl                                   // templates injected by html-webpack-plugin
├── .editorconfig                            // uniform the text editor behavior
├── .eslintignore                            // which paths should be omitted from linting
├── .eslintrc.json                           // specific rules for eslint
├── .gitattributes                           // uniform the new line perform behavior
├── .gitignore                               // ignore the specific files when using git
├── LICENSE                                  // license information
├── package.json                             // npm entry file
├── README.md                                // just what you see now
└── yarn.lock                                // lock file autogenerated by yarn
```


## 前端开发
	
|Author|张琳|
|---|---
|WeChat|ZL200pro

<br><br>

## 需求描述
###### 1.供能监视
	能源站实时供能数据监视，包括CCHP机组、直燃机组、离心式电制冷机、热水锅炉，
	用电功率、用气流量、用水流量，产电功率，产冷热功率。
###### 2.用能监视
	用户实时用能数据监视，包括用电数据、用水数据、燃气数据、冷热数据。
###### 3.配网监视
	机场配电网数据监视，主要包括110kV升压站数据，10千伏变电站数据。
###### 4.空调数据监视
	机场航站楼空调末端数据监视，包括区域温度，二氧化碳浓度，送风机开度。
###### 5.节能减排
	碳氧化物、氮氧化物减排量展示。
<br><br>




## 目录结构

```
. 
│── build
│　　│── data　　　　　　　 　　 　　 　// 客户端模拟接口的数据文件
│　　│── static　　　　　　 　　 　　 　　// 客户端静态资源
│　　│　　│── css　　　　　 　　 　　 　// 客户端静态资源
│　　│　　│── images　　　　 　　 　　 // 客户端图片文件
│　　│　　│── js　　　　　　 　　 　　 // 客户端js文件
│　　│　　│── media　　　　　 　　 　 // 客户端其它媒体文件
│── config　　　　　　　　　  　　　　　// 服务端webpack配置文件
│　　│── jest　　　　　　　　 　　 　 　// 单元测试
│── public　　　　　　　　　  　　　　　// 服务端公共文件及静态资源
│　　│── data　　　　　　　　 　　 　　// 服务端模拟接口的数据文件
│── scripts　　　　　　　　　 　　　　　// 服务端各环境下的配置文件
│── src　　　　　　　　　　　　　　　　// 服务端开发环境代码
│　　│── components　　　　　　　　　// 服务端模块组件
│　　│　　│── aircs
│　　│　　│　　│── t1.js　　　　　　　// 空调系统监视-T1航站楼及连廊
│　　│　　│　　│── t2in.js　　　　　　// 空调系统监视-T2航站楼到达层
│　　│　　│　　│── t2out.js　　　　　 // 空调系统监视-T2航站楼出发层
│　　│　　│　　│── tabs.js　　　　　　// 空调系统监视-tab标签
│　　│　　│── energyuse
│　　│　　│　　│── equ.js　　　　　　// 用能监视-用能设备
│　　│　　│　　│── tabs.js　　　　　 // 用能监视-tab标签
│　　│　　│　　│── unit.js　　　　　// 用能监视-内部单位
│　　│　　│── netmonitor
│　　│　　│　　│── one.js　　　　　　// 配网监视-航空港110kV变电站一次接线图
│　　│　　│　　│── two.js　　　　　　// 配网监视-10kV中心变电站
│　　│　　│　　│── three.js　　　　　// 配网监视-T2航站楼10kV＃1变电站主接线图
│　　│　　│　　│── four.js　　　　　 // 配网监视-T2航站楼10kV＃2变电站主接线图
│　　│　　│　　│── five.js　　　　　 // 配网监视-T2航站楼10kV＃3变电站主接线图
│　　│　　│　　│── six.js　　　　　　// 配网监视-10kV南区开关站主接线图
│　　│　　│　　│── router.js　　　　 // 配网监视-tab标签
│　　│　　│── overview
│　　│　　│　　│── echObj　　　　　  // 监视总览图表配置文件
│　　│　　│　　│── l1_1.js　　　　　// 监视总览-碳排放量
│　　│　　│　　│── l1_2.js　　　　　// 监视总览-总能耗
│　　│　　│　　│── l1_3.js　　　　　// 监视总览-航班旅客信息
│　　│　　│　　│── l1_4.js　　　　　// 监视总览-天气预测
│　　│　　│　　│── l2_1.js　　　　　// 监视总览-机场单位能耗排名
│　　│　　│　　│── l2_2.js　　　　　// 监视总览-单位旅客能耗
│　　│　　│　　│── l3_1.js         // 监视总览-驻场单位能耗排名
│　　│　　│　　│── l3_2.js　　　　　// 监视总览-航站楼单位平米能耗
│　　│　　│　　│── l4_1.js　　　　　// 监视总览-用能设备能耗组成
│　　│　　│　　│── l4_2.js　　　　　// 监视总览-最新报警
│　　│　　│　　│── l4_3.js　　　　　// 监视总览-最新报警
│　　│　　│　　│── l4_4.js　　　　　// 监视总览-供能设备负荷水平
│　　│　　│　　│── space.js　　　 　// 监视总览-中央管网动画
│　　│　　│　　│── top.js　　　　　 // 监视总览-顶部LOGO、年月、日期
│　　│　　│── 404.js
│　　│　　│── aircs.js　　　　　　// 空调系统监视路由
│　　│　　│── api.js<br>
│　　│　　│── energysupply.js　　// 运行监视-供能监视
│　　│　　│── energyuse.js　　　 // 用能监视
│　　│　　│── netmonitor.js　　　// 配网监视
│　　│　　│── overview.js　　　　// 监视总览 大首页
│　　│── css
│　　│── images
│　　│── mock　　　　　　// 数据文件
│── .gitignore
│── package.json
```


