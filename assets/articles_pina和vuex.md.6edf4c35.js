import{_ as s,o as a,c as n,U as p}from"./chunks/framework.76b79cb5.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/pina和vuex.md","filePath":"articles/pina和vuex.md"}'),l={name:"articles/pina和vuex.md"},e=p(`<p>Pinia和Vuex一样都是是vue的全局状态管理器。其实Pinia就是Vuex5，只不过为了尊重原作者的贡献就沿用了这个看起来很甜的名字Pinia。</p><p>本文将通过Vue3的形式对两者的不同实现方式进行对比，让你在以后工作中无论使用到Pinia还是Vuex的时候都能够游刃有余。</p><p>既然我们要对比两者的实现方式，那么我们肯定要先在我们的Vue3项目中引入这两个状态管理器（实际项目中千万不要即用Vuex又用Pinia，不然你会被同事请去喝茶的。下面就让我们看下它们的使用方式吧</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><ul><li>Vuex</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm i vuex -S</span></span></code></pre></div><ul><li>Pinia</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm i pinia -S</span></span></code></pre></div><h2 id="挂载" tabindex="-1">挂载 <a class="header-anchor" href="#挂载" aria-label="Permalink to &quot;挂载&quot;">​</a></h2><h3 id="vuex" tabindex="-1">Vuex <a class="header-anchor" href="#vuex" aria-label="Permalink to &quot;Vuex&quot;">​</a></h3><p>在src目录下新建vuexStore,实际项目中你只需要建一个store目录即可，由于我们需要两种状态管理器，所以需要将其分开并创建两个store目录</p><p>新建vuexStore/index.js</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { createStore } from &#39;vuex&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default createStore({</span></span>
<span class="line"><span style="color:#A6ACCD;">    //全局state，类似于vue种的data</span></span>
<span class="line"><span style="color:#A6ACCD;">    state() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        vuexmsg: &quot;hello vuex&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: &quot;xiaoyue&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      };</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    //修改state函数</span></span>
<span class="line"><span style="color:#A6ACCD;">    mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    //提交的mutation可以包含任意异步操作</span></span>
<span class="line"><span style="color:#A6ACCD;">    actions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    //类似于vue中的计算属性</span></span>
<span class="line"><span style="color:#A6ACCD;">    getters: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    //将store分割成模块（module）,应用较大时使用</span></span>
<span class="line"><span style="color:#A6ACCD;">    modules: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><p>main.js引入</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import store from &#39;@/vuexStore&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">createApp(App).use(store).mount(&#39;#app&#39;)</span></span></code></pre></div><p>App.vue测试</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { useStore } from &#39;vuex&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let vuexStore = useStore()</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(vuexStore.state.vuexmsg); //hello vuex</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span></code></pre></div><p>页面正常打印hello vuex说明我们的Vuex已经挂载成功了</p><h3 id="pinia" tabindex="-1">Pinia <a class="header-anchor" href="#pinia" aria-label="Permalink to &quot;Pinia&quot;">​</a></h3><ul><li>main.js引入</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { createApp } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import App from &quot;./App.vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import {createPinia} from &#39;pinia&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const pinia = createPinia()</span></span>
<span class="line"><span style="color:#A6ACCD;">createApp(App).use(pinia).mount(&quot;#app&quot;);</span></span></code></pre></div><ul><li>创建Store</li></ul><p>src下新建piniaStore/storeA.js</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { defineStore } from &quot;pinia&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const storeA = defineStore(&quot;storeA&quot;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  state: () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      piniaMsg: &quot;hello pinia&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  getters: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">  actions: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span></code></pre></div><ul><li>App.vue使用</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { storeA } from &#39;@/piniaStore/storeA&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let piniaStoreA = storeA()</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(piniaStoreA.piniaMsg); //hello pinia</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span></code></pre></div><p>从这里我们可以看出pinia中没有了mutations和modules，pinia不必以嵌套（通过modules引入）的方式引入模块，因为它的每个store便是一个模块，如storeA，storeB... 。 在我们使用Vuex的时候每次修改state的值都需要调用mutations里的修改函数（下面会说到），因为Vuex需要追踪数据的变化，这使我们写起来比较繁琐。而pinia则不再需要mutations，同步异步都可在actions进行操作，至于它没有了mutations具体是如何最终到state变化的，这里我们不过多深究,<s>大概好像应该是通过hooks回调的形式解决的把（我也没研究过，瞎猜的</s>。</p><h2 id="修改状态" tabindex="-1">修改状态 <a class="header-anchor" href="#修改状态" aria-label="Permalink to &quot;修改状态&quot;">​</a></h2><p>获取state的值从上面我们已经可以一目了然的看到了，下面让我们看看他俩修改state的方法吧</p><h3 id="vuex-1" tabindex="-1">vuex <a class="header-anchor" href="#vuex-1" aria-label="Permalink to &quot;vuex&quot;">​</a></h3><p>vuex在组件中直接修改state，如App.vue</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;{{vuexStore.state.vuexmsg}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { useStore } from &#39;vuex&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let vuexStore = useStore()</span></span>
<span class="line"><span style="color:#A6ACCD;">vuexStore.state.vuexmsg = &#39;hello juejin&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(vuexStore.state.vuexmsg)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span></code></pre></div><p>可以看出我们是可以直接在组件中修改state的而且还是响应式的，但是如果这样做了，vuex不能够记录每一次state的变化记录，影响我们的调试。当vuex开启严格模式的时候，直接修改state会抛出错误，所以官方建议我们开启严格模式，所有的state变更都在vuex内部进行，在mutations进行修改。例如vuexStore/index.js:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { createStore } from &quot;vuex&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default createStore({</span></span>
<span class="line"><span style="color:#A6ACCD;">  strict: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  //全局state，类似于vue种的data</span></span>
<span class="line"><span style="color:#A6ACCD;">  state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    vuexmsg: &quot;hello vuex&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  //修改state函数</span></span>
<span class="line"><span style="color:#A6ACCD;">  mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setVuexMsg(state, data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      state.vuexmsg = data;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  //提交的mutation可以包含任意异步操作</span></span>
<span class="line"><span style="color:#A6ACCD;">  actions: {},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  //类似于vue中的计算属性</span></span>
<span class="line"><span style="color:#A6ACCD;">  getters: {},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  //将store分割成模块（module）,应用较大时使用</span></span>
<span class="line"><span style="color:#A6ACCD;">  modules: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span></code></pre></div><p>当我们需要修改vuexmsg的时候需要提交setVuexMsg方法，如App.vue</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;{{ vuexStore.state.vuexmsg }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { useStore } from &#39;vuex&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let vuexStore = useStore()</span></span>
<span class="line"><span style="color:#A6ACCD;">vuexStore.commit(&#39;setVuexMsg&#39;, &#39;hello juejin&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(vuexStore.state.vuexmsg) //hello juejin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span></code></pre></div><p>或者我们可以在actions中进行提交mutations修改state:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { createStore } from &quot;vuex&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default createStore({</span></span>
<span class="line"><span style="color:#A6ACCD;">  strict: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  //全局state，类似于vue种的data</span></span>
<span class="line"><span style="color:#A6ACCD;">  state() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      vuexmsg: &quot;hello vuex&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  //修改state函数</span></span>
<span class="line"><span style="color:#A6ACCD;">  mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setVuexMsg(state, data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      state.vuexmsg = data;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  //提交的mutation可以包含任意异步操作</span></span>
<span class="line"><span style="color:#A6ACCD;">  actions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    async getState({ commit }) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      //const result = await xxxx 假设这里进行了请求并拿到了返回值</span></span>
<span class="line"><span style="color:#A6ACCD;">      commit(&quot;setVuexMsg&quot;, &quot;hello juejin&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span></code></pre></div><p>组件中使用dispatch进行分发actions</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;{{ vuexStore.state.vuexmsg }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { useStore } from &#39;vuex&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let vuexStore = useStore()</span></span>
<span class="line"><span style="color:#A6ACCD;">vuexStore.dispatch(&#39;getState&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span></code></pre></div><p>一般来说，vuex中的流程是首先actions一般放异步函数，拿请求后端接口为例，当后端接口返回值的时候，actions中会提交一个mutations中的函数，然后这个函数对vuex中的状态（state）进行一个修改，组件中再渲染这个状态，从而实现整个数据流程都在vuex内部进行便于检测。直接看图，一目了然</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/27f85d7d22aa44e1a01cd6f4121afd86~tplv-k3u1fbpfcp-watermark.image?" alt="1f0c7f44205b2a793829d22509fac74.png"></p><h3 id="pinia-1" tabindex="-1">Pinia <a class="header-anchor" href="#pinia-1" aria-label="Permalink to &quot;Pinia&quot;">​</a></h3><ul><li>直接修改</li></ul><p>相比于Vuex，Pinia是可以直接修改状态的，并且调试工具能够记录到每一次state的变化，如App.vue</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;{{ piniaStoreA.piniaMsg }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { storeA } from &#39;@/piniaStore/storeA&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let piniaStoreA = storeA()</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(piniaStoreA.piniaMsg); //hello pinia</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">piniaStoreA.piniaMsg = &#39;hello juejin&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(piniaStoreA.piniaMsg); //hello juejin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span></code></pre></div><ul><li>$patch</li></ul><p>使用$patch方法可以修改多个state中的值,比如我们在piniaStore/storeA.js中的state增加一个name</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { defineStore } from &quot;pinia&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const storeA = defineStore(&quot;storeA&quot;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  state: () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      piniaMsg: &quot;hello pinia&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      name: &quot;xiaoyue&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  getters: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">  actions: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span></code></pre></div><p>然后我们在App.vue中进行修改这两个state</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { storeA } from &#39;@/piniaStore/storeA&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let piniaStoreA = storeA()</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(piniaStoreA.name); //xiaoyue</span></span>
<span class="line"><span style="color:#A6ACCD;">piniaStoreA.$patch({</span></span>
<span class="line"><span style="color:#A6ACCD;">  piniaMsg: &#39;hello juejin&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;daming&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(piniaStoreA.name);//daming</span></span></code></pre></div><p>当然也是支持修改单个状态的如</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">piniaStoreA.$patch({</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;daming&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><p>$patch还可以使用函数的方式进行修改状态</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { storeA } from &#39;@/piniaStore/storeA&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let piniaStoreA = storeA()</span></span>
<span class="line"><span style="color:#A6ACCD;">cartStore.$patch((state) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  state.name = &#39;daming&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  state.piniaMsg = &#39;hello juejin&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><ul><li>在actions中进行修改</li></ul><p>不同于Vuex的是，Pinia去掉了mutations，所以在actions中修改state就行Vuex在mutations修改state一样。其实这也是我比较推荐的一种修改状态的方式，就像上面说的，这样可以实现整个数据流程都在状态管理器内部，便于管理。</p><p>在piniaStore/storeA.js的actions添加一个修改name的函数</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { defineStore } from &quot;pinia&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export const storeA = defineStore(&quot;storeA&quot;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  state: () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      piniaMsg: &quot;hello pinia&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      name: &quot;xiao yue&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  actions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setName(data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.name = data;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span></code></pre></div><p>组件App.vue中调用不需要再使用dispatch函数，直接调用store的方法即可</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { storeA } from &#39;@/piniaStore/storeA&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let piniaStoreA = storeA()</span></span>
<span class="line"><span style="color:#A6ACCD;">piniaStoreA.setName(&#39;daming&#39;)</span></span></code></pre></div><ul><li>重置state</li></ul><p>Pinia可以使用$reset将状态重置为初始值</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { storeA } from &#39;@/piniaStore/storeA&#39; </span></span>
<span class="line"><span style="color:#A6ACCD;">let piniaStoreA = storeA()</span></span>
<span class="line"><span style="color:#A6ACCD;">piniaStoreA.$reset()</span></span></code></pre></div><h2 id="pinia解构-storetorefs" tabindex="-1">Pinia解构(storeToRefs) <a class="header-anchor" href="#pinia解构-storetorefs" aria-label="Permalink to &quot;Pinia解构(storeToRefs)&quot;">​</a></h2><p>当我们组件中需要用到state中多个参数时，使用解构的方式取值往往是很方便的，但是传统的ES6解构会使state失去响应式，比如组件App.vue,我们先解构取得name值，然后再去改变name值，然后看页面是否变化</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;{{ name }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { storeA } from &#39;@/piniaStore/storeA&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let piniaStoreA = storeA()</span></span>
<span class="line"><span style="color:#A6ACCD;">let { piniaMsg, name } = piniaStoreA</span></span>
<span class="line"><span style="color:#A6ACCD;">piniaStoreA.$patch({</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;daming&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span></code></pre></div><p>浏览器展示如下</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e93cdd9d0c7c44a1b8724560bc91a40a~tplv-k3u1fbpfcp-watermark.image?" alt="1657813193335.jpg"></p><p>我们可以发现浏览器并没有更新页面为daming</p><p>为了解决这个问题，Pinia提供了一个结构方法<strong>storeToRefs</strong>，我们将组件App.vue使用<strong>storeToRefs</strong>解构</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;{{ name }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { storeA } from &#39;@/piniaStore/storeA&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { storeToRefs } from &#39;pinia&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let piniaStoreA = storeA()</span></span>
<span class="line"><span style="color:#A6ACCD;">let { piniaMsg, name } = storeToRefs(piniaStoreA)</span></span>
<span class="line"><span style="color:#A6ACCD;">piniaStoreA.$patch({</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;daming&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span></code></pre></div><p>再看下页面变化</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/74379adc42c04fa0b9c4379abeda444b~tplv-k3u1fbpfcp-watermark.image?" alt="1657813178903.jpg"></p><p>我们发现页面已经被更新成daming了</p><h2 id="getters" tabindex="-1">getters <a class="header-anchor" href="#getters" aria-label="Permalink to &quot;getters&quot;">​</a></h2><p>其实Vuex中的getters和Pinia中的getters用法是一致的，用于自动监听对应state的变化，从而动态计算返回值(和vue中的计算属性差不多),并且getters的值也具有缓存特性</p><h3 id="pinia-2" tabindex="-1">Pinia <a class="header-anchor" href="#pinia-2" aria-label="Permalink to &quot;Pinia&quot;">​</a></h3><p>我们先将piniaStore/storeA.js改为</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { defineStore } from &quot;pinia&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const storeA = defineStore(&quot;storeA&quot;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">  state: () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      count1: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">      count2: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  getters: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    sum() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;我被调用了!&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      return this.count1 + this.count2;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span></code></pre></div><p>然后在组件App.vue中获取sum</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;{{ piniaStoreA.sum }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { storeA } from &#39;@/piniaStore/storeA&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let piniaStoreA = storeA()</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(piniaStoreA.sum) //3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span></code></pre></div><p>让我们来看下什么是缓存特性。首先我们在组件多次访问sum再看下控制台打印</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { storeA } from &#39;@/piniaStore/storeA&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let piniaStoreA = storeA()</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(piniaStoreA.sum)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(piniaStoreA.sum)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(piniaStoreA.sum)</span></span>
<span class="line"><span style="color:#A6ACCD;">piniaStoreA.count1 = 2</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(piniaStoreA.sum)</span></span></code></pre></div><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a444da11d25342f693333c8e47e94f98~tplv-k3u1fbpfcp-watermark.image?" alt="1657814372565.jpg"></p><p>从打印结果我们可以看出只有在首次使用用或者当我们改变sum所依赖的值的时候，getters中的sum才会被调用</p><h3 id="vuex-2" tabindex="-1">Vuex <a class="header-anchor" href="#vuex-2" aria-label="Permalink to &quot;Vuex&quot;">​</a></h3><p>Vuex中的getters使用和Pinia的使用方式类似，就不再进行过多说明,写法如下vuexStore/index.js</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { createStore } from &quot;vuex&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default createStore({</span></span>
<span class="line"><span style="color:#A6ACCD;">  strict: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  //全局state，类似于vue种的data</span></span>
<span class="line"><span style="color:#A6ACCD;">  state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    count1: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    count2: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  //类似于vue中的计算属性</span></span>
<span class="line"><span style="color:#A6ACCD;">  getters: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    sum(state){</span></span>
<span class="line"><span style="color:#A6ACCD;">      return state.count1 + state.count2</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span></code></pre></div><h2 id="modules" tabindex="-1">modules <a class="header-anchor" href="#modules" aria-label="Permalink to &quot;modules&quot;">​</a></h2><p>如果项目比较大，使用单一状态库，项目的状态库就会集中到一个大对象上，显得十分臃肿难以维护。所以Vuex就允许我们将其分割成模块（modules），每个模块都拥有自己state，mutations,actions...。而Pinia每个状态库本身就是一个模块。</p><h3 id="pinia-3" tabindex="-1">Pinia <a class="header-anchor" href="#pinia-3" aria-label="Permalink to &quot;Pinia&quot;">​</a></h3><p>Pinia没有modules，如果想使用多个store，直接定义多个store传入不同的id即可，如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { defineStore } from &quot;pinia&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const storeA = defineStore(&quot;storeA&quot;, {...});</span></span>
<span class="line"><span style="color:#A6ACCD;">export const storeB = defineStore(&quot;storeB&quot;, {...});</span></span>
<span class="line"><span style="color:#A6ACCD;">export const storeC = defineStore(&quot;storeB&quot;, {...});</span></span></code></pre></div><h3 id="vuex-3" tabindex="-1">Vuex <a class="header-anchor" href="#vuex-3" aria-label="Permalink to &quot;Vuex&quot;">​</a></h3><p>一般来说每个module都会新建一个文件，然后再引入这个总的入口index.js中，这里为了方便就写在了一起</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { createStore } from &quot;vuex&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const moduleA = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  state: () =&gt; ({ </span></span>
<span class="line"><span style="color:#A6ACCD;">    count:1</span></span>
<span class="line"><span style="color:#A6ACCD;">   }),</span></span>
<span class="line"><span style="color:#A6ACCD;">  mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setCount(state, data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      state.count = data;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  actions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    getuser() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      //do something</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  getters: { ... }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const moduleB = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  state: () =&gt; ({ ... }),</span></span>
<span class="line"><span style="color:#A6ACCD;">  mutations: { ... },</span></span>
<span class="line"><span style="color:#A6ACCD;">  actions: { ... }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default createStore({</span></span>
<span class="line"><span style="color:#A6ACCD;">  strict: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  //全局state，类似于vue种的data</span></span>
<span class="line"><span style="color:#A6ACCD;">  state() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      vuexmsg: &quot;hello vuex&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      name: &quot;xiaoyue&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  modules: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    moduleA,</span></span>
<span class="line"><span style="color:#A6ACCD;">    moduleB</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span></code></pre></div><p>使用moduleA</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { useStore } from &#39;vuex&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let vuexStore = useStore()</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(vuexStore.state.moduleA.count) //1</span></span>
<span class="line"><span style="color:#A6ACCD;">vuexStore.commit(&#39;setCount&#39;, 2)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(vuexStore.state.moduleA.count) //2</span></span>
<span class="line"><span style="color:#A6ACCD;">vuexStore.dispatch(&#39;getuser&#39;)</span></span></code></pre></div><p>一般我们为了防止提交一些mutation或者actions中的方法重名，modules一般会采用命名空间的方式 <strong>namespaced: true</strong> 如moduleA：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const moduleA = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  namespaced: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  state: () =&gt; ({</span></span>
<span class="line"><span style="color:#A6ACCD;">    count: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">  }),</span></span>
<span class="line"><span style="color:#A6ACCD;">  mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setCount(state, data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      state.count = data;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  actions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    getuser() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      //do something</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>此时如果我们再调用setCount或者getuser</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">vuexStore.commit(&#39;moduleA/setCount&#39;, 2)</span></span>
<span class="line"><span style="color:#A6ACCD;">vuexStore.dispatch(&#39;moduleA/getuser&#39;)</span></span></code></pre></div><h2 id="写在最后" tabindex="-1">写在最后 <a class="header-anchor" href="#写在最后" aria-label="Permalink to &quot;写在最后&quot;">​</a></h2><p>通过以上案例我们会发现Pinia比Vuex简洁许多，所以如果我们的项目是新项目的话建议使用Pinia。 当然如果我们的项目体量不是很大，我们其实没必要引入vue的状态管理库，盲目的使用反而会徒增心智负担。</p><p>如果感觉这篇文章对你有帮助的话请点个赞吧orz。</p><p>我正在参与掘金技术社区创作者签约计划招募活动，<a href="https://juejin.cn/post/7112770927082864653" title="https://juejin.cn/post/7112770927082864653" target="_blank" rel="noreferrer">点击链接报名投稿</a>。</p>`,107),t=[e];function o(c,i,r,A,C,u){return a(),n("div",null,t)}const d=s(l,[["render",o]]);export{D as __pageData,d as default};
