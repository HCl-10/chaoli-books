# 关于超理
超理学是什么？所谓超理，就是在一定的科学基础上，提出明显荒谬的理论或所谓实验结果，从而达到恶搞、创意的效果。因此，在本贴吧（[超理吧](https://tieba.baidu.com/f?ie=utf-8&kw=%E8%B6%85%E7%90%86)）发布的大多数疑似学术研究的内容都是不可靠的。

该运动主要存在于化学学科，但现在已经几乎扩散到所有的理科。目前，我们还打算向着超文进攻，开创超文哲学，超文学等学科领域。

超理，最早是百度化学贴吧某知名人士“超级理科生”的用户名缩写。该用户过去常在化学贴吧捣乱，发布一些看似恶搞，其实可能是因为知识欠缺和盲目自大引起的内容，严重干扰了正常提问回答的秩序。他的著名错误盐论有：超盐酸（他本人称，该物质为 10 个盐酸分子通过“魔键”构成的）、“𨭦”元素（已经超出周期表）、碱性的酸雨、原子核断裂成粉末吸引电子等。该人的真实姓名可能是**赵明毅**（在超理贴中常出现该名字）。后来，他于 2007 年左右淡出，超理一词的含义演变为“发布像赵明毅那样的盐论”的含义，并且取与“物理学”、“生理学”等相谐的效果，把这些恶搞行为称为“超理学”。

如今，在超理吧发布超理帖子，不仅是对知识的恶搞，更是对赵明毅的再次恶搞。虽然超理学并不是科学，但是超理学也需要与伪科学划清界限。超理学的目的只是为了恶搞，超理贴很容易和一般帖子分辨开来。如标题中注明超理，在帖子中出现大量不切实际的说法或出现赵明毅等字样等。原则上，在学术问题的领域上，如一般讨论贴或百度百科等地方不出现超理内容。而伪科学主要是用于蒙混过关，欺骗其他人来取得某种利益。伪科学故意使得自身与科学难以区分。超理贴吧只讨论超理内容，原则上对于伪科学内容不发布、不讨论，但允许对其进行适当恶搞、超理等。

于是，这就是超理学。要走近超理，大家可以先看看超理贴，找找赵明毅（以及其他人）的事迹（精华区：时代锑星）等，然后可以尝试发布自己的超理学研究成果。如果是有创意的原创超理，就申请精华吧。欢迎加入本吧会员。

下面列出一些超理的特征，仅供参考。

-   出现「强一亿倍」或更多的（魔酸除外）；

-   含“锑”的（魔酸除外）；

-   含有闻所未闻反应条件的，如“发功”；

-   明显有悖于常理的，如“酸性草木灰”；

-   物质化学式明显为某单词的，如“钡碘氘铀”（$\rm{BaIDU}$）；

-   化学方程式将元素符号重组的，如“铜变金”（$\rm{Cu + Ar = Cr + Au}$）；

-   看到某“科学家”当主编达 200 年、2000 年的，肯定是超理。

最后，建议大家不要轻信百度百科的内容。由于权限、政治、商业、积分等等原因，百度百科大部分词条的质量都不尽如人意，这一点在理工、政治类条目上尤为显著。

因此我建议大家使用 Google 搜索，并尽量使用维鸡百科作为参考。缺点是，维百中许多中文条目不够详尽。如果对你的外语水平有自信，你也可以看外语版的维百，目前以英文和德文为佳。

<p align="right">—— 摘抄自《超理教材 九年级全一册》编者的话</p>

本项目受 [OI Wiki](https://oi-wiki.org/) 的启发，在编写过程中参考了诸多资料，在此一并致谢。

## 调色板

### 颜色主题

点击色块可更换颜色主题，默认为 `default`

<div class="tx-switch">
  <button data-md-color-scheme="default"><code>default</code></button>
  <button data-md-color-scheme="slate"><code>slate</code></button>
</div>

<script>
  var buttons = document.querySelectorAll("button[data-md-color-scheme]")
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      var attr = this.getAttribute("data-md-color-scheme")
      document.body.setAttribute("data-md-color-scheme", attr)
      var name = document.querySelector("#__code_0 code span:nth-child(7)")
      localStorage.setItem("data-md-color-scheme", attr)
    })
  })
