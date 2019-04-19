<template>
    <div class="posList">
        <div class="posListTop">
            <van-nav-bar
                title="资金记录"
                left-arrow
                @click-left="goback"
                />
        </div>
        <div>
            <pospow-list :arrItem="arr"></pospow-list>
        </div>
    </div>
</template>

<script>
import pospowList from './posPowList.vue'
export default {
    name: "posList",
    components: {pospowList},
    data() {
        return{
            arr: [
                {
                    id:"1",
                    type: "zhuanrang",
                    text:"支出",
                    time: "5/6 22:05:45",
                    beizhu:"购买矿机",
                    shuliang: "5236.00"
                },
                {
                    id:"2",
                    type: "jieshou",
                    text:"收入",
                    time: "5/6 22:05:45",
                    beizhu:"购买矿机",
                    shuliang: "5236.00"
                },
                {
                    id:"3",
                    type: "zhuanrang",
                    text:"支出",
                    time: "5/6 22:05:45",
                    beizhu:"购买矿机",
                    shuliang: "5236.00"
                },
                {
                    id:"4",
                    type: "jieshou",
                    text:"收入",
                    time: "5/6 22:05:45",
                    beizhu:"购买矿机",
                    shuliang: "5236.00"
                }
            ]
        }
    },
    methods: {
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>
.posList{
    background: rgba(45,45,45,1);
    .posListTop{
        height: 3.466667rem;
        .van-nav-bar{
            height: 3.466667rem;
            line-height: 3.466667rem;
            background: #121619;
        }
        .van-icon-arrow-left:before,.van-nav-bar__title{
            color: #DEA853;
            font-size: 1.066667rem;
        }
    }
}
</style>
