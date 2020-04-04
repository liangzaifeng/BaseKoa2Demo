/*
  路由中间件的使用
  配置层级路由
*/


const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router'); // 路由中间件

let home = new Router();
let page = new Router();

home
  .get('/', async (ctx) => {
    ctx.body = 'home index'
  })
  .get('/todo', async (ctx) => {
    ctx.body = 'home todo'
  })

page
  .get('/', async (ctx) => {
    ctx.body = 'page index'
  })
  .get('/todo', async (ctx) => {
    ctx.body = 'page todo'
  })

let router = new Router();
// 配置 /home 层级路由
router.use('/home', home.routes(), home.allowedMethods())
// 配置 /page 层级路由
router.use('/page', page.routes(), page.allowedMethods())

// 使用路由, 使用路由规则
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
  console.log('3000端口服务开启:中间件的普通使用');
})