// post获取数据
const Koa = require('koa');
const app = new Koa();

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

    ctx.body = await parsePostData(ctx)


  } else {
    ctx.body = '<h1>404</h1>'
  }
})

// 接收传递过来的post参数并且转换可解析的对象
function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    // 建议使用try catch , 可以捕获异常
    try {
      let postdata = '';
      // 监听参数进来
      ctx.req.on('data', data => {
        postdata += data;
      })
      // 监听结束
      ctx.req.addListener('end', _ => {
        // 把获取的请求参数字符串转为对象返回出去
        resolve(parseQueryString(postdata))
      })
    } catch (error) {
      reject(error)
      console.log(error, '接收参数报错');
    }
  })
}

// 把query参数转换成对象
function parseQueryString(queryStr) {
  let postData = {};

  let queryStrList = queryStr.indexOf('&') >= 0 ? queryStr.split('&') : [queryStr];
  return postData = queryStrList.map(v => {
    let item = v.split('=');
    return {
      [item[0]]: decodeURIComponent(item[1])
    }
  })


}

app.listen(3000, () => {
  console.log('demo04的3000端口服务开启了');
})