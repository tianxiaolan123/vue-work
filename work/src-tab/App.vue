<template>
  <div id="app">
    <header>
      <span v-for="(item,index) in typeList" :key="index" :class="{'active':index==ind}" @click="btnClick(index)">{{item}}</span>

    </header>
    <section>
      <div class="meg" v-if="list.length==0">当前已经没有分类了</div>
      <my-list v-for="(item,index) in list" :key="index" :title="item.title" :content="item.content" :time="item.time" :type="item.type" :bool="item.bool">
      </my-list>

    </section>

  </div>
</template>

<script>
import data from "./mock"
import myList from "./components/tab"

export default {
  components: {
    myList

  },
  data() {
    return {
      ind: 0,
      typeList: ["未开始", "已打卡", "已放弃", "全部"],
      list: []
    }
  },
  created() {
    console.log(data)
    // this.list = data.list.filter(item=>item.type==0);
    this.list = this.getList(1)

  },
  methods: {
    btnClick(ind) {
      this.ind = ind;   //更换类名
      this.list = this.getList(ind + 1)
      console.log(this.getList(ind))  //找到数数据type的下标
    
    },
    getList(type) {
      return data.list.filter(item => item.type == type);
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
  flex-direction: column;
}

header {
  height: 50px;
  width: 100%;
  background: dodgerblue;
  display: flex;
}

header span {
  line-height: 50px;
  flex: 1;
  text-align: center;
  color: #fff;
  font-size: 18px;
}

section {
  flex: 1;
  overflow-y: auto;
}

.active {
  background: yellow;
  color: #333;
}
.meg{
  margin-top:140px;
  font-size:30px;
  margin-left:52px;
  color:red;
}
</style>
