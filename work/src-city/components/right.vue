<template>
    <div class="right">
        <ol>
            <li v-for="(item,index) in list" :key="index"
             @click="rightBtn(index)"
             :class="{'current':item.flag}"
             >{{item.name}}</li>

        </ol>
    </div>
</template>
<script>
export default {
    props: {
        list: Array,

    },
    components: {

    },
    data() {
        return {

        }
    },
    computed: {

    },
    methods: {
        rightBtn(ind) {
            this.list[ind].flag=!this.list[ind].flag;
          
            
            
        }

    },
    created() {
        console.log(this.list)

    },
    mounted() {

    }
}
</script>
<style scoped>
.right {
    flex: 1;
}

ol {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

ol li {
    width: 30%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    border: 1px solid red;
    margin: 5px 3px;
    border-radius: 5px;
    font-size: 17px;
}
.current{
    background: hotpink;
    color:#fff;
}
</style>
