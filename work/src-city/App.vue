<template>
  <div id="app">
    <my-left 
    :list="list"
    @change="change"
    >
    </my-left>
    <my-right 
    :list="list[ind].cities"
     v-if="list[ind]"
   
     ></my-right>

  </div>
</template>

<script>

import myLeft from "./components/left";
import myRight from "./components/right";
import axios from "axios";

export default {
  components: {  //注册
    myLeft,
    myRight,

  },
  data() {  //数据
    return {
      ind: 0,
      list: []

    }
  },
  created() {  //执行一次
    axios.get("/api/city").then(res => {
      this.list = res.data.data;
      // this.list[this.ind].cities.forEach(item=>item.flag=false);
      this.list[this.ind].cities.forEach(item => this.$set(item,"flag",false))

      // console.log(this.list[this.ind].cities);

    });


  },
  watch:{
    ind(news,olds){
       this.list[this.ind].cities.forEach(item => this.$set(item, "flag", false))
      
    }
  },
  methods: {  //写函数
     change(ind){
       this.ind=ind;
        //左右边的下标一样,在赋值给this.ind;
     }
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
}
</style>
