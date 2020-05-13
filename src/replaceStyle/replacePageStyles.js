/**
 * 1、获取页面所有的样式文件
 * 2、移除所有的获取的样式标签
 * 3、创建style标签，并将css文本填充进去
 * 4、添加新创建的style标签
 */

const replacePageStyles = (css) => {
  const existingStyles =
      [...document.querySelectorAll('style, link[rel="stylesheet"]')];

  const polyfillStyles = document.createElement('style');
  polyfillStyles.innerHTML = css;
  document.head.appendChild(polyfillStyles);

  existingStyles.forEach((el) => el.parentElement.removeChild(el));
};

export default replacePageStyles