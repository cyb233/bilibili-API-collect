import{_ as e,r as p,o,c as d,a as n,b as s,d as c,e as t}from"./app-6ef24849.js";const r={},l=t(`<h1 id="私信" tabindex="-1"><a class="header-anchor" href="#私信" aria-hidden="true">#</a> 私信</h1><h2 id="未读私信数" tabindex="-1"><a class="header-anchor" href="#未读私信数" aria-hidden="true">#</a> 未读私信数</h2><blockquote><p>https://api.vc.bilibili.com/session_svr/v1/session_svr/single_unread</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie（SESSDATA）</p><p>注: 该接口默认每 2 分钟请求一次</p><p><strong>URL参数:</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>build</td><td>num</td><td>0</td><td>不必要</td><td>?</td></tr><tr><td>mobi_app</td><td>str</td><td>web</td><td>不必要</td><td>?</td></tr><tr><td>unread_type</td><td>num</td><td>0</td><td>不必要</td><td>?</td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为ok</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>unfollow_unread</td><td>num</td><td>未关注用户未读私信数</td><td></td></tr><tr><td>follow_unread</td><td>num</td><td>已关注用户未读私信数</td><td></td></tr><tr><td>unfollow_push_msg</td><td>num</td><td>未关注用户推送消息数?</td><td></td></tr><tr><td>dustbin_push_msg</td><td>num</td><td>已拦截的推送消息数?</td><td></td></tr><tr><td>dustbin_unread</td><td>num</td><td>已拦截的未读消息数?</td><td></td></tr><tr><td>biz_msg_unfollow_unread</td><td>num</td><td>未订阅的未读系统通知数?</td><td></td></tr><tr><td>biz_msg_follow_unread</td><td>num</td><td>已订阅的未读系统通知数?</td><td></td></tr><tr><td>custom_unread</td><td>num</td><td>自定义未读消息数?</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>以下信息代表了为未关注用户未读私信数为<code>1</code>条，已关注用户未读私信数为<code>6</code>条</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.vc.bilibili.com/session_svr/v1/session_svr/single_unread&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;unfollow_unread&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;follow_unread&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token property">&quot;unfollow_push_msg&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;dustbin_push_msg&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;dustbin_unread&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;biz_msg_unfollow_unread&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;biz_msg_follow_unread&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;custom_unread&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="发送私信-web端" tabindex="-1"><a class="header-anchor" href="#发送私信-web端" aria-hidden="true">#</a> 发送私信（web端）</h2><blockquote><p>https://api.vc.bilibili.com/web_im/v1/web_im/send_msg</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）</p><p><strong>正文参数（application/x-www-form-urlencoded）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>msg[sender_uid]</td><td>num</td><td>发送者mid</td><td>必要</td><td></td></tr><tr><td>msg[receiver_id]</td><td>num</td><td>接收者mid</td><td>必要</td><td></td></tr><tr><td>msg[receiver_type]</td><td>num</td><td>1</td><td>必要</td><td>固定为1</td></tr><tr><td>msg[msg_type]</td><td>num</td><td>消息类型</td><td>必要</td><td>1:发送文字<br>2:发送图片<br>5:撤回消息</td></tr><tr><td>msg[msg_status]</td><td>num</td><td>0</td><td>非必要</td><td></td></tr><tr><td>msg[dev_id]</td><td>string</td><td>372778FD-E359-461D-86A3-EA2BCC6FF52A</td><td>必要</td><td><strong>获取方式在下面</strong></td></tr><tr><td>msg[timestamp]</td><td>num</td><td>时间戳（秒）</td><td>必要</td><td></td></tr><tr><td>msg[new_face_version]</td><td>num</td><td>表情包版本</td><td>非必要</td><td><strong>详见下表</strong></td></tr><tr><td>msg[content]</td><td>发送文字时：str<br>撤回消息时：num</td><td>消息内容</td><td>必要</td><td><strong>详见下表</strong></td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token（位于cookie）</td><td>必要</td><td></td></tr></tbody></table><hr><p><strong>dev_id的获取</strong></p><p>以JS为例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> deviceid <span class="token operator">=</span> <span class="token string">&quot;xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx&quot;</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[xy]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> randomInt <span class="token operator">=</span> <span class="token number">16</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token string">&quot;x&quot;</span> <span class="token operator">===</span> name <span class="token operator">?</span> randomInt <span class="token operator">:</span> <span class="token number">3</span> <span class="token operator">&amp;</span> randomInt <span class="token operator">|</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),u={href:"https://github.com/andywang425/BLTH/blob/45fe93e31754ca8bf07059d46266398e787dbf45/B%E7%AB%99%E7%9B%B4%E6%92%AD%E9%97%B4%E6%8C%82%E6%9C%BA%E5%8A%A9%E6%89%8B.js#L6618",target:"_blank",rel:"noopener noreferrer"},i=t(`<p>以Java为例</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Util</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">getDevId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> b <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token char">&#39;0&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;3&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;4&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;5&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;6&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;7&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;8&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;9&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;C&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;D&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;E&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;F&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> s <span class="token operator">=</span> <span class="token string">&quot;xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx&quot;</span><span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token char">&#39;-&#39;</span> <span class="token operator">==</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token char">&#39;4&#39;</span> <span class="token operator">==</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">int</span> randomInt <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token number">16</span> <span class="token operator">*</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token char">&#39;x&#39;</span> <span class="token operator">==</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> b<span class="token punctuation">[</span>randomInt<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> b<span class="token punctuation">[</span><span class="token number">3</span> <span class="token operator">&amp;</span> randomInt <span class="token operator">|</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p><code>msg[content]</code>消息内容：</p><p>当发送文字时（<code>msg[msg_type]=1</code>）：</p><p>该参数为json序列字串</p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>content</td><td>str</td><td>私信内容</td><td></td></tr></tbody></table><p>当发送图片时（<code>msg[msg_type]=2</code>）：</p><p>该参数为json序列字串</p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td>url</td><td>str</td><td>图片url</td><td style="text-align:left;">默认为B站相簿图片上传通道<br>也可用三方图床</td></tr><tr><td>width</td><td>num</td><td>图片的宽</td><td style="text-align:left;">单位：像素（非必要）</td></tr><tr><td>height</td><td>num</td><td>图片的高</td><td style="text-align:left;">单位：像素（非必要）</td></tr><tr><td>type</td><td>str</td><td>图片格式</td><td style="text-align:left;">（非必要）</td></tr><tr><td>original</td><td>num</td><td>1</td><td style="text-align:left;"><strong>作用未知</strong>（非必要）</td></tr><tr><td>size</td><td>num</td><td>文件大小</td><td style="text-align:left;">单位：千字节（非必要）<br><strong>向上取整</strong></td></tr></tbody></table><p>当撤回消息时（<code>msg[msg_type]=5</code>）：</p><p>该参数为数值，为目标消息的<code>msg_key</code></p><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br></td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为ok</td></tr><tr><td>ttl</td><td>num</td><td></td><td>默认为1</td></tr><tr><td>data</td><td>obj</td><td>主体</td><td>出错时为空</td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>msg_key</td><td>num</td><td>消息唯一id</td><td></td></tr><tr><td>msg_content</td><td>str</td><td>发送的消息</td><td></td></tr><tr><td>key_hit_infos</td><td>obj</td><td></td><td>作用尚不明确</td></tr></tbody></table><p><strong>示例：</strong></p><p>给目标用户<code>mid=1</code>发一条文字私信：</p><blockquote><p>up主你好，</p><p>催更[doge]</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.vc.bilibili.com/web_im/v1/web_im/send_msg&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;msg[sender_uid]=293793435&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;msg[receiver_id]=1&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;msg[receiver_type] =1&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;msg[msg_type]=1&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;msg[dev_id] =372778FD-E359-461D-86A3-EA2BCC6FF52A&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;msg[timestamp] =1626181379&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;msg[content]={&quot;content&quot;:&quot;up主你好，\\n催更[doge]&quot;}&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
<span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
<span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;msg_key&quot;</span><span class="token operator">:</span><span class="token number">6984393491767669026</span><span class="token punctuation">,</span>
	<span class="token property">&quot;msg_content&quot;</span><span class="token operator">:</span><span class="token string">&quot;up主你好，\\n催更[doge]&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;key_hit_infos&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>给目标用户<code>mid=1</code>发一条图片私信：</p><blockquote><img src="https://i1.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg" style="zoom:50%;"></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.vc.bilibili.com/web_im/v1/web_im/send_msg&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;msg[sender_uid]=293793435&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;msg[receiver_id]=1&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;msg[receiver_type] =1&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;msg[msg_type]=2&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;msg[content]={&quot;url&quot;:https://i1.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg}&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf_token=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span><span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;msg_key&quot;</span><span class="token operator">:</span><span class="token number">6852570013146024354</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_gt_&quot;</span><span class="token operator">:</span><span class="token number">0</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="私信消息记录" tabindex="-1"><a class="header-anchor" href="#私信消息记录" aria-hidden="true">#</a> 私信消息记录</h2><blockquote><p>https://api.vc.bilibili.com/svr_sync/v1/svr_sync/fetch_session_msgs</p></blockquote><p><em>请求方式：GET</em></p><p>此接口有设计缺陷，能够获取已经撤回，无法显示（如 发送私信 中msg[msg_type]:3）的消息</p><p>认证方式：Cookie（SESSDATA）</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>sender_device_id</td><td>num</td><td>发送者设备</td><td>可选</td><td>1</td></tr><tr><td>talker_id</td><td>num</td><td>聊天对象的UID</td><td>必要</td><td>--------------</td></tr><tr><td>session_type</td><td>num</td><td>聊天对象的类型</td><td>必要</td><td>1为用户，2为粉丝团</td></tr><tr><td>size</td><td>num</td><td>列出消息条数</td><td>可选</td><td>默认是20，最大为200</td></tr><tr><td>build</td><td>num</td><td>未知</td><td>可选</td><td>默认是0</td></tr><tr><td>mobi_app</td><td>str</td><td>设备</td><td>可选</td><td>web</td></tr><tr><td>begin_seqno</td><td>num</td><td>开始的序列号</td><td>可选</td><td>默认0为全部</td></tr><tr><td>end_seqno</td><td>num</td><td>结束的序列号</td><td>可选</td><td>默认0为全部</td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功 <br>-400：请求错误</td></tr><tr><td>msg</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>array</td><td>数据列表</td><td></td></tr></tbody></table><p><code>data</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>messages</td><td>array</td><td>聊天记录列表</td><td></td></tr><tr><td>has_more</td><td>num</td><td>0</td><td></td></tr><tr><td>min_seqno</td><td>num</td><td>所有消息最小的序列号（最早）</td><td></td></tr><tr><td>max_seqno</td><td>num</td><td>所有消息最大的序列号（最晚）</td><td></td></tr><tr><td>e_infos</td><td>array</td><td>聊天表情列表</td><td></td></tr></tbody></table><p><code>messages</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>sender_uid</td><td>num</td><td>发送者uid</td><td>注意名称是sender_uid</td></tr><tr><td>receiver_type</td><td>num</td><td>与session_type对应</td><td>1为用户，2为粉丝团</td></tr><tr><td>receiver_id</td><td>num</td><td>接收者uid</td><td>注意名称是receiver_id</td></tr><tr><td>msg_type</td><td>num</td><td>消息类型</td><td>1:文字消息<br>2:图片消息<br>5:撤回的消息<br>12、13:通知</td></tr><tr><td>content</td><td>str</td><td>消息内容</td><td>此处存在设计缺陷</td></tr><tr><td>msg_seqno</td><td>num</td><td>消息序列号，保证按照时间顺序从小到大</td><td></td></tr><tr><td>timestamp</td><td>num</td><td>消息发送时间戳</td><td></td></tr><tr><td>at_uids</td><td>array</td><td>未知</td><td></td></tr><tr><td>msg_key</td><td>num</td><td>未知</td><td></td></tr><tr><td>msg_status</td><td>num</td><td>消息状态</td><td>0</td></tr><tr><td>notify_code</td><td>str</td><td>未知</td><td></td></tr><tr><td>new_face_version</td><td>num</td><td>表情包版本</td><td>0或者没有是旧版，此时b站会自动转换成新版表情包，例如<code>[doge]</code> -&gt; <code>[tv_doge]</code>；1是新版</td></tr></tbody></table><p><code>e_infos</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>text</td><td>str</td><td>表情名称</td><td></td></tr><tr><td>uri</td><td>str</td><td>表情链接</td><td></td></tr><tr><td>size</td><td>num</td><td>表情尺寸</td><td>1</td></tr></tbody></table><p><strong>示例：</strong></p><p>获取与目标用户<code>mid=123</code>私信记录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.vc.bilibili.com/svr_sync/v1/svr_sync/fetch_session_msgs?sender_device_id=1&amp;talker_id=123&amp;session_type=1&amp;size=20&amp;build=0&amp;mobi_app=web&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;messages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;sender_uid&quot;</span><span class="token operator">:</span> <span class="token number">2239814</span><span class="token punctuation">,</span>
                <span class="token property">&quot;receiver_type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;receiver_id&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
                <span class="token property">&quot;msg_type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{\\&quot;content\\&quot;:\\&quot;[口罩]\\&quot;}&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;msg_seqno&quot;</span><span class="token operator">:</span> <span class="token number">309675413389322</span><span class="token punctuation">,</span>
                <span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">1654154093</span><span class="token punctuation">,</span>
                <span class="token property">&quot;at_uids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token number">0</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;msg_key&quot;</span><span class="token operator">:</span> <span class="token number">7104537732714964358</span><span class="token punctuation">,</span>
                <span class="token property">&quot;msg_status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;notify_code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;new_face_version&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;sender_uid&quot;</span><span class="token operator">:</span> <span class="token number">2239814</span><span class="token punctuation">,</span>
                <span class="token property">&quot;receiver_type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;receiver_id&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
                <span class="token property">&quot;msg_type&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{\\&quot;content\\&quot;:\\&quot;1\\&quot;}&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;msg_seqno&quot;</span><span class="token operator">:</span> <span class="token number">308302399586307</span><span class="token punctuation">,</span>
                <span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span> <span class="token number">1654072255</span><span class="token punctuation">,</span>
                <span class="token property">&quot;at_uids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token number">0</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;msg_key&quot;</span><span class="token operator">:</span> <span class="token number">7104186240789226795</span><span class="token punctuation">,</span>
                <span class="token property">&quot;msg_status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;notify_code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;has_more&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;min_seqno&quot;</span><span class="token operator">:</span> <span class="token number">308188515844097</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max_seqno&quot;</span><span class="token operator">:</span> <span class="token number">309675413389322</span><span class="token punctuation">,</span>
        <span class="token property">&quot;e_infos&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;[口罩]&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/emote/3ad2f66b151496d2a5fb0a8ea75f32265d778dd3.png&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,48);function k(m,b){const a=p("ExternalLinkIcon");return o(),d("div",null,[l,n("p",null,[s("代码来自 "),n("a",u,[s("andywang425/BLTH"),c(a)])]),i])}const h=e(r,[["render",k],["__file","private_msg.html.vue"]]);export{h as default};
