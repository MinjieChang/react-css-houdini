import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import postcss from 'postcss'
import ss from './gainStyle/ss.js'
import getPageStyles from './gainStyle/getPageStyle'
import randomKeywordPlugin from './postCss/randomKeywordPlugin.js'
import replacePageStyles from './replaceStyle/replacePageStyles.js'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// 使用styleSheet的方式修改
ss()

/**
 * 1、getPageStyles 获取sytle 标签和外链样式的所有样式文本
 * 2、使用 postcss 解析 样式文本为 抽象语法树 可以理解为我们自己版本的 CSSOM。
 */
getPageStyles()
.then((css) => postcss.parse(css))
.then((ast) => {
  // 在这里可以把 ast 打印出来看看
  console.log(ast)
});

/**
 * 解析css > ast > 替换 > 转css
 */
getPageStyles()
.then((css) => postcss([randomKeywordPlugin]).process(css)
.then((result) => {
  // 打印出来发现值已经被改变了
  console.log(result.css, 'result');
  // console.log(result.css, 'result');
}))

/**
 * 解析css > ast > 替换 > 转css > 替换
 */
getPageStyles()
.then((css) => postcss([randomKeywordPlugin])
.process(css)
.then((result) => {
  replacePageStyles(result.css)
}))

/**
 * 带来的问题：
 * 
 * 一、待解决的问题：
 * 1、对于内联样式、隐藏元素无法覆盖到，本例只列举了style标签及link
 * 2、未考虑css选择器优先级规则(比如important)，这会增加parser复杂度
 * 
 * 二、无法避免的问
 * 1、复杂度，为了兼容一个属性，需要大量的额外代码支持
 * 2、性能，对于会频繁触发的操作(比如页面滚动、缩放等)，position: sticky这类polyfill会被频繁触发，删除样式 > 插入样式 > 页面重绘制 >降低页面流畅度
 * 3、不稳定，随着复杂度增加，导致错误增加
 */