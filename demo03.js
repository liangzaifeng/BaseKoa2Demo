// get获取数据
const Koa = require('koa');
const app = new Koa();
app.use(async ctx => {
  let {
    url,
    request
  } = ctx
  console.log(ctx.request.url);
  console.log(ctx.url,'-------');
  let reqQuery = request.query; // get请求的对象
  let reqQuerystring = request.querystring // get请求的字符串
  let ctxQuery = ctx.query; // get请求的对象
  let ctxQuerystring = ctx.querystring; // get请求的字符串
  ctx.body = {
    url:ctx.request.url,
    reqQuery,
    reqQuerystring,
    ctxQuery,
    ctxQuerystring,
  }
})

app.listen(3000, () => {
  console.log('demo03服务开启');
})