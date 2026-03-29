<template>
  <div id="LikeTabCon">
    <div id="bigBronzeMirror" @click="changeFM(0)"></div>
    <div id="smallBronzeMirror" @click="changeFM(1)"></div>
    <div id="likeTabs">
      <h5
        v-for="item in fmARR"
        :key="item.id"
        :class="{ isFmActive: item.id == fmActive }"
        @click="handelToogel(item.id)"
      >
        {{ item.text }}
      </h5>
    </div>
    <button id="returnBtn" @click="router.push('/')">返 回</button>
  </div>

  <div v-show="fmActive == 0" class="likeBook">
    <span v-for="item in bookArr" :key="item.id">
      <img :src="item.imgSrc" />
      <h4>{{ item.bookName }}</h4>
      <h5>{{ item.author }}</h5>
      <h6>{{ item.score }}</h6>
      <h5>{{ item.descri }}</h5>
    </span>
  </div>
  <div v-show="fmActive == 1" class="likeNote">
    <div class="box" v-for="value in noteArr" :key="value.id">
      <button>▽</button>
      <h3>开发笔记</h3>
      <div>{{ value.noteTitle }}</div>
      <h3>原因分析</h3>
      <div>{{ value.reason }}</div>
      <h3>解决方法</h3>
      <div>{{ value.solution }}</div>
    </div>
  </div>
  <div v-show="fmActive == 2" class="likeMain"></div>
  <div v-show="fmActive == 3" class="likeMain"></div>
</template>

<script setup>
import router from "@/router";
import { ref } from "vue";
import { onMounted } from "vue";

let fmActive = ref(0);
const fmARR = [
  {
    id: 0,
    text: "书单",
    imgSrc:
      "https://i0.hdslb.com/bfs/article/86cdd7bfa8a596da0983fa0112c554a0cfaae684.jpg@progressive.webp",
  },
  {
    id: 1,
    text: "笔记",
    imgSrc:
      "http://p1.music.126.net/aPRt3wBunudMnbKyPXfXAQ==/109951169439997418.jpg?imageView&quality=89",
  },
  {
    id: 2,
    text: "文章栏",
    imgSrc:
      "https://i0.hdslb.com/bfs/article/7959a846e02699f2421fb1f79ef60c620c7f1f9d.png@1256w_708h_!web-article-pic.webp",
  },
  {
    id: 3,
    text: "工具栏",
    imgSrc:
      "http://p1.music.126.net/qKWuuYVN2XxJ-ASkOF1zKA==/109951169438953008.jpg?imageView&quality=89",
  },
];
const bookArr = [
  {
    id: 0,
    imgSrc: "https://img1.doubanio.com/view/subject/s/public/s1070959.jpg",
    bookName: "红楼梦",
    author: "[清] 曹雪芹 著 / 人民文学出版社 / 1996-12",
    score: "9.4分 ( 429110人评价 )",
    descri: "“ 都云作者痴，谁解其中味？ ”",
  },
  {
    id: 1,
    imgSrc: "https://img1.doubanio.com/view/subject/s/public/s1070959.jpg",
    bookName: "红楼梦",
    author: "[清] 曹雪芹 著 / 人民文学出版社 / 1996-12",
    score: "9.4分 ( 429110人评价 )",
    descri: "“ 都云作者痴，谁解其中味？ ”",
  },
  {
    id: 2,
    imgSrc: "https://img1.doubanio.com/view/subject/s/public/s1070959.jpg",
    bookName: "红楼梦",
    author: "[清] 曹雪芹 著 / 人民文学出版社 / 1996-12",
    score: "9.4分 ( 429110人评价 )",
    descri: "“ 都云作者痴，谁解其中味？ ”",
  },
  {
    id: 3,
    imgSrc: "https://img1.doubanio.com/view/subject/s/public/s1070959.jpg",
    bookName: "红楼梦",
    author: "[清] 曹雪芹 著 / 人民文学出版社 / 1996-12",
    score: "9.4分 ( 429110人评价 )",
    descri: "“ 都云作者痴，谁解其中味？ ”",
  },
  {
    id: 4,
    imgSrc: "https://img1.doubanio.com/view/subject/s/public/s1070959.jpg",
    bookName: "红楼梦",
    author: "[清] 曹雪芹 著 / 人民文学出版社 / 1996-12",
    score: "9.4分 ( 429110人评价 )",
    descri: "“ 都云作者痴，谁解其中味？ ”",
  },
  {
    id: 5,
    imgSrc: "https://img1.doubanio.com/view/subject/s/public/s1070959.jpg",
    bookName: "红楼梦",
    author: "[清] 曹雪芹 著 / 人民文学出版社 / 1996-12",
    score: "9.4分 ( 429110人评价 )",
    descri: "“ 都云作者痴，谁解其中味？ ”",
  },
  {
    id: 6,
    imgSrc: "https://img1.doubanio.com/view/subject/s/public/s1070959.jpg",
    bookName: "红楼梦",
    author: "[清] 曹雪芹 著 / 人民文学出版社 / 1996-12",
    score: "9.4分 ( 429110人评价 )",
    descri: "“ 都云作者痴，谁解其中味？ ”",
  },
  {
    id: 7,
    imgSrc: "https://img1.doubanio.com/view/subject/s/public/s1070959.jpg",
    bookName: "红楼梦",
    author: "[清] 曹雪芹 著 / 人民文学出版社 / 1996-12",
    score: "9.4分 ( 429110人评价 )",
    descri: "“ 都云作者痴，谁解其中味？ ”",
  },
  {
    id: 8,
    imgSrc: "https://img1.doubanio.com/view/subject/s/public/s1070959.jpg",
    bookName: "红楼梦",
    author: "[清] 曹雪芹 著 / 人民文学出版社 / 1996-12",
    score: "9.4分 ( 429110人评价 )",
    descri: "“ 都云作者痴，谁解其中味？ ”",
  },
  {
    id: 9,
    imgSrc: "https://img1.doubanio.com/view/subject/s/public/s1070959.jpg",
    bookName: "红楼梦",
    author: "[清] 曹雪芹 著 / 人民文学出版社 / 1996-12",
    score: "9.4分 ( 429110人评价 )",
    descri: "“ 都云作者痴，谁解其中味？ ”",
  },
  {
    id: 10,
    imgSrc: "https://img1.doubanio.com/view/subject/s/public/s1070959.jpg",
    bookName: "红楼梦",
    author: "[清] 曹雪芹 著 / 人民文学出版社 / 1996-12",
    score: "9.4分 ( 429110人评价 )",
    descri: "“ 都云作者痴，谁解其中味？ ”",
  },
  {
    id: 11,
    imgSrc: "https://img1.doubanio.com/view/subject/s/public/s1070959.jpg",
    bookName: "红楼梦",
    author: "[清] 曹雪芹 著 / 人民文学出版社 / 1996-12",
    score: "9.4分 ( 429110人评价 )",
    descri: "“ 都云作者痴，谁解其中味？ ”",
  },
];
const changeFM = (dir) => {
  let fmDom = document.querySelectorAll("#likeTabs  h5");
  if (dir == 0) {
    fmActive.value--;
    if (fmActive.value < 0) fmActive.value = fmDom.length - 1;
    document.getElementById("bigBronzeMirror").style.transform =
      `rotate(-${60 * fmActive.value}deg)`;
    document.getElementById("smallBronzeMirror").style.transform =
      `rotate(${30 * fmActive.value}deg)`;
  } else {
    fmActive.value++;

    if (fmActive.value > fmDom.length - 1) fmActive.value = 0;
    document.getElementById("bigBronzeMirror").style.transform =
      `rotate(${45 * fmActive.value}deg)`;
    document.getElementById("smallBronzeMirror").style.transform =
      `rotate(-${90 * fmActive.value}deg)`;
  }
  handelToogel(fmActive.value);
};
const handelToogel = (id) => {
  fmActive.value = id;
  let fmDom = document.querySelectorAll("#likeTabs  h5");
  fmDom.forEach((item) => {
    item.style.transform = `translateY(${-fmActive.value * 50}%)`;
  });
  document.getElementById("bigBronzeMirror").style.transform =
    `rotate(${30 * fmActive.value}deg)`;
  document.getElementById("smallBronzeMirror").style.transform =
    `rotate(-${30 * fmActive.value}deg)`;
};

