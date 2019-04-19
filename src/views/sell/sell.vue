<template>
    <div class="sell">
        <div class="sellTop">
            <van-nav-bar
                title="出售GIN"
                left-arrow
                @click-left="goback"
                />
        </div>

        <div class="content">
            <div>当前拥有GIN数量&nbsp;&nbsp;&nbsp;&nbsp;<span class="text1">1000</span></div>
            <div>每个矿机消耗GIN&nbsp;&nbsp;&nbsp;&nbsp;<span class="text2">20000</span></div>
        </div>

        <div class="main">
            <div>
                <p>
                    <span>出售数量</span>
                    <!-- <span>当前可用：&nbsp;10种子</span> -->
                </p>
                <input class="inputText" type="text" value="" id='name' placeholder="请输入出售数量" />
            </div>
            <div>
                <p>
                    <span>需消耗GIN</span>
                    <span>0</span>
                </p>
            </div>
            <div>
                <p>交易密码</p>
                <input class="inputText" type="text" value="" id='name' placeholder="请输入交易密码" />
            </div>
            <div class="subBtn">
                <p>每2000GIN可生成一个矿机，矿机生成后会自动挂卖</p>
                <button>提交</button>
            </div>
        </div>

        <div>
            <sell-list :arrItem = "arr"></sell-list>
        </div>
    </div>
</template>

<script>
import SellList from './sellList.vue'
export default {
     name: "home",
    components:{SellList},
    data() {
        return{
            arr: [
                {
                    id:"1",
                    type: "end",
                    typeName: "已完成",
                    text:"拆分订单",
                    time: "5/6 22:05:45",
                    xuqiu:"5236.00",
                    shuliang: "5236.00"
                },
                {
                    id:"2",
                    type: "pc",
                    typeName: "已匹配",
                    text:"普通订单",
                    time: "5/6 22:05:45",
                    xuqiu:"5236.00",
                    shuliang: "5236.00"
                },
                {
                    id:"3",
                    type: "loding",
                    typeName: "待匹配",
                    text:"拆分订单",
                    time: "5/6 22:05:45",
                    xuqiu:"5236.00",
                    shuliang: "5236.00"
                },
                {
                    id:"4",
                    type: "end",
                    typeName: "已完成",
                    text:"拆分订单",
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
.sell{
    background: rgba(45,45,45,1);
    .sellTop{
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
            color:#F4C31B;
            font-size: 1.173333rem;
        }
        .text2{
            color:#00C0C2;
            font-size: 1.173333rem;
        }
    }

    .main{
        margin: .693333rem;
        background:rgba(50,50,50,1);
        border:1px solid rgba(21, 21, 21, 1);
        border-radius:3px;
        color:rgba(244,195,27,1);
        font-size: .853333rem;
        // padding: 0 .693333rem;
        .inputText{
            background-color: rgba(0,0,0,0);
            border: none;
            margin-bottom: .906667rem;
        }
        div{
            border-bottom: 1px solid rgba(21, 21, 21, 1);
            padding: 0 .693333rem;
            p{
                display: flex;
                justify-content: space-between;
                padding:.64rem 0 ;
                span:nth-child(2) {
                    color: #B58F46;
                    font-size: .693333rem;
                }
            }
        }
        .subBtn{
            border: none;
            text-align: center;
            p{
                font-size: 12px;
                color: #7F735C;
                padding-left: 1.866667rem;
            }
            button{
                width:10.666667rem;
                height:2.133333rem;
                background:rgba(222,168,83,1);
                border-radius:40px;
                border: none;
                color: #523200;
                margin-bottom: .8rem;
            }
            
        }
    }
}
</style>
