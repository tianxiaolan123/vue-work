<template>
  <div class="left">
    <ul>
        <li v-for="(item,index) in list"
         :key="index"
         @click="BtnClik(index)"
         :class="{'red':index==ind}"
        >{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    list:Array,


  },
  components: {

  },
  data() {
    return {
      ind:0,

    }
  },
  computed: {

  },
  methods: {
    BtnClik(ind) {
      this.$emit("change",ind)
      this.ind=ind;
      //子传父-》传一个自定义事件
    }

  },
  created() {

  },
  mounted() {

  }

}
</script>

<style scoped>
.left {
  width: 120px;
  height: 100%;
 border-right:1px solid #ccc;
 overflow-y: auto;
}
li{
  height: 42px;
  width:100px;
  background: dodgerblue;
  line-height: 42px;
  text-align: center;
  color:#fff;
  font-size: 18px;
  border-radius: 5px;
  margin:7px;
  
}
.red{
   background:chartreuse;
   color:#333;
}
</style>

