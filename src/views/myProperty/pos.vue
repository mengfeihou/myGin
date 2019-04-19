<template>
    <div class="seed">
        <div class="seedTop">
            <van-nav-bar
                title="POS钱包"
                left-arrow
                @click-left="goback"
                />
        </div>

        <div class="content">
            <div>
                <p class="text1"> 当前拥有GIN</p>
                <p class="text2">2000</p>
            </div>
        </div>

        <div class="main">
            <div>
                <p>
                    <span>对方地址</span>
                </p>
                <input class="inputText" type="text" value="" id='name' placeholder="请输入对方地址" />
            </div>
            <div>
                <p>转出数量</p>
                <input class="inputText" type="text" value="" id='name' placeholder="请输入转出数量" />
            </div>
            <div>
                <p>交易密码</p>
                <input class="inputText" type="text" value="" id='name' placeholder="请输入交易密码" />
            </div>
        </div>
        <div class="btn">
            <p>
                <span>转出规矩：</span>
                <span>GIN只能在本平台的钱包之间互转，暂时不能转到其他平台的钱包。</span>
            </p>
            <div class="subBtn">
                <button>转让</button>
            </div>
            <a @click="gopath('/posList')">
                资金记录
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "pos",
    data() {
        return{
            arr: [
                {
                    id:"1",
                    type: "zhuanrang",
                    typeName: "已完成",
                    text:"转让",
                    time: "5/6 22:05:45",
                    xuqiu:"5236.00",
                    shuliang: "5236.00"
                },
                {
                    id:"2",
                    type: "jieshou",
                    typeName: "已匹配",
                    text:"接收",
                    time: "5/6 22:05:45",
                    xuqiu:"5236.00",
                    shuliang: "5236.00"
                },
                {
                    id:"3",
                    type: "zhuanrang",
                    typeName: "待匹配",
                    text:"转让",
                    time: "5/6 22:05:45",
                    xuqiu:"5236.00",
                    shuliang: "5236.00"
                },
                {
                    id:"4",
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
    .seed{
        background: rgba(45,45,45,1);
        .seedTop{
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
            text-align: center;
            .text1{
                padding-top: 1.173333rem;
                padding-bottom: .64rem;
                font-size: .746667rem;
            }
            .text2{
                padding-bottom: 1.12rem;
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

