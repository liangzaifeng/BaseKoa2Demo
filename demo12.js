  /**
   * 静态资源中间件
   */
  const Koa = require('koa');
  const path = require('path');
  const static = require('koa-static');// 静态资源中间件

  const app = new Koa();

  const staticPath = './static'
  app.use(static(path.join(__dirname,staticPath)));// 拼接静态资源路径, 并且使用中间件 , 这样就可以访问了

  app.use(async ctx =>{
    ctx.body = 'hello LZFeng!'
  })

  app.listen(3000,()=>{
    console.log('使用静态资源中间件');
  })
