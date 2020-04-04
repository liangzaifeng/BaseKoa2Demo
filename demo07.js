// 路由中间件的使用

const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
let router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = 'index';
}).get('/todo', async (ctx, next) => {
  ctx.body = 'todo'
})

// 使用路由, 使用路由规则
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
  console.log('3000端口服务开启:中间件的普通使用');
})