import{_ as e,c as s,o as n,a9 as i,aa as t,ab as r,ac as p,ad as a}from"./chunks/framework.BsCeOs5m.js";const y=JSON.parse('{"title":"Arch","description":"","frontmatter":{},"headers":[],"relativePath":"arch.md","filePath":"arch.md","lastUpdated":1729390752000}'),l={name:"arch.md"},c=i('<h1 id="arch" tabindex="-1">Arch <a class="header-anchor" href="#arch" aria-label="Permalink to &quot;Arch&quot;">​</a></h1><p>驿站的 Arch 笔记</p><h2 id="archinstall" tabindex="-1">archinstall <a class="header-anchor" href="#archinstall" aria-label="Permalink to &quot;archinstall&quot;">​</a></h2><p>进入 live cd 后，输入 <code>archinstall</code> 并按 Enter</p><p><img src="'+t+'" alt=""></p><p>然后看到这个界面</p><p><img src="'+r+'" alt=""></p><ul><li>Mirrors - 选择 China</li><li>Locales - 选择 zh_CN</li><li>Disk encryption - 分区</li><li>BootLoader - 选择 Grub</li><li>Profile - 我使用 KDE</li><li>Network configuration - 我使用 NetworkManager</li></ul><p>安装完成后，它会询问要不要 chroot 到新创建的安装中以进行安装后配置，但我们不需要这样做。因此，选择否来完成安装</p><p><img src="'+p+'" alt=""></p><p>接着我们关机 <code>shutdown now</code></p><p>虚拟机的话，删除碟片，真机就拔出U盘后开机</p><p><img src="'+a+`" alt=""></p><h2 id="软件" tabindex="-1">软件 <a class="header-anchor" href="#软件" aria-label="Permalink to &quot;软件&quot;">​</a></h2><h3 id="pacman" tabindex="-1">pacman <a class="header-anchor" href="#pacman" aria-label="Permalink to &quot;pacman&quot;">​</a></h3><h4 id="换源" tabindex="-1">换源 <a class="header-anchor" href="#换源" aria-label="Permalink to &quot;换源&quot;">​</a></h4><details><summary>换源</summary><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo vim /etc/pacman.d/mirrorlist</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在文件的最顶端添加：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Server = https://mirrors.tuna.tsinghua.edu.cn/archlinux/$repo/os/$arch</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>最后:wq 保存退出，刷新 pacman 数据库</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo pacman -Syyu</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>参考：<a href="https://mirrors.tuna.tsinghua.edu.cn/help/archlinux/" target="_blank" rel="noreferrer">https://mirrors.tuna.tsinghua.edu.cn/help/archlinux/</a></p></details><h4 id="color" tabindex="-1">color <a class="header-anchor" href="#color" aria-label="Permalink to &quot;color&quot;">​</a></h4><p>编辑 <code>sudo vim /etc/pacman.conf</code></p><p>找到 <code>#color</code> 取消注释即可</p><h4 id="开启-32-位支持库" tabindex="-1">开启 32 位支持库 <a class="header-anchor" href="#开启-32-位支持库" aria-label="Permalink to &quot;开启 32 位支持库&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo vim /etc/pacman.conf</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>去掉 [multilib] 一节中两行的注释，来开启 32 位库支持。</p><p>最后:wq 保存退出，刷新 pacman 数据库</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo pacman -Syyu</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="添加-archlinuxcn-库" tabindex="-1">添加 archlinuxcn 库 <a class="header-anchor" href="#添加-archlinuxcn-库" aria-label="Permalink to &quot;添加 archlinuxcn 库&quot;">​</a></h4><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[archlinuxcn]</span></span>
<span class="line"><span>Server = https://mirrors.aliyun.com/archlinuxcn/$arch</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>:wq 保存退出，刷新 pacman 数据库</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo pacman -Syyu</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="yay" tabindex="-1">yay <a class="header-anchor" href="#yay" aria-label="Permalink to &quot;yay&quot;">​</a></h3><p>先 <a href="#添加-archlinuxcn-库">添加 archlinuxcn 库</a></p><p>接着</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo pacman -S yay</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果遇到:</p><p><img src="`+a+'" alt=""></p><p>在执行</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo pacman -S archlinuxcn-keyring</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>后重新安装 yay</p>',38),o=[c];function d(h,u,m,b,v,g){return n(),s("div",null,o)}const _=e(l,[["render",d]]);export{y as __pageData,_ as default};
