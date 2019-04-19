<template>
    <div class="activationCode">
        <div class="activationCodeTop">
            <van-nav-bar
                title="激活码"
                left-arrow
                @click-left="goback"
                />
        </div>

        <div class="content">
            <div>
                <p class="text1">使用说明：</p>
                <p class="text2">激活码用于社区成员激活账户所用，由上往下转让</p>
            </div>
        </div>

        <div class="main">
            <div>
                <p>
                    <span>转入昵称</span>
                </p>
                <input class="inputText" type="text" value="" id='name' placeholder="请输入转入昵称" />
            </div>
            <div>
                <p>转出数量</p>
                <input class="inputText" type="text" value="" id='name' placeholder="请输入转出数量" />
            </div>
            <div class="subBtn">
                <button>转让</button>
            </div>
        </div>


        <div class="list">
            <van-tabs title-inactive-color="#967A45" :line-width="30" v-model="active" color="#DEA853" title-active-color="#DEA853" background="0"> 
                <van-tab title="激活码">
                    <code-list :arrItem = "arrCode"></code-list>
                </van-tab>
                <van-tab title="转让记录">
                    <two-list :arrItem = "arr"></two-list>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import CodeList from './codeList.vue'
import TwoList from './codeTwoList.vue'
export default {
    name: "activationCode",
    components:{
        CodeList,
        TwoList
    },
    data() {
        return{
            active:0,
            arrCode: [
                {
                    id:1,
                    code: "e0b9580e5086d2ab",
                    state: "未使用",
                    type: "loding"
                },
                {
                    id:2,
                    code: "e0b9580e5086d2ab",
                    state: "已使用（金中月）",
                    type: "end"
                }
            ],
            arr: [
                {
                    id:11,
                    type: "zhuanrang",
                    typeName: "已完成",
                    text:"转让",
                    time: "5/6 22:05:45",
                    xuqiu:"5236.00",
                    shuliang: "5236.00"
                },
                {
                    id:12,
                    type: "jieshou",
                    typeName: "已匹配",
                    text:"接收",
                    time: "5/6 22:05:45",
                    xuqiu:"5236.00",
                    shuliang: "5236.00"
                },
                {
                    id:13,
                    type: "zhuanrang",
                    typeName: "待匹配",
                    text:"转让",
                    time: "5/6 22:05:45",
                    xuqiu:"5236.00",
                    shuliang: "5236.00"
                },
                {
                    id:14,
                    type: "jieshou",
                    typeName: "已完成",
                    text:"接收",
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
    .activationCode{
        background: rgba(45,45,45,1);
        .activationCodeTop{
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
            padding-left: .64rem;
            .text1{
                padding-top: 1.173333rem;
                padding-bottom: .64rem;
            }
            .text2{
                padding-bottom: 1.12rem;
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
                    padding-left: 4.48rem;
                }
                button{
                    width:10.666667rem;
                    height:2.133333rem;
                    background:rgba(222,168,83,1);
                    border-radius:40px;
                    border: none;
                    color: #523200;
                    margin-top: .8rem;
                    margin-bottom: .8rem;
                }
                
            }
        }
    }
</style>
