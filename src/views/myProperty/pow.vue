<template>
    <div class="pow">
        <div class="powTop">
            <van-nav-bar
                title="POW钱包"
                left-arrow
                @click-left="goback"
                />
        </div>

        <div class="content">
            <div>POW钱包总额&nbsp;&nbsp;&nbsp;&nbsp;<span class="text1">1000</span></div>
            <div>可释放POW算力&nbsp;&nbsp;&nbsp;&nbsp;<span class="text2">20000</span></div>
        </div>

        <div class="main">
            <div>
                <p>
                    <span>释放数量</span>
                </p>
                <input class="inputText" type="text" value="" id='name' placeholder="请输入释放数量" />
            </div>
        </div>
         <div class="btn">
            <div class="subBtn">
                <button>释放</button>
            </div>
            <a @click="gopath('/posList')">
                资金记录
            </a>
        </div>
    </div>
</template>

<script>
// import SellList from './sellList.vue'
export default {
     name: "pow",
    // components:{SellList},
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
        },
        gopath(path) {
            this.$router.push({
                path: path,
            })
		},
    }
}
</script>

<style lang="scss" scoped>
.pow{
    background: rgba(45,45,45,1);
    .powTop{
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
        color:#F4C31B;
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
            color:#F4C31B;
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
    }

    .btn{
            p{
                font-size: 12px;
                color: #7F735C;
                padding:0 .8rem;
                span:nth-child(1){
                    color:#CB1801;
                }
            }
            .subBtn{
                border: none;
                text-align: center;
                button{
                    width:18.4rem;
                    height:2.133333rem;
                    background:rgba(222,168,83,1);
                    border-radius:40px;
                    border: none;
                    color: #523200;
                    margin-top: .8rem;
                    margin-bottom: .8rem;
                }
                
            }
            a{
                display: block;
                color: #DEA853;
                text-align: center;
            }
        }
}
</style>
