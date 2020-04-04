// 使用中间件来接收参数
const Koa = require('koa');
const app = new Koa();

// 使用中间件来接收参数
const bodyparser = require('koa-bodyparser')
app.use(bodyparser()); // 使用, 添加到ctx.request.body上

app.use(async ctx => {
  let {
    method,
    url
  } = ctx

  if (url === '/' && method === 'GET') {
    
    let html = `
      <form action='/' method="post">
        <p>姓名</p>
        <input type="text" name="name" />
        <p>年龄</p>
        <input type="text" name="age" />
        <p>网址</p>
        <input type="text" name="webSite" />
        <button type="submit">submit</button>
      </form>
    `
    ctx.body = html

  } else if (url === '/' && method === 'POST') {

    ctx.body = ctx.request.body


  } else {
    ctx.body = '<h1>404</h1>'
  }
})


app.listen(3000, () => {
  console.log('demo05的3000端口服务开启了');
})