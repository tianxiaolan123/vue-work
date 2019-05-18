<template>
  <div id="app">
    <header>每日优鲜便利购</header>
    <section>
      <ul>
        <li>
          <img src="http://pic34.photophoto.cn/20150305/0042040230597066_b.jpg " alt="">
          <p>科迪纯牛奶一袋</p>
          <div class="count">
            <span>￥2.4</span>
            <b>+</b>
          </div>
        </li>
        <li>
          <img src=" https://img5.duitang.com/uploads/item/201409/30/20140930165714_QS5CP.jpeg " alt="">

          <p>科迪纯牛奶一袋</p>

          <div class="count">
            <span>￥2.4</span>
            <b>+</b>
          </div>
        </li>
        <li>
          <img src="https://n1.itc.cn/img8/wb/recom/2016/05/21/146377280454793754.JPEG " alt=" ">

          <p>科迪纯牛奶一袋</p>

          <div class="count">
            <span>￥2.4</span>
            <b>+</b>
          </div>
        </li>

        <li>
          <img src="https://img5q.duitang.com/uploads/item/201502/10/20150210184306_KSaZP.jpeg " alt="">

          <p>科迪纯牛奶一袋</p>

          <div class="count">
            <span>￥2.4</span>
            <b>+</b>
          </div>
        </li>
      </ul>
    </section>
    <footer>
      <p>购物车:222</p>
      <div class="price">
        <span>总计:43434</span>
        <span class="money">结算:</span>
      </div>

    </footer>
  </div>
</template>
<script>


export default {
  components: {  //注册

  },
  data() {  //数据
    return {

    }
  },
  created() {  //执行一次

  },
  watch: {

  },
  methods: {  //写函数

  }

}
</script>

<style>
html,
body,
#app {
  height: 100%;
  width: 100%;
}

* {

  margin: 0;
  padding: 0;
  list-style: none;
  font-family: "宋体";
}

#app {
  display: flex;
  flex-direction: column;
}

header {
  height: 44px;
  width: 100%;
  line-height: 44px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  background: #eee;
}

section {
  flex: 1;
  width: 100%;
}

section ul {
  display: flex;
  flex-wrap: wrap;
}

section ul li {
  width: 30%;
  height: 180px;
  margin: 6px;
}

ul li img {
  height: 115px;
  width: 100%;
}
ul li p{
  padding:0px 3px;
  font-size:14px;
 margin-top:5px;

}
ul li .count{
  background: #eee;
  height:36px;
  margin-top:5px;
  display: flex;
  justify-content:space-between;
  padding:0px 5px;
  align-items:center;
}
.count b{
  height: 36px;
  width:40px;
  background: orange;
  font-size:30px;
  font-weight:bold;
  text-align: center;
  line-height: 36px;
  
}

footer {
  height: 50px;
  width: 100%;
  background: yellowgreen;
  display: flex;
  line-height: 50px;
}

footer p {
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
  width: 25%;
}

.price {
  width: 70%;
  display: flex;
  justify-content: space-around;
  margin-left: 5px;
}

.money {
  font-weight: bold;
  font-size: 18px;
  color: red;
}
</style>
