# webpack-me-cli


构建一个多页应用工程的脚手架


## 前言

> 之前开发多页应用比较多，例如一些企业的官网等项目，频繁改动就会出现一些问题，比如css缓存问题，资源路径改动问题，需要人工大量的复制粘贴，这些工作繁琐耗时，所以考虑到使用前端构建工具来构建项目。

> 但是，需要先了解webpack是一个模块化打包工具，既然想使用webpack，那一定要谨记，自己的多页的项目也一定要引入模块化机制，每个页面相当于一个模块，抽象好各个组件，这样才能发挥webpack的优势。才能使项目做到高内聚低耦合。

> 总之，我觉得写代码首先是好看，好维护，再去考虑其它。
    

## 构建目标

- [x] eslint代码检查
- [x] ES6代码编译
- [x] js模块打包，公共，业务代码分开打包，并加入hash
- [x] 提取css文件，添加前缀，压缩代码，加入hash
- [x] 提取html模板文件，并自动添加css，js
- [x] 提取图片文件，压缩图片
- [x] 提取字体文件
- [x] 开启本地服务调试
- [x] 加入第三方非模块化库或者插件（如jquery，swiper）
- [x] 开启本地server
- [x] 使用source map调试

## 项目结构 

 <pre>
│  .babelrc
│  .eslintrc.js
│  .gitignore
│  package.json
│  postcss.config.js
│  tree.txt
│  webpack.config.js 
│  
├─app //项目总路径
│  ├─common
│  │      common.js
│  │      
│  ├─css
│  │      base.css
│  │      pageA.css
│  │      pageB.css
│  │      swiper2.7.6.css
│  │      
│  ├─html //项目模板文件
│  │      pageA.html
│  │      pageB.html
│  │      
│  ├─img
│  │      car.png
│  │      car2.png
│  │      car3.png
│  │      
│  ├─js
│  │      pageA.js
│  │      pageB.js
│  │      
│  └─lib //第三方库或者插件
│          jquery-1.10.1.min.js
│          swiper2.7.6.min.js
│          
└─config
        config.js
        webpack.config.base.js
        webpack.config.dev.js
        webpack.config.lint.js
        webpack.config.prod.js
 </pre>

         

## 运行项目

## 运行结果

## 构建完成


