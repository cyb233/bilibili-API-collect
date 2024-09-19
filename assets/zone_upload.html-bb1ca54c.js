import{_ as t,o as n,c as s,e as a}from"./app-6ef24849.js";const p={},e=a(`<h1 id="分区当日投稿数" tabindex="-1"><a class="header-anchor" href="#分区当日投稿数" aria-hidden="true">#</a> 分区当日投稿数</h1><h2 id="获取分区当日投稿稿件数" tabindex="-1"><a class="header-anchor" href="#获取分区当日投稿稿件数" aria-hidden="true">#</a> 获取分区当日投稿稿件数</h2><blockquote><p>https://api.bilibili.com/x/web-interface/online</p></blockquote><p><em>请求方式：GET</em></p><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>region_count</td><td>obj</td><td>分区当日投稿稿件数信息</td><td></td></tr></tbody></table><p><code>data</code>中的<code>region_count</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>1</td><td>num</td><td>当日投稿稿件数-动画（主分区）</td><td></td></tr><tr><td>13</td><td>num</td><td>当日投稿稿件数-番剧（主分区）</td><td></td></tr><tr><td>167</td><td>num</td><td>当日投稿稿件数-国创（主分区）</td><td></td></tr><tr><td>3</td><td>num</td><td>当日投稿稿件数-音乐（主分区）</td><td></td></tr><tr><td>129</td><td>num</td><td>当日投稿稿件数-舞蹈（主分区）</td><td></td></tr><tr><td>4</td><td>num</td><td>当日投稿稿件数-游戏（主分区）</td><td></td></tr><tr><td>17</td><td>num</td><td>当日投稿稿件数-单机游戏</td><td></td></tr><tr><td>36</td><td>num</td><td>当日投稿稿件数-知识（主分区）</td><td></td></tr><tr><td>188</td><td>num</td><td>当日投稿稿件数-数码（主分区）</td><td></td></tr><tr><td>160</td><td>num</td><td>当日投稿稿件数-生活（主分区）</td><td></td></tr><tr><td>138</td><td>num</td><td>当日投稿稿件数-搞笑</td><td></td></tr><tr><td>76</td><td>num</td><td>当日投稿稿件数-美食圈</td><td></td></tr><tr><td>75</td><td>num</td><td>当日投稿稿件数-动物圈</td><td></td></tr><tr><td>119</td><td>num</td><td>当日投稿稿件数-鬼畜（主分区）</td><td></td></tr><tr><td>155</td><td>num</td><td>当日投稿稿件数-时尚（主分区）</td><td></td></tr><tr><td>202</td><td>num</td><td>当日投稿稿件数-资讯（主分区）</td><td></td></tr><tr><td>165</td><td>num</td><td>当日投稿稿件数-广告（主分区）</td><td></td></tr><tr><td>5</td><td>num</td><td>当日投稿稿件数-娱乐（主分区）</td><td></td></tr><tr><td>181</td><td>num</td><td>当日投稿稿件数-影视（主分区）</td><td></td></tr><tr><td>177</td><td>num</td><td>当日投稿稿件数-纪录片（主分区）</td><td></td></tr><tr><td>23</td><td>num</td><td>当日投稿稿件数-电影（主分区）</td><td></td></tr><tr><td>11</td><td>num</td><td>当日投稿稿件数-电视剧（主分区）</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/web-interface/online&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;region_count&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;1&quot;</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
            <span class="token property">&quot;11&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;119&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;129&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
            <span class="token property">&quot;13&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;138&quot;</span><span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span>
            <span class="token property">&quot;155&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
            <span class="token property">&quot;160&quot;</span><span class="token operator">:</span> <span class="token number">215</span><span class="token punctuation">,</span>
            <span class="token property">&quot;165&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;167&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">&quot;17&quot;</span><span class="token operator">:</span> <span class="token number">86</span><span class="token punctuation">,</span>
            <span class="token property">&quot;177&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;181&quot;</span><span class="token operator">:</span> <span class="token number">61</span><span class="token punctuation">,</span>
            <span class="token property">&quot;188&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token property">&quot;202&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;23&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;3&quot;</span><span class="token operator">:</span> <span class="token number">67</span><span class="token punctuation">,</span>
            <span class="token property">&quot;36&quot;</span><span class="token operator">:</span> <span class="token number">27</span><span class="token punctuation">,</span>
            <span class="token property">&quot;4&quot;</span><span class="token operator">:</span> <span class="token number">235</span><span class="token punctuation">,</span>
            <span class="token property">&quot;5&quot;</span><span class="token operator">:</span> <span class="token number">33</span><span class="token punctuation">,</span>
            <span class="token property">&quot;75&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
            <span class="token property">&quot;76&quot;</span><span class="token operator">:</span> <span class="token number">17</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,14),d=[e];function o(r,u){return n(),s("div",null,d)}const l=t(p,[["render",o],["__file","zone_upload.html.vue"]]);export{l as default};
