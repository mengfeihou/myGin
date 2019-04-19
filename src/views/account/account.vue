<template>
    <div class="account">
        <div class="accountTop">
            <van-nav-bar
                title="账户设置"
                left-arrow
                @click-left="goback"
                />
        </div>

        <div class="content" style="margin-top: .64rem;">
            <ul>
                <li @click="gopath('/payment')">
                    <div>
                        <p><img src="static/images/account/收款@2x.png" alt=""/></p>
                        <p>&nbsp;&nbsp;收款方式</p>
                    </div>
                    <div>
                        <p><img src="static/images/account/更多@2x.png" alt=""/></p>
                    </div>
                </li>
            </ul>
        </div>

        <div class="nav">
            <span class="text1">账户安全</span>
            <span class="text2">(默认交易密码与登录一致)</span>
        </div>
        <div class="content">
            <ul>
                <li @click="gopath('/loginPos')">
                    <div>
                        <p><img src="static/images/account/密码@2x.png" alt=""/></p>
                        <p>&nbsp;&nbsp;修改登录密码</p>
                    </div>
                    <div>
                        <p><img src="static/images/account/更多@2x.png" alt=""/></p>
                    </div>
                </li>

                <li @click="gopath('/transactionPos')">
                    <div >
                        <p><img src="static/images/account/密码@2x.png" alt=""/></p>
                        <p>&nbsp;&nbsp;修改交易密码</p>
                    </div>
                    <div>
                        <p><img src="static/images/account/更多@2x.png" alt=""/></p>
                    </div>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    name:"account",
    methods: {
        onChange(index) {
            this.current = index;
        },
        gopath(path) {
            this.$router.push({
                path: path,
            })
        },
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>
.account{
    background: rgba(45,45,45,1);
    .accountTop{
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

    .nav{
        padding: .906667rem .8rem;
        .text1{
            color: #DEA853;
            font-size: .853333rem;
        }
        .text2{
            color: #7F735C;
            font-size: .746667rem;
        }
    }
    .content{
        color: #DEA853;
        font-size: .853333rem;
        margin: 0 .8rem;
        border: 1px solid#151515;
        border-radius: 3px;
        li{
            padding: 0 .64rem;
            border-bottom: 1px solid #151515;
            height: 2.986667rem;
            line-height: 2.986667rem;
            display: flex;
            justify-content: space-between;
            div:nth-child(1){
                display: flex;
                img{
                    width: .906667rem;
                    height: .906667rem;
                }
            }
            div:nth-child(2){
                display: flex;
                img{
                    width: .373333rem;
                    height: .693333rem;
                }
            }
        }
        li:last-child{
            border-bottom: none;
        }
    }
}
</style>
