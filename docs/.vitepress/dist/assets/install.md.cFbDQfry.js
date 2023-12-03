import{_ as e,o as a,c as t,R as n}from"./chunks/framework.-3ULgdun.js";const k=JSON.parse('{"title":"Installing LinGo","description":"","frontmatter":{},"headers":[],"relativePath":"install.md","filePath":"install.md"}'),o={name:"install.md"},i=n('<h1 id="installing-lingo" tabindex="-1">Installing LinGo <a class="header-anchor" href="#installing-lingo" aria-label="Permalink to &quot;Installing LinGo&quot;">​</a></h1><p>We&#39;re now ready to install LinGo. Like most open source applications, there are 2 main ways to download it:</p><ol><li>Installing the binaries (executables).</li><li>Building from source</li></ol><p>I would personally recommend to install LinGo by downloading the executables, unless you want to analyse and modify the code yourself; in that case building from source is ideal since you can run and see the changes you&#39;re making immediately.</p><h2 id="installing-the-executables" tabindex="-1">Installing the executables <a class="header-anchor" href="#installing-the-executables" aria-label="Permalink to &quot;Installing the executables&quot;">​</a></h2><p>To install LinGo, go on the <a href="https://github.com/hsnborn22/LinGo" target="_blank" rel="noreferrer">github page</a>, then head over to &quot;releases&quot;; click on the &quot;tags&quot; button.</p><p><img src="https://raw.githubusercontent.com/hsnborn22/LinGo/main/imgs/download1.png" alt="help photo1"></p><p>Here you will see all the releases (versions) of the app; click on the latest one, and download the .zip file for your operating system. Once you have downloaded your zip file, unzip it whenever you want and you&#39;re ready to go; when you will go inside the folder, you will find an executable file named &quot;LinGo&quot;; run it and the application will start.</p><p><img src="https://raw.githubusercontent.com/hsnborn22/LinGo/main/imgs/download2.png" alt="help photo2"></p><p>If you wanted to download the app for windows, for example, you should download the windows.zip file. <img src="https://raw.githubusercontent.com/hsnborn22/LinGo/main/imgs/download3.png" alt="help photo3"></p><h2 id="building-from-source" tabindex="-1">Building from source: <a class="header-anchor" href="#building-from-source" aria-label="Permalink to &quot;Building from source:&quot;">​</a></h2><p>LinGo was written in Go, so in order to build it from source we&#39;ll need the Go compiler installed on our machine. In order to not make this documentation excessively long, I&#39;ll report here a <a href="https://go.dev/doc/install" target="_blank" rel="noreferrer">very easy-to-follow Go installation guide</a>, available for linux, macOS and windows.</p><p>This is, technically, all you need if you need to use this application for &quot;space-separated&quot; languages (i.e languages where tokens are separated by spaces) like english,finnish,hungarian,russian,serbian,indonesian,korean,french exc.</p><p>If you need this app to study what are known as &quot;scriptio continua&quot; languages (this means languages without spaces in between words), then you&#39;ll also need to install the python interpreter; for this <a href="https://realpython.com/installing-python/" target="_blank" rel="noreferrer">I&#39;ll also leave a guide here</a>.</p><p>We can now download the actual code: <a href="https://github.com/hsnborn22/LinGo" target="_blank" rel="noreferrer">head over to the repository</a>, and click on the green button &quot;&lt;&gt; code&quot; on the top.</p><p><img src="https://raw.githubusercontent.com/hsnborn22/LinGo/main/imgs/lingo1.png" alt="tutorial image"></p><p>Once you have clicked it, click the &quot;download zip&quot; button that should&#39;ve popped out.</p><p><img src="https://raw.githubusercontent.com/hsnborn22/LinGo/main/imgs/lingo2.png" alt="tutorial image2"></p><p>You should now have a zip of the code installed on your machine; unzip it wherever you want, and then enter the unzipped folder. Here, head over to the &quot;src&quot; folder. Here, you will have to run the following command inside of the terminal:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span></span></code></pre></div><p>This will install all the necessary golang dependencies that will allow the application to function correctly. If you&#39;re part of the <strong>european-like language group</strong> (i.e languages whose words are separated by spaces), then you&#39;re good to go: to start the application just type:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main.go</span></span></code></pre></div><h3 id="extra-steps-for-the-thai-japanese-khmer-chinese-group" tabindex="-1">Extra steps for the thai-japanese-khmer-chinese group. <a class="header-anchor" href="#extra-steps-for-the-thai-japanese-khmer-chinese-group" aria-label="Permalink to &quot;Extra steps for the thai-japanese-khmer-chinese group.&quot;">​</a></h3><p>If you belong to the second group, you will have to do some extra steps: first, head over to the &quot;scriptioContinuaTokenization&quot; folder, and run the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requirements.txt</span></span></code></pre></div><p>You are now (almost) done. To boot the application, stay in the &quot;scriptioContinuaTokenization&quot; folder: before booting the application, run the python server corresponding to your language (which can be server_thai.py, server_japanese.py or server_khmer.py) inside said folder. To run the server, use the command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">server-file-nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.py</span></span></code></pre></div><p>If you wanted to study thai, for example, it would be:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> server_thai.py</span></span></code></pre></div><p>(If your terminal says that &quot;python3&quot; is not recognized, don&#39;t panic; just check your environment variables).</p><p>You are now finally ready to boot the app and enjoy a nice language learning session; go back to the src folder (you can do that with the command cd .. in the terminal) and run the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main.go</span></span></code></pre></div><p>You are now in the program main menu. Remember to keep the python server running throughout the whole session.</p><h2 id="note-on-non-space-separated-languages" tabindex="-1">Note on non-space separated languages: <a class="header-anchor" href="#note-on-non-space-separated-languages" aria-label="Permalink to &quot;Note on non-space separated languages:&quot;">​</a></h2><p>If you are trying to study a non-space separated language, you will have to run the python server inside the scriptioContinuaTokenization foulder, as illustrated in the last step for the &quot;install from source&quot; guide, even if you installed the app with an executable.</p><h2 id="table-of-contents" tabindex="-1">Table of contents: <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents:&quot;">​</a></h2><nav class="table-of-contents"><ul><li><a href="#installing-the-executables">Installing the executables</a></li><li><a href="#building-from-source">Building from source:</a><ul><li><a href="#extra-steps-for-the-thai-japanese-khmer-chinese-group">Extra steps for the thai-japanese-khmer-chinese group.</a></li></ul></li><li><a href="#note-on-non-space-separated-languages">Note on non-space separated languages:</a></li><li><a href="#table-of-contents">Table of contents:</a></li><li><a href="#what-next">What next?</a></li></ul></nav><h2 id="what-next" tabindex="-1">What next? <a class="header-anchor" href="#what-next" aria-label="Permalink to &quot;What next?&quot;">​</a></h2><p><a href="/text.html">Loading texts with LinGo</a></p>',39),s=[i];function l(r,h,p,d,u,c){return a(),t("div",null,s)}const m=e(o,[["render",l]]);export{k as __pageData,m as default};