//滚动条scroll节流函数
const throttle = function (func, wait) {
  var context, args;
  var previous = 0;
  return function () {
    var now = +new Date();
    context = this;
    args = arguments;
    //当前时间差值超过了规定的时间，那么就会触发func
    if (now - previous > wait) {
      func.apply(context, args);
      previous = now;
    }
  };
};
const noteArr = [
  {
    id: 0,
    noteTitle: ` 报错This request has been blocked; the content must be served over HTTPS`,
    reason: `因为使用网易云音乐的外链iframe嵌入到前端页面时，当前页面是https协议加载的，https的请求中不允许嵌入http请求`,
    solution: `需要将http不安全请求升级为https请求才行，这种需要申请SSL证书。`,
  },
  {
    id: 1,
    noteTitle: `进出父组件和子组件的页面所需的过渡动画最好重新搞一个可复用公共组件，而不是在父组件中直接写`,
    reason: ``,
    solution: ``,
  },
  {
    id: 2,
    noteTitle: `将前端要用到的图片、音频等资源下载到本地项目中并当做background背景图使用时，出现错误‘Not allowed to load local resource’或者找不到资源。`,
    reason: ` 因为浏览器出于安全方面的考虑，禁止网页访问本地文件，而图片是存在项目目录下的，所以无法通过本地的url进行访问。`,
    solution: `需要配置虚拟路径映射到本地路径，或者正确填写相对路径和绝对路径`,
  },
  {
    id: 3,
    noteTitle: `父元素不设置高度或者子元素高度超出父元素，子元素会溢出`,
    reason: `如果父元素不设置高度宽度，则靠子元素完全撑开；如果子元素高度大于父元素，那么子元素的视觉范围会超过父元素`,
    solution: `要么设置父元素的高度或者通过overflow属性来设置隐藏子元素超出的部分`,
  },
  {
    id: 4,
    noteTitle: `vue动态设置audio的src无效，无法对本地音频生效。`,
    reason: `本地音频如01.mp3被看做了HTML的类型无法解析为音频`,
    solution: `audio标签要使用本地音频需要借助require('')，网络音频则不需要`,
  },
  {
    id: 5,
    noteTitle: `Dom.getBoundingClientRect()返回当前元素的dom模型，模型包含其大小及其位置，即width，height，x,y,left,top,bottom,right`,
    reason: ``,
    solution: ``,
  },
  {
    id: 6,
    noteTitle: `当background-size位于background url属性的上方时将不起作用`,
    reason: `初步判断为按照javascript按顺序运行代码时图片还未确定background-size就生效了，进而出现错误`,
    solution: ``,
  },
  {
    id: 7,
    noteTitle: ` Vue3 audio动态修改音频地址:Src,批量创建audio时 注意v-for绑定的不能用new Array创建的数组，而是直接const array = []`,
    reason: `不明`,
    solution: ``,
  },
  {
    id: 8,
    noteTitle: `模板字符串\`XXX\`中的换行和空格会被保留,可以借此完成一些文本类的编辑。`,
    reason: ``,
    solution: ``,
  },
  {
    id: 9,
    noteTitle: `模板字符串还能把css html 写在 js中,比如下面\`font-size:50px;    color:red;\``,
    reason: ``,
    solution: ``,
  },
  {
    id: 10,
    noteTitle: `想在字符串插入变量和表达式，要使用 模板字符串 和反引号\`\`这个符号，变量名写在 $ {} 中，$ {} 中可以放入 JavaScript 表达式，比如“你好啊，person.name”不起作用，但是 \`你好啊，$ { person.name} \`生效`,
    reason: ``,
    solution: ``,
  },
  {
    id: 11,
    noteTitle: `标签模板，是一个函数的调用，其中调用的参数是模板字符串; `,
    reason: ` 当模板字符串中带有变量，会将模板字符串参数处理成多个参数。`,
    solution: `比如 fn(stringArr ,  ...values )，  使用模板字符串  fn \`我是$ { name },我$ { age  + 1}岁了。\`，会将 name 解析为 stringArr,  age解析为 ...values, fn  \`我是$ { name },我$ { age + 1}岁了。\`   等价于 fn ( ['我是',',我 ',' 岁了。'],'哥斯拉',1001)`,
  },
  {
    id: 12,
    noteTitle: `注意 const  let 没有变量提升和函数提升，在最早的使用该函数或者该变量的代码之前要先定义这个函数或者变量，不要为了美观将函数和变量移到最后，否则会出现找不到该函数的错误，除非用var，但是var和let const各有千秋，在个人博客这里不适用`,
    reason: ``,
    solution: ``,
  },
  {
    id: 13,
    noteTitle: `对于定位盒子（即 position 属性值非 static 的盒子），z-index 属性会指定：1.盒子在当前层叠上下文中的层叠等级。2.盒子是否会创建局部层叠上下文。`,
    reason: ``,
    solution: `具体请参考《 10分钟了解z-index机制 https://juejin.cn/post/6939766082911600654 》`,
  },
  {
    id: 14,
    noteTitle: `css中已经有background 背景图片URL且为空地址‘ ’时 再在js中访问其他地址的图片时，会出现403 forbidden无权访问`,
    reason: ``,
    solution: `删掉css中background属性转而在JS中操作背景图片就行`,
  },
  {
    id: 15,
    noteTitle: `scroll事件触发次数太多触发太频繁了要节流防抖;`,
    reason: ``,
    solution: ``,
  },
  {
    id: 16,
    noteTitle: `vue3 如果随便使用一些关键词，比如func之类的，会自动引入莫名其妙的包导致报错，比如使用func变量名时会自动引入import func from '../../vue-temp/vue-editor-bridge'，导致出现错误Cannot find module 'vue-temp/vue-editor-bridge`,
    reason: ``,
    solution: `尽量少用关键词和标志词作变量名和函数名`,
  },
  {
    id: 17,
    noteTitle: `  报错error Parsing error: x-invalid-end-tag。`,
    reason: `View将标签渲染为原生html标签时，由于部门标签是自闭合的，所以渲染结束后有 end 结束标签会报错。`,
    solution: `解决方法：去掉结束标记，写成单标签形式；或者在设置中关闭提醒，比如在VSCODE中左下角的设置中输入vetur.validation.template 并点击取消勾选。原本不报错的代码很可能会因为Vue、Vetur等插件的更新，导致出错。`,
  },
  {
    id: 18,
    noteTitle: `win11自动隐藏任务栏失败后，可以点击开始菜单再关闭可以暂时解决这个bug,或者重启，重启解决99%的问题`,
    reason: ``,
    solution: ``,
  },
  {
    id: 19,
    noteTitle: `《Svg学习   https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths》`,
    reason: ``,
    solution: `path的d属性用来绘制圆弧 “M cx cy A rx ry x-axis-rotation large-arc-flag sweep-flag x y”，cr cy为起点坐标，x y为终点坐标计算方法为(cx,cy为圆心所在坐标)，x=cx+rxcos(π/2+θ)，y=cy−rysin(π/2+θ)，sweep-flag 是标记向顺时针(1)还是逆时针(0)方向绘制。x-axis-rotation 是椭圆相对于坐标系的旋转角度，角度数而非弧度数。large-arc-flag 是标记绘制大弧(1)还是小弧(0)部分。`,
  },
  {
    id: 20,
    noteTitle: `router-view 绑定 v-slot={Component}只能是Component而不能是其他变量名如componentA或者componentB，估计是Vue内定的变量名;
					并且要求和<component>标签中的:is绑定的变量名一致 `,
    reason: `初步猜测是Vue内定的或者项目中某项未被我察觉的设置写死了`,
    solution: ``,
  },
  {
    id: 21,
    noteTitle: `嵌套数组检索，检查嵌套数组A中是否有B数据。ES6方法：Array.find((value,index,arr)=>{ return 条件表达式;})，其中value：每一次迭代查找的数组元素。index：每一次迭代查找的数组元素索引。arr：被查找的数组。find方法结果返回符合条件表达式的第一个value，而Array.findIndex((value,index,arr)=>{ return 条件表达式;})则用于查找某个value对应的index`,
    reason: ``,
    solution: ``,
  },
  {
    id: 22,
    noteTitle: `vue3——解决数据更新而视图未更新问题,在onMounted中定义的变量curPageName，简单的赋值更新后，输出curPageName的值已经更新，
		但是视图网页中的curPageName不显示更新，可以用ref响应式对象来更新`,
    reason: `由于Vue2中采用的Option API选项式API和Vue3中新出现的Composition API组合式API，Vue2的data组件内的函数和属性 在Vue3中得用ref()和reactive才能保证视图实时更新`,
    solution: `let curPageName=ref(''),后续更新时 用curPageName.value= xx来更新即可，不能直接curPageName=xx`,
  },
  {
    id: 23,
    noteTitle: `word-spacing==>单个字/字母间隔。`,
    reason: `letter-spacing==>字母/汉子间隔。`,
    solution: `当给词之间添加空格 使用 word-spacing可以改变空格左右两个词之间的距离 而原来之间没有间隙的汉字(词)无法实现层叠效果`,
  },
  {
    id: 24,
    noteTitle: `mousewheel不再推荐使用该特性。虽然一些浏览器仍然支持它，但也许已从相关的 web 标准中移除`,
    reason: `请注意，该特性随时可能无法正常工作`,
    solution: ``,
  },
  {
    id: 25,
    noteTitle: `对于最外层的scroll滚动条事件，用onscroll 而不是addEventListener('scroll')，不知道为什么document.body.addEventListener('scroll',func) 不起作用 `,
    reason: ``,
    solution: ``,
  },
  {
    id: 26,
    noteTitle: `最强大的布局，grid布局  https://juejin.cn/post/6854573220306255880`,
    reason: ``,
    solution: ``,
  },
  {
    id: 27,
    noteTitle: `报错  <script> cannot use the "src" attribute when <script setup> is also present because they must be processed together.`,
    reason: `当<script setup>也存在时，<script>不能使用"src"属性，因为它们必须一起处理。 `,
    solution: ``,
  },
  {
    id: 28,
    noteTitle: `CSS中使用@media，可以用于媒体查询， 查询当前屏幕是否位于某个长宽范围内或者某个状态时，如果满足要求则会触发相应css`,
    reason: ``,
    solution: ``,
  },
  {
    id: 29,
    noteTitle: `父元素和子元素之间，z-index是无法对比的，同级之间的z-index才能对比.无论子元素z-index怎么比父元素小，都会位于父元素上面，因为子元素是基于父元素做的层级分布`,
    reason: ``,
    solution: ``,
  },
  {
    id: 30,
    noteTitle: `CSS 中 >、~、+ 、空格、逗号的用法https://zhuanlan.zhihu.com/p/375401959`,
    reason: `1.子元素选择器（>）表示的是选择当前元素的第一代子元素，第二代子元素即孙元素不受影响，使用方法：div>h1,或者#id>h1 .class>h1等。
			2.波浪号~ 的作用是选择该元素之后的所有相同元素,波浪号~之前的元素不受影响，即假如当前元素是第三个元素，那么第四第五个元素受其CSS影响，第一第二个元素不受影响（注意这些元素要处于同一个父元素的同一代中，子和孙不能这样用，子和子可以）
			用法如下div~h1,意思是选取同一个父元素下 div 之后的所有 h1 标签,这些标签不必与当前div紧挨着，也可以 #id>h1 .class>h1。
			3.加号（+）的作用是选择紧邻其后的元素，且要求二者有同一父元素,与波浪号的区别是加号+必须是紧挨着下一个目标元素，如div+h1必须是div下一个目标紧挨着的是h1，这样CSS才能作用于该h1元素`,
    solution: `  4.派生选择器（空格）的作用是选择该元素后面的所有子元素（包含第一代子元素、第二代、代三代等等） 比如  #id h1，表示选择当前id标签下的所有子元素中的h1标签。 5.分组选择器 逗号（,）的作用是对选择器进行分组，被分组的选择器可以分享相同的 CSS 样式比如，#id, .class, h1表示#id标签和所有的.class标签以及所有h1标签共享同一套CSS`,
  },
  {
    id: 31,
    noteTitle: `vue文件中直接用@click="window.open(src)"会出现无法读取空元素的错误Cannot read properties of undefined (reading ‘open’)`,
    reason: `在Template中直接调用window.open，此时window还没加载完成,导致并不存在相关的open属性`,
    solution: `改用函数调用，@cilcik="openNewPage(src)"，然后在script的函数中写winodw.open(src)就行`,
  },
  {
    id: 32,
    noteTitle: `vue框架中，在父路由中 redirect: "/docu/calculator",  可以在进入父路由页面时默认显示指定子页面，即重定向到制定子路由`,
    reason: ``,
    solution: ``,
  },
  {
    id: 33,
    noteTitle: `vue框架中，伪元素盖住父元素及其子元素`,
    reason: `伪元素默认层级过高`,
    solution: `伪元素添加 z-index: -1;（只能在定位元素position上奏效）；或者3D旋转效果，父元素设置transform-style: preserve-3d;伪元素设置 transform: translateZ(-1px);  	`,
  },
  {
    id: 34,
    noteTitle: ` ( {} + {} ).length最后的结果是30，不是Null也不是0也不是报错`,
    reason: `因为{} + {}最后得到的结果是[object object][object object],对象没有length属性，一般只有数组和字符串生效,所以最后使用length属性，会默认将[object object][object object]转换为类似于数组和字符串的形式来使用length，长度刚刚好是30个字符，中间有一个空格别漏,总共30个字符`,
    solution: ` 或者说在当前对象没有找到length属性，顺着原型链往上找length属性	`,
  },
  {
    id: 35,
    noteTitle: ` let arr=['1','2','3'] ；arr[name]="a" ；console.log(arr[length]) ；console.log(arr.length) ；console.log(arr[""])输出结果`,
    reason: `根据不同的JS编辑器有不同的输出结果：
			第一种分别输出1，3，a ；
			第二种分别输出1，3，undefined；
			第三种报错没有name这个属性。
			三种结果区别在于这几个编辑器是否进行了原形链追溯
			`,
    solution: `第三种结果，不存在name属性是因为只查看了当前对象是否存在该name属性，没有则报错；  第二种结果，顺着原型链找，发现window.length(默认为0)存在length这个属性，以及window.name(默认undefined)有name这个属性，
			所以arr[length] = arr[window.length] =arr[0] = '1'，arr['']则是arr[undeifned]；第一种结果之所以arr[''] = 'a'，因为没有定义name这个属性，会当变量运算，然后再转化成string。从作用域链又找上了window对象，而window.name = '';
			所以arr[name] = arr[''] = 'a'; 实际上是在往arr上添加了一个空字符串为key的属性，值为a`,
  },
  {
    id: 36,
    noteTitle: ` option的样式无法全部修改；因为option是html固有元素;因而无论怎么修改在浏览器上都是不起作用的。想修改option样式，只能通过div ul li模拟select功能。`,
    reason: ``,
    solution: `	`,
  },
  {
    id: 37,
    noteTitle: `input框的 @keydown触发的事件是在键盘按下的瞬间，这样更新出来的数据不会在视图上面显示，因为此时数据更新完了，视图还停留在上一次的数据；
			但是@keyup的是在按下放开键子之后，先经历了keydown按下键子这个过程，数据更新了，放开的时候和视图一起更新，有一个先后时序，做到了实时更新，同时要注意input框的@change时间要回车确认或者焦点离开当前input才能触发`,
    reason: ``,
    solution: `	`,
  },
  {
    id: 38,
    noteTitle: `使用svg时，text-shadow不起作用，box-shadow效果不好， filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))才是最好的`,
    reason: ``,
    solution: `https://juejin.cn/post/7111738695283113992 《用CSS和SVG过滤器为SVG图标添加阴影》	`,
  },
  {
    id: 39,
    noteTitle: `如果一个属性仅用于在js中，而不是用于响应式、数据实时更新之类的，就不要使用vue3的ref和reactive，会出现值不改变的情况`,
    reason: ``,
    solution: ``,
  },
  {
    id: 40,
    noteTitle: `https://blog.csdn.net/wtyicy/article/details/80295800  《CSS表格常用样式》`,
    reason: ``,
    solution: ``,
  },
  {
    id: 41,
    noteTitle: `vue3 动态设置audio/video的src不能播放的问题`,
    reason: `此时只更换了src，但是audio/video还是上一个音频`,
    solution: `每次需要重新加载一下，audio.load()再播放audio.play()`,
  },

  {
    id: 42,
    noteTitle: `单元格高度由以下因素决定：首先，根据单元格内内容，要把内容放的下`,
    reason: `其次，再看height设置值；如果内容小于height，单元格高度自动扩展到height；`,
    solution: ``,
  },
  {
    id: 43,
    noteTitle: `VSCode代码超出屏幕自动换行显示: 设置VSCode中代码过长超出屏幕，能够实现自动换行显示，而不用手动滑动呢`,
    reason: `进入设置页面（左下角齿轮，或快捷键进入），搜索'Word Wrap'`,
    solution: `默认的'Editor: Word Wrap'是off的，切换成on，代码超出屏幕便会实现自动折行。`,
  },
  {
    id: 44,
    noteTitle: `js可以操作css动画，可以用element.animate(keyframes, options)来为某个元素创建并添加一个新的动画`,
    reason: `https://developer.mozilla.org/zh-CN/docs/Web/API/Element/animate `,
    solution: `或者在style中预先设定CSS动画，然后用animation-play-state:paused/running先暂停或者运行，然后在JS中操作element.style.animationPlayState='running'/'paused'来更改状态`,
  },
  {
    id: 45,
    noteTitle: `如果v-if没有中，那么就会执行v-else-if中的事件和显示其样式，反之则会执行v-if的事件和样式 `,
    reason: ``,
    solution: ``,
  },
  {
    id: 46,
    noteTitle: `@timeupdate会根据当前元素audio/video时间改变而触发相应事件，这个事件的触发频率由系统决定，但是会保证每秒触发 4-66 次（前提是每次事件处理不会超过 250ms）。鼓励用户代理根据系统的负载和处理事件的平均成本来改变事件的频率，保证 UI 更新不会影响视频的解码`,
    reason: ``,
    solution: `audio.currentTime可以修改更新频率`,
  },
  {
    id: 47,
    noteTitle: `overflow:scroll溢出后，滚动条可以滚动但不显示滚动条的方法如下：`,
    reason: `使用伪类 ::webkit-scrollbar { display: none;}`,
    solution: `关于scrollbar，可以设置伪类如下：
				::-webkit-scrollbar — 整个滚动条.
				::-webkit-scrollbar-button — 滚动条上的按钮 (上下箭头).
				::-webkit-scrollbar-thumb — 滚动条上的滚动滑块.
				::-webkit-scrollbar-track — 滚动条轨道.
				::-webkit-scrollbar-track-piece — 滚动条没有滑块的轨道部分.
				::-webkit-scrollbar-corner — 当同时有垂直滚动条和水平滚动条时交汇的部分.
				::-webkit-resizer — 某些元素的corner部分的部分样式(例:textarea的可拖动按钮).
			但是火狐浏览器不支持这个::-webkit-scrollbar 仅仅在支持[WebKit]的浏览器 (例如, 谷歌Chrome, 苹果Safari)可以使用.`,
  },
  {
    id: 48,
    noteTitle: `JS中的offsetTop、clientTop、scrollTop等属性详解`,
    reason: ``,
    solution: `https://juejin.cn/post/7051193605758648350`,
  },
  {
    id: 49,
    noteTitle: `JS中的offsetTop、clientTop、scrollTop等属性详解`,
    reason: ``,
    solution: `https://juejin.cn/post/7051193605758648350`,
  },
  {
    id: 50,
    noteTitle: `如果当前歌词不在视窗内，即当前offsetTop  超过父元素视窗高度范围clientHeight，那么滚动条往下滚，滚动距离就是超过的部分`,
    reason: `栗子如下：`,
    solution: `if(document.getElementById('songLiric').clientHeight < document.querySelector('.activeLyric').offsetTop) {
							document.getElementById('songLiric').scrollTop+=document.querySelector('.activeLyric').offsetTop-document.getElementById('songLiric').clientHeight;	
						}`,
  },
  {
    id: 51,
    noteTitle: `vscode批量删除前置空格`,
    reason: ``,
    solution: `选中代码块，SHIFT+TAB`,
  },
  {
    id: 52,
    noteTitle: `ES 新增特性 ?? 、 ??= 、 ?. 、 &&= `,
    reason: `https://juejin.cn/post/7031132483865280526`,
    solution: ``,
  },
  {
    id: 53,
    noteTitle: `绑定多个方法的时候，只需要在多个方法之间使用分号隔开即可。这个说法是完全没有问题的。但是，有一点一定要记住，同时绑定多个方法的时候，非表达式的方法一定要加上小括号，如果你不加小括号，那么方法就一定不会生效的.`,
    reason: `例如  @click='func',如果要多个方法，@click='A,B',这样写不生效的，需要正式的函数方法写法。@click='A(),B()'才可生效`,
    solution: `vue中@click绑定多个事件（教你避坑）  https://blog.csdn.net/LLL3189860667/article/details/127080879`,
  },
  {
    id: 54,
    noteTitle: `在flex布局下同时设置justify-content: space-around/spce-between和overflow-scroll时，当子元素超过父元素边界时，执行overflow-scroll。同时也会执行justify-content: space-around,此时视窗会集中在中间，会忽略了因为justify-content: space-around而居于两端的元素，并且不能通过scroll滚动条滚到到这些边界元素，导致这些元素无法显示到视窗中`,
    reason: ``,
    solution: `去掉justify-content: space-around或者设置为justify-content: start即可，保证第一个元素或者最后一个元素能够显示出来`,
  },
  {
    id: 55,
    noteTitle: `《flex下width的设置原则》https://zhuanlan.zhihu.com/p/269899480`,
    reason: `首先wrapper设置为flex之后， 其子元素已经不是简单的block了， 可以理解为一个flex-block的元素，其表现为非块级元素， 不具有主动换行的特性，其宽度遵从自己的一套宽度原则。当有一个元素设置了width, 则flex的设置失效, 设置为flex的元素 依据 被动宽度或者文字宽度设置宽度值。
			当两个元素都设置了width，flex的设置失效，以最大width最大值为依据，另一个元素设置为被动宽度。
			当一个元素设置了flex, 以flex规则去设置width值，另一个元素设置文本宽度值。
			当两个元素都没有设置flex值，同时wrapper没有设置justify-content, 子元素宽度显示文本宽度。`,
    solution: `简单的应用：轮播图中子元素按flex布局排列，但是子元素100%宽度并不能获取父元素100%宽度，只能获取 父元素/子元素数量n后的宽度。此时可以用min-width:100%来保证最小宽度为父元素宽度`,
  },
  {
    id: 56,
    noteTitle: `css伪元素:before和:after用法以及在img中使用失效问题`,
    reason: `在 CSS 中，可替换元素（replaced element）的展现效果不是由 CSS 来控制的。这些元素是一种外部对象，它们外观的渲染，是独立于 CSS 的。
			简单来说，它们的内容不受当前文档的样式的影响。CSS 可以影响可替换元素的位置，但不会影响到可替换元素自身的内容。某些可替换元素，例如 < iframe > 元素，可能具有自己的样式表，但它们不会继承父文档的样式。`,
    solution: `典型的可替换元素有< iframe >< video >< embed >< img >`,
  },
  {
    id: 57,
    noteTitle: `用css控制点击穿透`,
    reason: ``,
    solution: `pointer-events: none 指定当前元素不可点击,点击会默认穿透到下方元素`,
  },
  {
    id: 58,
    noteTitle: `flex布局下使用overflow不生效`,
    reason: `本次遇到的问题是如何在flex布局中使用overflow不生效的问题。由于flex布局会让元素等比例自适应，如果父元素设置了300px，但是底下有5个子元素，但是子元素宽度为100元素，溢出的200元素会由于flex布局的影响下，会等比例将元素的宽度设置为60px，因此在flex布局中并不存在溢出的情况，导致我们无法使用overflow。但是我们有时候就是想使用flex布局，并且溢出显示滚动条`,
    solution: `https://juejin.cn/post/7163485781405728799`,
  },
  {
    id: 59,
    noteTitle: `:nth-child(n) 选择器匹配属于其父元素的第 N 个子元素，不论元素的类型。`,
    reason: `即 h1:nth-child(n)并不是选择h1标签的第n个标签，而是选择当前父元素的第n个元素，并且这个元素是h1，这样样式才生效`,
    solution: `要选择第n个标签类型，应该用:nth-of-type(n)，比如h1:nth-of-type(n)选择的就是第n个h1标签`,
  },
  {
    id: 60,
    noteTitle: `VSCode最简单代码格式化/自动对齐（无需安装插件或更改配置文件）`,
    reason: `选择要排版的代码块，Shift + Alt + F就能自动排版`,
    solution: ``,
  },
  {
    id: 61,
    noteTitle: `《position: sticky 不起作用？原理分析+爬坑笔记》`,
    reason: `https://zhuanlan.zhihu.com/p/107242529`,
    solution: ``,
  },
  {
    id: 62,
    noteTitle: `class类名CSS 搭配nth-of-type的一些坑`,
    reason: `https://blog.csdn.net/Dolanf/article/details/75804704`,
    solution: ``,
  },
  {
    id: 63,
    noteTitle: `v-if和事件触发的一些小坑`,
    reason: `v-show 由false变为true的时候不会触发组件的生命周期,v-if由false变为true的时候，触发组件的beforeCreate、create、beforeMount、mounted钩子，由true变为false的时候触发组件的beforeDestory、destoryed方法。性能消耗：v-if有更高的切换消耗；v-show有更高的初始渲染消耗  `,
    solution: `如果在mounted阶段定义了addEventListener之类的事件，那么 v-if v-else切换后，之后重构元素，而不会重新执行生命周期Mounted里面的函数和方法。这时候会出现某些元素或者组件被销毁了无法执行方法和函数的情况。可以借助nextTick 用于在 DOM 更新后执行回调函数`,
  },
  {
    id: 64,
    noteTitle: `text-align:center  只在内联元素即行内元素上生效`,
    reason: `所以如果文字居中不生效，可以试试加上display:inline或者display:inline-block或者别的方法来使得当前元素变成行内元素  `,
    solution: ``,
  },
  {
    id: 65,
    noteTitle: `router-link-active 与 router-link-exact-active 区别`,
    reason: `router-link-active 会在当前路由匹配到的路由及其子路由上添加，而 router-link-exact-active 仅在当前路由完全匹配时添加。 `,
    solution: `https://blog.csdn.net/OJNBO_1/article/details/129475223#:~:text=%E5%9C%A8%20Vue%20Router%20%E4%B8%AD%EF%BC%8C%20router-link-active%20%E5%92%8C%20router-link-exact-active,%E6%98%AF%E4%B8%A4%E7%A7%8D%E7%94%A8%E4%BA%8E%E6%8C%87%E7%A4%BA%E5%BD%93%E5%89%8D%E6%BF%80%E6%B4%BB%E8%B7%AF%E7%94%B1%E7%9A%84%20class%20%E5%90%8D%E7%A7%B0%E3%80%82%20router-link-active%20%E4%BC%9A%E5%9C%A8%E5%BD%93%E5%89%8D%E8%B7%AF%E7%94%B1%E5%8C%B9%E9%85%8D%E5%88%B0%E7%9A%84%E8%B7%AF%E7%94%B1%E5%8F%8A%E5%85%B6%E5%AD%90%E8%B7%AF%E7%94%B1%E4%B8%8A%E6%B7%BB%E5%8A%A0%EF%BC%8C%E8%80%8C%20router-link-exact-active%20%E4%BB%85%E5%9C%A8%E5%BD%93%E5%89%8D%E8%B7%AF%E7%94%B1%E5%AE%8C%E5%85%A8%E5%8C%B9%E9%85%8D%E6%97%B6%E6%B7%BB%E5%8A%A0%E3%80%82`,
  },
  {
    id: 66,
    noteTitle: `Whitespace was expected.`,
    reason: `注意嵌套不能同时出现 两对相邻的单/双引号`,
    solution: ``,
  },
  {
    id: 67,
    noteTitle: `标签嵌套问题：JS解析时有可能错误导致结构解析错误`,
    reason: `比如ul,li/ol,li/dl,dt,dd拥有父子级关系的标签；ul、ol下都只能跟li，dl下只能跟dt.dd。p,dt,h标签里面不能嵌套块元素；a标签不能嵌套a，button,select等之类的交互元素；行内元素不能嵌套块元素；`,
    solution: ``,
  },
  {
    id: 68,
    noteTitle: `JavaScript let 和 const、全局变量和局部变量`,
    reason: `https://blog.csdn.net/gao511147456/article/details/122929530`,
    solution: `注意，let和var定义的变量不是决定是全局还是局部的关键，具体要看在什么代码块和区域定义的。比如，在函数体内使用var和let定义的变量所处的作用域，在函数体外或者代码块比如直接在script标签内使用var和let定义的变量就是属于全局作用域的变量。`,
  },
  {
    id: 69,
    noteTitle: `作用域 (局部作用域和全局作用域) 详细介绍`,
    reason: `https://blog.csdn.net/wz__QWERTY/article/details/123510899`,
    solution: `直接编写在 script 标签之中的JS代码，都是全局作用域；或者是一个单独的 JS 文件中的。全局作用域在页面打开时创建，页面关闭时销毁；
			在全局作用域中有一个全局对象 window（代表的是一个浏览器的窗口，由浏览器创建），可以直接使用。
			在函数内部就是局部作用域，这个代码的名字只在函数的内部起作用；调用函数时创建函数作用域，函数执行完毕之后，函数作用域销毁；每调用一次函数就会创建一个新的函数作用域，它们之间是相互独立的。`,
  },
  {
    id: 70,
    noteTitle: `Axios响应结构介绍`,
    reason: `https://www.axios-http.cn/docs/res_schema`,
    solution: ``,
  },
  {
    id: 71,
    noteTitle: `CSS实现渐变色边框（Gradient borders）的5种方法`,
    reason: `https://segmentfault.com/a/1190000040794056`,
    solution: ``,
  },
  {
    id: 72,
    noteTitle: `CSS解析完所有样式，最终会合并为一个大的作用域，所以遇到同名的样式会优先选择后面的样式`,
    reason: `遇到的问题是，同名的@keyframes  的animation动画，  即使不在同一个父元素的CSS下，前一个父元素的子元素也会使用后一个父元素的子元素的同名animation。所以初步猜测为，解析完所有CSS后会合并然后解决命名冲突，解决措施是优先选择后一位同名CSS样式`,
    solution: `https://blog.csdn.net/Newbie___/article/details/104898581`,
  },
  {
    id: 73,
    noteTitle: `JavaScript通过添加类class不会触发CSS动画 https://deepinout.com/css/css-questions/647_css_adding_class_via_js_wont_trigger_css_animation.html#google_vignett`,
    reason: `与CSS动画的触发与DOM的渲染顺序有关；当页面被加载或渲染时，浏览器按照特定的顺序处理HTML、CSS和JavaScript代码。在渲染过程中，浏览器首先处理HTML代码，然后是CSS代码，最后是JavaScript代码。在处理CSS代码时，浏览器会将动画效果添加到适当的元素上。然而，如果在此之后通过JavaScript添加类，浏览器不会触发对应的CSS动画，因为动画已经被添加并启动，而无法通过JavaScript重新启动`,
    solution: `1. 延迟添加类，使用setTimeout在下一个绘制周期之前捕捉到状态变化并触发CSS动画或者requestAnimationFrame在浏览器进行下一次绘制之前执行回调函数 。  2.  使用浏览器重新绘制的方法，添加强制触发浏览器重绘的属性，比如offsetHeight。  3.  通过element.animate的方式添加动画`,
  },
  {
    id: 74,
    noteTitle: `浏览器有自动修正和容错机制，只要代码写的错误不是太严重，会自动补全和修正`,
    reason: ``,
    solution: ``,
  },
  {
    id: 75,
    noteTitle: `web性能之资源加载时间分析【Resource Timing】`,
    reason: `https://juejin.cn/post/6844903972902273032`,
    solution: ``,
  },
  {
    id: 76,
    noteTitle: `web性能之资源加载时间分析【Resource Timing】`,
    reason: `https://juejin.cn/post/6844903972902273032`,
    solution: ``,
  },
  {
    id: 77,
    noteTitle: `let arr= reactive([])来解决数组对象更新数据 而不更新视图的问题。`,
    reason: `https://blog.csdn.net/m0_74802419/article/details/133255250`,
    solution: ``,
  },
  {
    id: 78,
    noteTitle: `图中chrome开发者工具右侧的css样式栏中一些css样式被中划线划起来或者变暗了,分别代表什么意思`,
    reason: `删除线：已被覆盖；半透明：不继承；灰色：不由本浏览器读取。`,
    solution: `https://segmentfault.com/q/1010000000638562`,
  },
  {
    id: 79,
    noteTitle: `el-table里的el-dialog重叠问题： 在el-table-column里面嵌套dialog 会出现点击一次 多个同样的dialog弹出的问题`,
    reason: `https://blog.csdn.net/weixin_43792451/article/details/131334077    帖子  https://www.jianshu.com/p/a03dc72fb556`,
    solution: `1. 把<el-dialog>移出<el-table>，还是用一个全局变量来控制dialog的显示。 即全局只有一个el-dialog，适用于我这个项目的场景：一个时间只要显示一个log dialog。但不适用于你的项目本来就是要同时显示多个el-dialog。 2.table里每行都有dialog, table数据每一行都有个变量用于控制每行的dialog的显示。但是要注意vue的响应式数据更新机制，这个变量必须要在table数据声明的时候就一起声明。比如我必须在填塞table数据的时候就把这个变量写出来, 从而在点击log标题的click事件中去操作这个变量的true/false`,
  },
  {
    id: 80,
    noteTitle: `运行nodeJS项目文件时使用命令node xxx.js等等文件，每次修改代码都需要重新启动node服务，这很麻烦，于是可以下载nodemon，nodemon可以一直保持运行且在运行过程修改不需要重新启动服务。但是nodemon安装使用会出现“没有nodemon该命令”`,
    reason: `可以管理员执行powerShell，然后启动命令set-ExecutionPolicy remoteSigned 来修改window执行策略。然后全部选是(A)即可重新运行nodemon  xxx.js`,
    solution: `如果还不行， 在以上基础再运行npx nodemon  xxx.js`,
  },
  {
    id: 81,
    noteTitle: `window的高级系统设置里的环境变量的path 可以添加某些程序和文件的所在路径，xxx.exe等等，这样无论在CMD命令行的什么路径下都能执行这些程序，而不需要专门跳转到其所在的路径下执行这些exe`,
    reason: `在cmd 随便一个路径下执行 xxx比如在C盘执行QQ时，但是QQ在D盘/qq下面，如果命令行在C盘下面没有找到QQ.exe执行程序，就会进环境变量中的path变量中寻找`,
    solution: `而高级系统设置中有用户变量和系统变量，二者都有path，区别在于一台电脑可以设置多个用户，用户变量中的变量只对当前电脑的当前用户起作用，系统变量对当前电脑所有用户起作用`,
  },
  {
    id: 82,
    noteTitle: `在前端vue项目src文件夹下建立server文件夹，然后就可以在里面利用npm安装各种包，从而实现前端配合nodeJS连接数据库mysql，mongodb，或者直接连接用阿里云OSS对象存储+PicGo搭建的图床。(具体做法问AI通义千问)`,
    reason: `const OSS = require("ali-oss");
				// 创建OSS客户端实例
				const client = new OSS({
					region: "你的存储桶所在区域例如oss-cn-hangzhou", 
					accessKeyId: "你的阿里云accessKeyId",
					accessKeySecret: "你的阿里云秘钥accessKeySecret",
					bucket: "你的桶名称例如my-bucket", 
				});

				async function listObjectsInFolder(prefix) {
					try {
						const result = await client.list({ prefix: prefix, "max-keys": 最大返回数量 }); 
						console.log( result.objects)
						// 如果存在更多数据，result.isTruncated 会为 true
						if (result.isTruncated) {
							console.log("还有更多数据");
						}
					} catch (err) {
						console.error("戳啦", err);
					}
				}
				//最后导出模块，在使用的页面和组件中import引入模块的函数即可使用
				module.exports ={
				listObjectsInFolder:listObjectsInFolder
				}`,
    solution: `注意要在阿里云OSS存储平台设置好CORS跨域规则，按照
			"AllowedOrigin": ["*"],
			"AllowedMethod": ["GET", "POST", "PUT", "DELETE", "HEAD"],
			"AllowedHeader": ["*"],
			"ExposeHeader": [],
			"MaxAgeSeconds": 300
			填写即可`,
  },
  {
    id: 82,
    noteTitle: `在vue项目中，获取异步返回的数据，比如说promise，如果不做处理，则是返回一个Promise<pending>对象，要通过then(res=>{})或者await来获取promise对象里面的实际数据`,
    reason: `同时，也不能用普通的数组或者对象来接收这个异步的数据，否则会出现数据更新但是页面不更新的情况。因为JS又是单线程(如果一个线程修改dom，另一个线程删除dom，那么浏览器就不知道该先执行哪个操作，所以必须是单线程)，而通过异步获取的数据的请求会在同步任务执行完之后才会执行，异步任务又分为宏任务和微任务，微任务会积攒在队列中直到上一个宏任务执行完到下一个宏任务开始这段时间执行队列里的微任务。`,
    solution: `而Promise的操作又是微任务，因此会等前面的宏任务(即script里面的所有宏任务代码)才执行，此时已经完成页面渲染了，再执行微任务自然出现页面不更新的情况，所以需要用到响应式`,
  },
  {
    id: 83,
    noteTitle: `如果异步操作（如从服务器获取数据）之后需要立即访问更新后的 DOM，那么将 nextTick 放在 then 回调中是合理的`,
    reason: `目前最好的操作是，如果通过异步获取了数据，那么必须在nextTick里面执行dom更新，这样才能保证获取的数据能实时更新响应，而nextTick操作放在获取数据成功后的.then操作里是比较合适的`,
    solution: `示例：
			const loadImages = async () => {
				const res = await data;
				....数据赋值的操作
			};
			onMounted(() => {
				loadImages().then(() => {
					nextTick(() => { dom更新操作});
				})
				.catch((error) => {
					console.error("失败", error);
				});
			})
			或者直接
			async () => {
				const res = await data;
				....数据赋值的操作
			}.then(() => {
					nextTick(() => { dom更新操作});
				})
			.catch((error) => {
					console.error("失败", error);
			})不需要经过onmounted，因为此时已经是下一个循环了。
			`,
  },
  {
    id: 84,
    noteTitle: `假设异步函数fetchData返回一个Promise，该Promise在解析后会返回一个对象。这个对象可能包含嵌套的属性，假如直接访问这个属性，可能系统还没准备好，此时会报错`,
    reason: `使用可选链运算符?.可以安全访问属性，某些属性在某些情况下不存在，也不会导致程序崩溃或抛出错误，而是会返回undefined    比如xxx?.xxx属性`,
    solution: `访问属性：data?.user，如果data是null或undefined，表达式的结果就是undefined，而不是抛出错误。继续访问下一个属性：如果data.user不是null或undefined，则继续访问user.profile，否则返回undefined。最终访问属性值：如果user.profile存在，则访问profile.email；否则返回undefined。`,
  },
  {
    id: 85,
    audioName: "",
    audioSrc: "",
    background: "",
    src: "",
    noteTitle: `父组件和子组件的类名，id名，变量名等等尽量不要出现重名重复，解析的时候会把子组件的内容给渲染到父组件进行整体整合，这时候就会出现命名冲突，从而出现样式冲突、变量冲突、逻辑冲突等等`,
    reason: ``,
    solution: ``,
  },
  {
    id: 85,
    audioName: "",
    audioSrc: "",
    background: "",
    src: "",
    noteTitle: `为了在 Flexbox 布局中，图片在网页缩小的时候也会相应地缩放，而不会破坏整体布局`,
    reason: `可以用max-width: 100% 和 height: auto: 最简单有效的方法，适用于大多数情况。`,
    solution: `object-fit: 对于需要更精确控制图片如何适应容器的情况。也可以采用媒体查询和响应式设计: 对于需要根据不同屏幕尺寸进行更精细调整的情况。`,
  },
  {
    id: 86,
    audioName: "",
    audioSrc: "",
    background: "",
    src: "",
    noteTitle: `在grid布局中，想通过grid-auto-flow来使得元素按纵向排布，但是并没有起作用`,
    reason: `目前还不清楚原因`,
    solution: `。`,
  },
];

// 下拉显示box函数
const checkBoxes = () => {
  const boxes = document.querySelectorAll(".box");
  const triggerTop = (window.innerHeight * 4) / 3;
  boxes.forEach((box) => {
    //getBoundingClientRect()返回当前元素的dom模型，模型包含其大小及其位置，即width，height，x,y,left,top,bottom,right
    //每当当前视窗到底下一个Box的顶部上 box显示
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerTop) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
};
onMounted(() => {
  checkBoxes();
  document.body.addEventListener("wheel", throttle(checkBoxes, 300));
});
</script>
<style lang="scss" scoped src="./index.scss" />
