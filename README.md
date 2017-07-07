# vue-webpack-frame
基于vue2.3.4和webpack3.0搭建的前端脚手架

# 下载
git pull https://github.com/xianlong1226/vue-webpack-frame.git

# 安装依赖
npm install

# 运行dev
npm run build:dev

## 访问
打开浏览器，输入http://localhost:8080/index.html

# 运行prod
npm run build:prod

# 结构介绍

### 根目录下的components目录
该目录里存放的是全局公共组件，例如header组件、footer组件、left组件、弹窗组件等等。
每个组件是一个文件夹，.vue文件是组件内容，images目录里存放存放当前组件中用到的图片。

### 根目录下的vendors目录
该目录存放的是第三方的类库文件。

### 根目录下的pages目录
该目录里存放的是业务组件，一个目录对应一个单页应用，目录名就是最终的页面名字。
每个目录包含以下部分：
* components目录，该目录存放的是当前组件的专属组件（不与其他组件公用，公用的请放到根目录下的components目录下）。
* fonts目录，该目录存放当前组件的字体文件。
* images目录，该目录存放当前组件的图片文件。
* index.js，该文件是当前组件入口文件，webpack配置中会查找该文件，请不要改名。
* index.vue，该文件是当前组件的单文件组件，在index.js中引用了。
* template.html，该文件是当前组件的页面模板，webpack配置了将它里面的内容作为最终的页面内容，js文件和css文件会自动填充进去，请不要改名。
* localsproxy目录，该目录里存放的是webpack-dev-server的代理配置文件。
* webpack.xxx.js文件，该文件是webpack的配置文件，一般情况下不需要做调整。

# 路由请求配置
localsproxy目录下的index.js文件的第一行配置了路由转发的地址，请根据自己的项目进行修改；index.js文件中的proxy对象是你的接口路由配置，只有在这配置后才会把前端请求转发到对应的接口地址。
```
var target = "http://127.0.0.1:3000";

var proxy = {
	'/test': {
		target: target,
		changeOrigin: true,
		secure: false,
		headers: {
			// Cookie: true
		}
	}
}
```
如果你们的项目是前后端并行开发的，只定义了接口数据格式，后端开发人员还未开发完接口，那么可以配置先请求自定义的数据文件。具体配置步骤：
1. 在localsproxy目录下的rules.js文件中添加路由配置，并设置local: true。
2. 在localsproxy目录下的data目录中添加数据文件，文件名规则为：/a/b/c -> /locals/a.b.c.json。
