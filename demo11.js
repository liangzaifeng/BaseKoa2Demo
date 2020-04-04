/**
 * 模版引擎的使用
 */
const Koa = require('koa');
const app = new Koa();
const path = require('path');
/**
	* cnpm install --save koa-views  // 使用模版的中间件
	* npm install --save ejs  // 安装ejs模板引擎
 */
const views = require('koa-views'); // 中间件

// 使用 koa-views 插件 , 并且用path拼接模版路径, 识别模版为 ejs 后缀的文件
app.use(views(path.join(__dirname,'./views'),{
  extension: 'ejs' // 识别模版为 ejs 后缀的文件
}))


app.use(async ctx =>{
 let title = '靓仔风';
 await ctx.render('todo',{title})
})

app.listen(3000,()=>{
  console.log('使用模版');
})
