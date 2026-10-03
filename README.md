# Shihao Zhu 个人网站

这是根据 https://sites.google.com/view/shihao-zhu 于 2026-10-03 的公开页面制作的静态版本，适用于 GitHub Pages。三页正文、论文及课程链接、照片、原站字体和内容布局已保留。所有展示图片和字体都在 assets 中，不需要安装软件或构建网站。

## 本地查看

双击 index.html 即可查看首页。Research、Teaching 和站内搜索均可在本地使用。

## 发布到 GitHub Pages

1. 登录 https://github.com，确认当前账号是 shihao-zhu。
2. 访问 https://github.com/new，创建名称为 shihao-zhu.github.io 的 Public 仓库，可以勾选 Add README。如果这个仓库已存在，先查看其中的内容，避免覆盖现有网站。
3. 在仓库中选择 Add file → Upload files。上传本文件所在目录里面的三个 HTML 文件、整个 assets 文件夹和 README.md，并点击 Commit changes。index.html 必须直接位于仓库根目录；不要只上传 ZIP，也不要把网站放在额外一层 shihao-zhu.github.io 文件夹中。
4. 打开 Settings → Pages，在 Build and deployment 下选择 Source: Deploy from a branch，然后选择 Branch: master、/(root)，点击 Save。
5. 等待 GitHub 部署成功，然后访问 https://shihao-zhu.github.io。GitHub 官方说明发布更改可能需要最多 10 分钟；Settings → Pages 或 Actions 可以查看部署情况。

根目录的空文件 .nojekyll 用于关闭 Jekyll 处理。Mac Finder 默认隐藏该文件；如果浏览器上传时没有包含它，这个网站的普通 HTML、CSS、JS 文件也能用默认发布流程处理。也可以在 GitHub 的 Add file → Create new file 创建名为 .nojekyll 的空文件。

## 文件说明与更新

- index.html：About Me、联系方式、News。
- research.html：研究方向、论文、摘要和 Research Creed 图片。
- teaching.html：教学记录。
- assets/：照片、字体、样式和站内搜索。

以后修改相应 HTML 文件并提交到 master，GitHub 会重新发布。原 Google 网站与此网站互相独立，不会自动同步。CV 和 Google Scholar 等链接继续指向原站使用的外部地址。

如修改正文，请同时更新 assets/search-data.js 中对应的搜索文本；它的每条记录包括 page（页面名）、url（页面及段落位置）、text（可搜索正文）。

## 与 Google 网站的区别

正文和原有视觉布局已复刻；导航菜单与搜索使用本地代码实现。未包含 Google 平台的 Cookie 提示、流量统计、举报按钮和平台页脚。浏览器或系统字体渲染也可能产生少量显示差异。发布地址为 https://shihao-zhu.github.io，部署状态以 GitHub 仓库的 Actions 和 Settings → Pages 页面为准。

## GitHub 官方说明

- 创建站点：https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- 上传文件：https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- 发布设置：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
