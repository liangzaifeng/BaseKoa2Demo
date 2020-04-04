/**
 * cookie的使用
 */
const Koa = require('koa');
const app = new Koa();

app.use(async ctx =>{
  let {url} = ctx;
  if(url === '/' ) {
    ctx.cookies.set('MyName', 'LZFeng',{
      domain: '127.0.0.1', // 写cookie所在的域名
      path: '/index', // 写cookie所在的路径 其他路径无法获取, 一般为 '/'
      maxAge: 1000*60*60*24, // cookie有效时长 毫秒为单位
      expires: new Date('2020-4-6'), // cookie 失效时间
      httpOnly: true, // kookie 只能通过服务器端修改，JS是操作不了的
      overwrite: false // 是否允许重写 
    })
    ctx.body = 'hello,index'

  } else {
    if(ctx.cookies.get('MyName')) {

    }
    ctx.body =ctx.cookies.get('MyName') ? ctx.cookies.get('MyName'): '没有cookie'
  }
})

app.listen(3000,()=>{
  console.log('cookie的使用');
})
