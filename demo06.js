// 路由
const Koa = require('koa');
const app = new Koa();
const fs = require('fs'); // 对文件的操作模块
app.use(async ctx =>{
  let {url} = ctx
  ctx.body = await route(url);
});

// 匹配路由
async function route(url) {
  let page = '404.html'
  console.log(url);
  switch(url) {
    case '/':
      page = 'index.html'
    case '/index':
      page = 'index.html'
      break;
      case '/todo':
        page = 'todo.html'
    default:
      break;
  }
  let html = await render(page)
  return html
}

// 根据路由读取文件
 function render(page) {
   return new Promise((resolve,reject) =>{
    let pageUrl = `./page/${page}`;
    /** 异步文件的读取
     * @param1 文件路径
     * @param2 读取文件的格式 binary 为二进制
     * @param3 回调函数, 里面的参数err失败, data是读取的文件
     */
    fs.readFile(pageUrl,'binary',(err,data) =>{
      if(err) {
        reject(err);
      } else {
        resolve(data)
      }
    })
   })
 };

app.listen(3000,() =>{
  console.log('成功');
});