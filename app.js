const express = require('express');
const app = express();
const port = 3000;

// 博客文章数据（已内置完整部署教程文章）
const articles = [
  {
    id: 1,
    title: "Kali Linux 下 Node.js 环境搭建与博客部署全流程",
    content: `
<h2>一、环境准备</h2>
<p>1. 更新系统</p>
<pre>sudo apt update && sudo apt upgrade -y</pre>

<p>2. 安装 Node.js</p>
<pre>curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs</pre>

<p>3. 验证安装</p>
<pre>node -v
npm -v</pre>

<h2>二、创建博客项目</h2>
<p>1. 创建项目文件夹</p>
<pre>mkdir ~/myblog
cd ~/myblog</pre>

<p>2. 初始化项目</p>
<pre>npm init -y</pre>

<p>3. 安装 Express 框架</p>
<pre>npm install express</pre>

<h2>三、本地运行博客</h2>
<p>创建 app.js 并编写代码后，启动服务：</p>
<pre>node app.js</pre>
<p>访问：http://localhost:3000</p>

<h2>四、Vercel 部署</h2>
<p>1. 创建 vercel.json 配置文件</p>
<pre>{
  "version": 2,
  "builds": [{ "src": "app.js", "use": "@vercel/node" }],
  "routes": [{ "src": "/(.*)", "dest": "app.js" }]
}</pre>

<p>2. 上传代码到 GitHub</p>
<pre>git init
git add .
git commit -m "init blog"
git push</pre>

<p>3. 在 Vercel 导入仓库，自动部署成功</p>

<h2>五、常见问题</h2>
<p>• 部署失败：删除多余的 copy 文件</p>
<p>• 国内无法访问：Vercel 服务器在国外，需要代理</p>
<p>• 本地无法访问：确保 node app.js 正在运行</p>

<h3>总结</h3>
<p>本文完整记录了 Kali Linux 下从 0 到 1 搭建 Node.js 博客，并部署到 Vercel 的全过程。</p>
`
  },
  {
    id: 2,
    title: "Linux 系统管理常用命令实战笔记",
    content: "Linux 基础命令：ls、cd、pwd、mkdir、rm、cp、mv、top、ps、netstat 等。"
  },
  {
    id: 3,
    title: "Express 框架从零搭建个人博客",
    content: "使用 Express 快速搭建 Web 服务，实现路由、页面、文章展示功能，完成个人博客。"
  }
];

// 首页
app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>我的技术博客</title>
    <style>
      body{background:#121212;color:#00ff00;font-family: monospace;padding:20px;line-height:1.6}
      h1{text-align:center;font-size:28px}
      .article{margin:15px 0;padding:10px;background:#1e1e1e;border-radius:5px}
      a{color:#00ff00;font-size:18px;text-decoration:none}
    </style>
  </head>
  <body>
    <h1>欢迎来到我的技术博客</h1>
    <div>
      ${articles.map(item => `
        <div class="article">
          <a href="/article/${item.id}">${item.title}</a>
        </div>
      `).join('')}
    </div>
  </body>
  </html>
  `);
});

// 文章详情页
app.get('/article/:id', (req, res) => {
  const article = articles.find(a => a.id == req.params.id);
  if (!article) return res.send("文章不存在");
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>${article.title}</title>
    <style>
      body{background:#121212;color:#00ff00;font-family: monospace;padding:20px;line-height:1.8}
      h2{color:#00ff00}
      pre{background:#1e1e1e;padding:10px;border-radius:5px;overflow:auto}
      a{color:#00ff00}
    </style>
  </head>
  <body>
    <h2>${article.title}</h2>
    <div>${article.content}</div>
    <br>
    <a href="/">返回首页</a>
  </body>
  </html>
  `);
});

app.listen(port, () => {
  console.log(`博客已启动：http://localhost:${port}`);
});
