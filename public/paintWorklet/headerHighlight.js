registerPaint('headerHighlight', class {

  static get contextOptions() { return {alpha: true}; }

  static get inputProperties() { 
    return [ '--checkerboard-spacing', '--checkerboard-size' ] 
  }

  // 此API
  static get inputArguments() { return ['*', '<length>']; }

  /**
   * 
   * @param {Object} ctx 一个canvas对象
   * @param {Object} size {width, height}
   * @param {Map} properties 获取 inputProperties 返回的值
   * @param {Array} args 获取 inputArguments 返回值
   */
  paint(ctx, size, properties, args) {
    // 使用size值的好处是，可以使得我们绘制区域变成响应式
    console.log(size, 'size')
    console.log(properties.get('--checkerboard-size').toString(), 'properties')
    console.log(args, 'args')
		ctx.fillStyle = 'hsla(55, 90%, 60%)';
    ctx.fillRect(0, 15, 200, 20);
    // ctx.fillRect( 0, size.height / 3, size.width * 0.4, size.height * 0.6 );

  }
});