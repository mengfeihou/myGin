<template>
    <div class="payment">
        <div class="paymentTop">
            <van-nav-bar
                title="交易密码"
                left-arrow
                @click-left="goback"
                />
        </div>

        <div class="main">
            <div>
                <p>
                  选择收款方式
                </p>
                <p>支付宝&nbsp;></p>
            </div>
            <div>
                <p>联系方式</p>
                <input class="inputText" type="text" value="" id='name' placeholder="请输入您的联系方式" />
            </div>
            <div>
                <p>姓名</p>
                <input class="inputText" type="text" value="" id='name' placeholder="请输入您的支付宝姓名" />
            </div>
            <div>
                <p>支付宝号</p>
                <input class="inputText" type="text" value="" id='name' placeholder="请输入您的支付宝账号" />
            </div>
        </div>

        <div class="main">
            <div>
                <input class="inputText" type="text" value="" id='name' placeholder="请输入验证码" />
                <a style="color:#DEA853;padding-top: 1.066667rem;">获取验证码</a>
            </div>
        </div>
        
        <div class="btn">
            <div class="subBtn">
                <button>保存</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "pos",
    data() {
        return{
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
    .payment{
        background: rgba(45,45,45,1);
        .paymentTop{
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
        .main{
            margin: .693333rem;
            background:rgba(50,50,50,1);
            border:1px solid rgba(21, 21, 21, 1);
            border-radius:3px;
            color:rgba(244,195,27,1);
            font-size: .853333rem;
            .inputText{
                background-color: rgba(0,0,0,0);
                border: none;
                padding-top: 1.066667rem;
                margin-bottom: .906667rem;
            }
            div{
                display: flex;
                justify-content:space-between;
                border-bottom: 1px solid rgba(21, 21, 21, 1);
                padding: 0 .693333rem;
                p{
                    display: flex;
                    justify-content: space-between;
                    padding:.64rem 0 ;
                    img{
                        width: 1.066667rem;
                        height: 1.066667rem;
                        padding-right: .64rem;
                        padding-top: .32rem;
                    }
                    span:nth-child(2) {
                        color: #B58F46;
                        font-size: .693333rem;
                    }
                }
            }
            div:last-child{
                border:none;
            }
        }

        .btn{
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
        }
    }
</style>

