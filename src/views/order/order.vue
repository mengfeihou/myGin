<template>
    <div class="order">
        <div class="orderTop">
            <van-nav-bar
                title="订单记录"
                left-arrow
                @click-left="goback"
                />
        </div>
          
        <div class="list">
            <van-tabs title-inactive-color="#967A45" :line-width="30" v-model="active" color="#DEA853" title-active-color="#DEA853" background="0"> 
                <van-tab title="激活码">
                    <div class="content">
                        <div>当前申购矿机个数&nbsp;&nbsp;&nbsp;&nbsp;<span class="text1">1000</span></div>
                        <div>未完成订单个数&nbsp;&nbsp;&nbsp;&nbsp;<span class="text2">20000</span></div>
                    </div>
                </van-tab>
                <van-tab title="转让记录">
                    <div class="content">
                        <div>当前申购矿机个数&nbsp;&nbsp;&nbsp;&nbsp;<span class="text1">10</span></div>
                        <div>未完成订单个数&nbsp;&nbsp;&nbsp;&nbsp;<span class="text2">20</span></div>
                    </div>
                </van-tab>
            </van-tabs>
            <div class="text">
                <span>注：</span>每笔订单需要在24小时内完成放行，超时账户会被冻结。
            </div>
        </div>


        <div>
            <order-list :arrItem = "arr"></order-list>
        </div>
    </div>
</template>

<script>
import OrderList from './orderList.vue'
export default {
     name: "home",
    components:{OrderList},
    data() {
        return{
            active:0,
            arr: [
                {
                    id:"1",
                    type: "end",
                    typeName: "已完成",
                    text:"GIN1",
                    time: "5/6 22:05:45",
                    xuqiu:"5236.00",
                    shuliang: "5236.00"
                },
                {
                    id:"2",
                    type: "pc",
                    typeName: "待放行",
                    text:"GIN1",
                    time: "5/6 22:05:45",
                    xuqiu:"5236.00",
                    shuliang: "5236.00"
                },
                {
                    id:"3",
                    type: "loding",
                    typeName: "待打款",
                    text:"GIN1",
                    time: "5/6 22:05:45",
                    xuqiu:"5236.00",
                    shuliang: "5236.00"
                },
                {
                    id:"4",
                    type: "end",
                    typeName: "已完成",
                    text:"GIN1",
                    time: "5/6 22:05:45",
                    xuqiu:"5236.00",
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
.order{
    background: rgba(45,45,45,1);
    .orderTop{
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
    .list{
        .content{
            margin: .693333rem;
            background:rgba(50,50,50,1);
            border:1px solid rgba(21, 21, 21, 1);
            border-radius:3px;
            color:rgba(244,195,27,1);
            font-size: .746667rem;
            div{
                padding-left: .693333rem;
                height: 3.2rem;
                line-height: 3.2rem;
            }
            div:nth-child(1){
                border-bottom:1px solid rgba(21, 21, 21, 1);
            }
            .text1{
                // color:#F4C31B;
                font-size: 1.173333rem;
            }
            .text2{
                // color:#00C0C2;
                font-size: 1.173333rem;
            }
        }
        .text{
            padding: 0 .8rem;
            color: #7F735C;
            span{
                color: #CB1801;
            }
        }
    }
}
</style>
