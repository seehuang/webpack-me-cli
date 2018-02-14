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

<pre>
npm run dev 开发环境，启用服务，浏览器输入localhost:8080/pageA.html
npm run build 生产环境，项目被打包到dist文件夹
npm run lint 启用eslint检测代码
</pre>

## 项目依赖
<pre>
1.安装 webpack 和 webpack-dev-server
npm install webpack webpack-dev-server --save-dev

2.安装 webpack-merge
npm install webpack-merge --save-dev
该插件用来对 webpack 配置进行合并操作。

3.安装 babel 相关插件
npm install babel-core babel-loader babel-preset-env babel-plugin-transform-es2015-spread --save-dev
这系列插件用来对 ES6 语法进行转换。

4.安装样式处理相关插件
npm install css-loader style-loader postcss-loader autoprefixer --save-dev
这系列插件用来处理 CSS 样式，其中 autoprefixer 是 postcss 的一个插件，用来自动给 CSS 样式添加前缀。

5.安装 file-loader
npm install file-loader --save-dev
该插件将在导入图片、字体等文件时发挥作用，主要是针对css中的url。

6.安装 ESLint 相关的插件
npm install eslint eslint-loader --save-dev
这些插件用来对 JavaScript 代码进行检查。

7.安装 html-webpack-plugin 插件
npm install html-webpack-plugin --save-dev
该插件用来自动生成 HTML 文件。

8.安装 extract-text-webpack-plugin 插件
npm install extract-text-webpack-plugin --save-dev
该插件用来将 CSS 抽取到独立的文件。

9.安装 clean-webpack-plugin 插件
npm install clean-webpack-plugin --save-dev
该插件用来对 dist 文件夹进行清理工作，每次打包时先清理之前的 dist 文件夹。

10.安装http-server
npm install http-server --save-dev

11.安装html-loader
npm install html-loader --save-dev
该插件用来提取html中的img标签src图片
</pre>
## 运行结果

## 构建完成


