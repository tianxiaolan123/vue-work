<template>
    <div>
        <div class="box">
            <div class="title">
                <h3>{{title}}</h3>
                <span>{{list[type-1]}}</span>  
            </div>
            <p>{{content}}</p>
            <div class="time">
                <span>面试时间:{{time}}</span>
                <span>{{bool?"未提醒":"已提醒"}}</span>
            </div>
        </div>
    </div>
</template>

<script>
//上面type:如果mock的type是从0开始,就是type-0
//然后App组件里面下标就不用+1或者减一,
//前面也就不用判断,因为type就是从0开始的.
export default {
    props: ["title", "content", "time", "type", "bool"],
    data() {
        return {
            list: ["未开始", "已打卡", "已放弃", "全部"],
        }
    },

}
</script>

<style scoped>
.box {
    margin-top: 10px;
    background: #eee;
}

.title,
.time {
    display: flex;
    justify-content: space-between;
    padding: 6px 15px;
    box-sizing: border-box;
}
.title span,
.time span {
    font-size: 16px;
}

p {

    padding: 10px;
    box-sizing: border-box;
}
</style>
