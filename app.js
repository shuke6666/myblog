const express = require('express');
const app = express();

// 解决中文乱码
app.use(express.urlencoded({ extended: true }));

// 首页 - 你的个人博客主页
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <title>🌙 我的技术博客</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Consolas', 'Monaco', monospace; }
            body { background: #0f0f13; color: #e0e0e0; padding: 50px 20px; max-width: 1000px; margin: 0 auto; line-height: 1.8; }
            h1 { color: #00ff41; margin-bottom: 30px; font-size: 2.5em; border-bottom: 1px solid #333; padding-bottom: 10px; }
            .card { background: #1a1a1d; padding: 25px; border-radius: 12px; margin: 20px 0; border-left: 4px solid #00ff41; transition: transform 0.2s; }
            .card:hover { transform: translateY(-3px); box-shadow: 0 0 15px rgba(0, 255, 65, 0.2); }
            a { color: #00ff41; text-decoration: none; font-size: 1.1em; font-weight: bold; }
            a:hover { text-decoration: underline; }
            .title { color: #00ff41; }
            .footer { margin-top: 80px; text-align: center; color: #666; font-size: 12px; }
        </style>
    </head>
    <body>
        <h1>🌙 欢迎来到我的技术博客</h1>
        <div class="card">
            <h3 class="title">📚 最新文章</h3>
            <ul style="list-style: none; margin-top: 15px;">
                <li>📝 <a href="/article/1">Kali Linux 下 Node.js 环境搭建与博客部署</a></li>
                <li>💻 <a href="/article/2">Linux 系统管理常用命令实战笔记</a></li>
                <li>⚡ <a href="/article/3">Express 框架从零搭建个人博客</a></li>
            </ul>
        </div>
        <div class="footer">© 2026 我的原创博客 | Powered by Node.js + Express</div>
    </body>
    </html>
    `);
});

// 文章 1：部署教程
app.get('/article/1', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <title>博客部署教程</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Consolas', 'Monaco', monospace; }
            body { background: #0f0f13; color: #e0e0e0; padding: 50px 20px; max-width: 1000px; margin: 0 auto; }
            h1 { color: #00ff41; margin-bottom: 20px; }
            .content { background: #1a1a1d; padding: 30px; border-radius: 12px; border-left: 4px solid #00ff41; }
            a { color: #00ff41; text-decoration: none; }
            p { margin: 15px 0; color: #ccc; }
            code { background: #000; color: #00ff41; padding: 2px 6px; border-radius: 4px; font-family: monospace; }
        </style>
    </head>
    <body>
        <h1>📝 Kali Linux 博客部署全记录</h1>
        <div class="content">
            <p>本次部署环境：<code>Kali Linux</code></p>
            <p>使用工具：<code>nvm</code> 管理 Node.js，<code>Express</code> 构建服务。</p>
            <p>成功解决了 apt 源依赖冲突问题，使用 nvm 安装独立环境，完美规避版本问题！</p>
            <br>
            <a href="/">← 返回首页</a>
        </div>
    </body>
    </html>
    `);
});

// 文章 2：Linux 命令
app.get('/article/2', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <title>Linux 命令笔记</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Consolas', 'Monaco', monospace; }
            body { background: #0f0f13; color: #e0e0e0; padding: 50px 20px; max-width: 1000px; margin: 0 auto; }
            h1 { color: #00ff41; margin-bottom: 20px; }
            .content { background: #1a1a1d; padding: 30px; border-radius: 12px; border-left: 4px solid #00ff41; }
            a { color: #00ff41; text-decoration: none; }
            p { margin: 15px 0; color: #ccc; }
        </style>
    </head>
    <body>
        <h1>💻 Linux 常用核心命令</h1>
        <div class="content">
            <p><code>whoami</code>：查看当前登录用户</p>
            <p><code>uname -a</code>：查看系统内核与架构信息</p>
            <p><code>hostname</code>：查看主机名</p>
            <p><code>sudo apt update</code>：更新软件源</p>
            <br>
            <a href="/">← 返回首页</a>
        </div>
    </body>
    </html>
    `);
});

// 文章 3：Express 入门
app.get('/article/3', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <title>Express 入门</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Consolas', 'Monaco', monospace; }
            body { background: #0f0f13; color: #e0e0e0; padding: 50px 20px; max-width: 1000px; margin: 0 auto; }
            h1 { color: #00ff41; margin-bottom: 20px; }
            .content { background: #1a1a1d; padding: 30px; border-radius: 12px; border-left: 4px solid #00ff41; }
            a { color: #00ff41; text-decoration: none; }
            p { margin: 15px 0; color: #ccc; }
        </style>
    </head>
    <body>
        <h1>⚡ Express 框架实战</h1>
        <div class="content">
            <p>Express 是基于 Node.js 的极简 Web 框架。</p>
            <p>通过 <code>app.get()</code> 定义路由，<code>res.send()</code> 返回响应内容。</p>
            <p>本次博客使用 Express 手写完成，完全没有使用第三方模板！</p>
            <br>
            <a href="/">← 返回首页</a>
        </div>
    </body>
    </html>
    `);
});

// 启动服务
app.listen(3000, () => {
    console.log('✅ 博客运行中：http://localhost:3000');
    console.log('🚀 环境：Node.js v24.14.1 (LTS)');
});
