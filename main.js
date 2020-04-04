// 创建服务
const Koa = require('koa')

const app = new Koa()

app.use(async (ctx) => {
  ctx.body = 'hello koa2'
})

app.listen(3000,() =>{
  console.log('服务启动了');
})