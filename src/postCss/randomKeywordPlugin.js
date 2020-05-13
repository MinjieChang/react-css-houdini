import postcss from 'postcss'

// 定义一个修改 ast 的插件
const randomKeywordPlugin = postcss.plugin('random-keyword', () => {
  return (css) => {
    css.walkRules((rule) => {
      rule.walkDecls((decl, i) => {
        if (decl.value.includes('random')) {
          decl.value = decl.value.replace('random', Math.random());
        }
      });
    });
  };
});

export default randomKeywordPlugin