</script>

### 主色

点击色块可更换主题的主色，默认为 `white`

<style>
  .md-typeset button[data-md-color-primary] > code {
    color: var(--md-code-bg-color);
    background-color: var(--md-primary-fg-color);
  }
</style>

<div class="tx-switch">
  <button data-md-color-primary="red"><code>red</code></button>
  <button data-md-color-primary="pink"><code>pink</code></button>
  <button data-md-color-primary="purple"><code>purple</code></button>
  <button data-md-color-primary="deep-purple"><code>deep purple</code></button>
  <button data-md-color-primary="indigo"><code>indigo</code></button>
  <button data-md-color-primary="blue"><code>blue</code></button>
  <button data-md-color-primary="light-blue"><code>light blue</code></button>
  <button data-md-color-primary="cyan"><code>cyan</code></button>
  <button data-md-color-primary="teal"><code>teal</code></button>
  <button data-md-color-primary="green"><code>green</code></button>
  <button data-md-color-primary="light-green"><code>light green</code></button>
  <button data-md-color-primary="lime"><code>lime</code></button>
  <button data-md-color-primary="yellow"><code>yellow</code></button>
  <button data-md-color-primary="amber"><code>amber</code></button>
  <button data-md-color-primary="orange"><code>orange</code></button>
  <button data-md-color-primary="deep-orange"><code>deep orange</code></button>
  <button data-md-color-primary="brown"><code>brown</code></button>
  <button data-md-color-primary="grey"><code>grey</code></button>
  <button data-md-color-primary="blue-grey"><code>blue grey</code></button>
  <button data-md-color-primary="black"><code>black</code></button>
  <button data-md-color-primary="white"><code>white</code></button>
</div>

<script>
  var buttons = document.querySelectorAll("button[data-md-color-primary]")
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      var attr = this.getAttribute("data-md-color-primary")
      document.body.setAttribute("data-md-color-primary", attr)
      var name = document.querySelector("#__code_2 code span:nth-child(7)")
      localStorage.setItem("data-md-color-primary", attr)
    })
  })
</script>

### 辅助色

点击色块更换主题的辅助色，默认为 `red`

<style>
  .md-typeset button[data-md-color-accent] > code {
    background-color: var(--md-code-bg-color);
    color: var(--md-accent-fg-color);
  }
</style>

<div class="tx-switch">
  <button data-md-color-accent="red"><code>red</code></button>
  <button data-md-color-accent="pink"><code>pink</code></button>
  <button data-md-color-accent="purple"><code>purple</code></button>
  <button data-md-color-accent="deep-purple"><code>deep purple</code></button>
  <button data-md-color-accent="indigo"><code>indigo</code></button>
  <button data-md-color-accent="blue"><code>blue</code></button>
  <button data-md-color-accent="light-blue"><code>light blue</code></button>
  <button data-md-color-accent="cyan"><code>cyan</code></button>
  <button data-md-color-accent="teal"><code>teal</code></button>
  <button data-md-color-accent="green"><code>green</code></button>
  <button data-md-color-accent="light-green"><code>light green</code></button>
  <button data-md-color-accent="lime"><code>lime</code></button>
  <button data-md-color-accent="yellow"><code>yellow</code></button>
  <button data-md-color-accent="amber"><code>amber</code></button>
  <button data-md-color-accent="orange"><code>orange</code></button>
  <button data-md-color-accent="deep-orange"><code>deep orange</code></button>
</div>

<script>
  var buttons = document.querySelectorAll("button[data-md-color-accent]")
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      var attr = this.getAttribute("data-md-color-accent")
      document.body.setAttribute("data-md-color-accent", attr)
      var name = document.querySelector("#__code_3 code span:nth-child(7)")
      localStorage.setItem("data-md-color-accent", attr)
    })
  })
</script>
