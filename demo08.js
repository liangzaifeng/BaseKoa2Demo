// 路由中间件的使用
// 配置二级域名

const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');// 路由中间件
let router = new Router({
  prefix: '/lzfeng' // 配置二级域名
});

router.get('/', (ctx, next) => {
  ctx.body = 'index';
}).get('/todo',  (ctx, next) => {
  ctx.body = 'todo'
}).get('/todo/xx',  (ctx, next) => {
  ctx.body = 'todo/xx'
})

// 使用路由, 使用路由规则
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
  console.log('3000端口服务开启:中间件的普通使用');
})