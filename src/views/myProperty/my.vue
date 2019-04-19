<template>
    <div class="my">
        <div class="myTop">
            <h1>我</h1>
            <div class="activated">
                <p class="logo"><img src="static/images/my/logo@2x.png" alt=""/></p>
                <p class="desc" v-if="type">
                    <span>蓦然回首</span>
                    <span>vip1</span>
                </p>
                <div class="notActivated" v-else>
                    <p class="hint">新注册的用户需要激活码后才能正常使用，激活码可以向上级或者上上级领导所要或要求转让。</p>
                    <p>
                        <span>蓦然回首</span>
                        <span>激活</span>
                    </p>
                </div>
            </div>
        </div>

        <div class="content">
            <ul>
                <li>
                    <div>
                        <p><img src="static/images/my/邀请码@2x.png" alt=""/></p>
                        <p>&nbsp;&nbsp;我的邀请码</p>
                    </div>
                    <div>
                        <p>0&nbsp;&nbsp;</p>
                        <p><img src="static/images/my/更多@2x.png" alt=""/></p>
                    </div>
                </li>

                <li  @click="gopath('/myProperty')">
                    <div >
                        <p><img src="static/images/my/资产@2x.png" alt=""/></p>
                        <p>&nbsp;&nbsp;我的资产</p>
                    </div>
                    <div>
                        <p>0&nbsp;&nbsp;</p>
                        <p><img src="static/images/my/更多@2x.png" alt=""/></p>
                    </div>
                </li>

                <li  @click="gopath('/order')">
                    <div>
                        <p><img src="static/images/my/订单管理@2x.png" alt=""/></p>
                        <p>&nbsp;&nbsp;订单记录</p>
                    </div>
                    <div>
                        <p>0&nbsp;&nbsp;</p>
                        <p><img src="static/images/my/更多@2x.png" alt=""/></p>
                    </div>
                </li>

                <li @click="gopath('/account')">
                    <div>
                        <p><img src="static/images/my/设置 @2x.png" alt=""/></p>
                        <p>&nbsp;&nbsp;账户设置</p>
                    </div>
                    <div>
                        <p>0&nbsp;&nbsp;</p>
                        <p><img src="static/images/my/更多@2x.png" alt=""/></p>
                    </div>
                </li>

                <li>
                    <div>
                        <p><img src="static/images/my/客服 (1)@2x.png" alt=""/></p>
                        <p>&nbsp;&nbsp;我的客服</p>
                    </div>
                    <div>
                        <p>0&nbsp;&nbsp;</p>
                        <p><img src="static/images/my/更多@2x.png" alt=""/></p>
                    </div>
                </li>

                <li>
                    <div>
                        <p><img src="static/images/my/退出@2x.png" alt=""/></p>
                        <p>&nbsp;&nbsp;安全退出</p>
                    </div>
                    <div>
                        <p>0&nbsp;&nbsp;</p>
                        <p><img src="static/images/my/更多@2x.png" alt=""/></p>
                    </div>
                </li>
            </ul>
        </div>

        <div class="footer">
            <van-tabbar v-model="active">
                <van-tabbar-item @click="gopath('/home')">
                    <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal">
                </van-tabbar-item>
                <van-tabbar-item>
                    <img slot="icon" slot-scope="props2" :src="props2.active ? icon2.active : icon2.normal">
                </van-tabbar-item>
                <van-tabbar-item  @click="gopath('/community')">
                    <img slot="icon" slot-scope="props3" :src="props3.active ? icon3.active : icon3.normal">
                </van-tabbar-item>
                <van-tabbar-item @click="gopath('/my')">
                    <img slot="icon" slot-scope="props4" :src="props4.active ? icon4.active : icon4.normal">
                </van-tabbar-item>
            </van-tabbar>
		</div>
    </div>
</template>

<script>
export default {
    name: "my",
    data() {
        return{
            type: true,
            active: 3,
            icon: {
                active: 'static/images/my/首页_on@2x.png',
                normal: 'static/images/my/首页@2x.png'
            },
            icon2: {
                active: 'static/images/my/社区_on@2x.png',
                normal: 'static/images/my/社区@2x.png',
            },
            icon3: {
                active: 'static/images/my/商城_on@2x.png',
                normal: 'static/images/my/商城@2x.png',
            },
            icon4: {
                active: 'static/images/my/我的_on@2x.png',
                normal: 'static/images/my/我的@2x.png',
            },
        }
    },
    methods: {
        onChange(index) {
            this.current = index;
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
.my{
    background: rgba(45,45,45,1);
    .myTop{
        background: #121619;
        color: #DEA853;
        h1{
            height: 4.853333rem;
            line-height: 4.853333rem;
            font-size: 1.066667rem;
            text-align: center;
        }
        .activated{
            display: flex;
            padding-bottom: 1.44rem;
            padding-left: .8rem;
            .logo{
                width: 3.466667rem;
                height: 3.466667rem;
                background:rgba(51,55,57,1);
                border:1px solid rgba(148, 132, 86, 1);
                border-radius:50%;
                line-height: 3.466667rem;
                text-align: center;
                img{
                   width: 2.24rem; 
                   height: 2.026667rem;
                }
            }
            .desc{
                padding-left: .746667rem;
                span:nth-child(1){
                    display: block;
                    font-size: 1.013333rem;
                    padding-bottom: .64rem;
                }
                span:nth-child(2){
                    display: block;
                    font-size: .693333rem;
                    width:2.666667rem;
                    height:1.066667rem;
                    line-height: 1.066667rem;
                    text-align: center;
                    background:rgba(255,255,255,0.14);
                    border:1px solid rgba(148, 132, 86, 1);
                    border-radius:20px;
                }
            }
            .notActivated{
                .hint{
                    width: 13.973333rem;
                    font-size: .64rem;
                    color: #9A8358;
                    padding-bottom: .64rem;
                }
                p{
                    padding-left: .746667rem;
                    span:nth-child(1){
                        display: inline-block;
                        font-size: .906667rem;
                    }
                    span:nth-child(2){
                        display: inline-block;
                        font-size: .693333rem;
                        width:2.666667rem;
                        height:1.066667rem;
                        line-height: 1.066667rem;
                        text-align: center;
                        background:#F1D277;
                        border:1px solid rgba(148, 132, 86, 1);
                        border-radius:20px;
                        color: #523200;
                    }
                }
            }
        }
    }

    .content{
        color: #DEA853;
        font-size: .853333rem;
        margin: 0 .8rem;
        li{
            border-bottom: 1px solid #000;
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
    }

    .footer{
        background:rgba(18,22,25,1);
        .van-tabbar{
            background:rgba(18,22,25,1);
        }
        .van-icon, .van-icon::before,.van-icon-home-o:before{
            font-size: 1.28rem;

        }
    }
}
</style>
