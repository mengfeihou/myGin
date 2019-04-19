<template>
    <div class="home">
        <div class="homeTop">
            <img src="static/images/home/logo@2x.png" />
            <span>GIN全球数字权证交易平台</span>
        </div>
        <!-- 轮播 -->
        <div class="banner">
            <van-swipe @change="onChange">
                <van-swipe-item>
                    <img class="bannerImg" src="static/images/home/banner@2x.png"/>
                </van-swipe-item>
                <van-swipe-item>
                    <img class="bannerImg" src="static/images/home/banner@2x.png"/>
                </van-swipe-item>
            </van-swipe>
        </div>

        <div class="notice">
            <img src="static/images/home/gonggao@2x.png" />
            <span>全球数字权证交易平台今天开启！</span>
        </div>

        <div class="content">
            <div>
                <div  @click="gopath('/pro')">
                    <img src="static/images/home/bg1@2x.png" />
                    <span>申购矿机</span>
                </div>
                <div>
                    <img src="static/images/home/bg3@2x.png" />
                    <span>抢购大厅</span>
                </div>
            </div>
            <div>
                <div  @click="gopath('/sell')">
                    <img src="static/images/home/bg2@2x.png" />
                    <span>出售GIN</span>
                </div>
                <div>
                    <img src="static/images/home/bg4@2x.png" />
                    <span>转出GIN</span>
                </div>
            </div>
        </div>


        <div class="noticeList">
            <div class="noticeListTop">
                <span>公告中心</span>
                <span>更多<van-icon name="arrow" class="icon"/></span>
            </div>
            <ul class="noticeListMain">
                <li>
                    <p>GIN全球数字权证交易平台全新改版!</p>
                    <p>2019-2-15 13:36:02</p>
                </li>
                <li v-for="item in arrList" :key="item.id">
                    <p>{{item.title}}</p>
                    <p>2019-2-15 13:36:02{{item.time}}</p>
                </li>
            </ul>
        </div>

        <div class="footer">
            <van-tabbar v-model="active">
                <van-tabbar-item @click="gopath('/home')">
                    <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal">
                </van-tabbar-item>
                <van-tabbar-item  @click="gopath('/community')">
                    <img slot="icon" slot-scope="props2" :src="props2.active ? icon2.active : icon2.normal">
                </van-tabbar-item>
                <van-tabbar-item>
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
    name: "home",
    data() {
        return{
            active:0,
            current: 0,
            tabactive: 0,
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
            arrList: [
                {
                    id: "1",
                    title: "GIN全球数字权证交易平台全新改版!",
                    time: "2019-2-15 13:36:02"
                },
                {
                    id: "2",
                    title: "GIN全球数字权证交易平台全新改版!",
                    time: "2019-2-15 13:36:02"
                },
                {
                    id: "3",
                    title: "GIN全球数字权证交易平台全新改版!",
                    time: "2019-2-15 13:36:02"
                },
                {
                    id: "4",
                    title: "GIN全球数字权证交易平台全新改版!",
                    time: "2019-2-15 13:36:02"
                }
            ]
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
    .home{
        background: rgba(45,45,45,1);
        .homeTop{
            width: 100%;
            height: 3.413333rem;
            line-height: 3.413333rem;
            display: flex;
            justify-content: center;
            background:rgba(18,22,25,1);
            img{
                width: 1.44rem;
                height: 1.28rem;
                padding-top: 1.066667rem;
            }
            span{
                font-size:.8rem;
                font-family:FZZCHJW--GB1-0;
                font-weight:400;
                background:linear-gradient(10deg,rgba(205,155,86,1) 0%, rgba(255,225,130,1) 99.21875%);
                -webkit-background-clip:text;
                -webkit-text-fill-color:transparent;
            }
        }
        .banner{
            margin: .64rem 0;
            .bannerImg{
               width: 100%;
                height: 8.533333rem;
            }
        }
        .notice{
            border:  1px solid rgba(0, 0, 0, 1);
            height: 2.133333rem;
            box-sizing: border-box;
            padding: .64rem;
            color: #DEA853;
            font-size: .8rem;
            img{
                width: 1.12rem;
                height: .906667rem;
            }
        }
        .content{
            color: #ECCF9B;
            display: flex;
            padding-bottom: 1.066667rem;
            div:nth-child(1){
                div:nth-child(1){
                    margin: .7rem;
                    position: relative;
                    img{
                        width: 8.96rem;
                        height: 5.92rem;
                    }
                    span{
                        position: absolute;
                        left: .96rem;
                        bottom: .906667rem;
                    }
                }
                div:nth-child(2){
                    position: relative;
                    margin: 0 .7rem;
                    img{
                        width: 8.96rem;
                        height: 2.88rem;
                    }
                    span{
                        position: absolute;
                        right: 1.013333rem;
                        top: 1.066667rem;
                    }
                }
            }
            div:nth-child(2){
                 div{
                    position: relative;
                     img{
                        width: 8.8rem;
                        height: 4.426667rem;
                     }
                    span{
                        position: absolute;
                        right: .693333rem;
                        bottom: .8rem;
                    }
                }
                 div:nth-child(1){
                     margin: .8rem .8rem .8rem 0;
                } 
                div:nth-child(2){
                    margin-right: .8rem;
                }
            }
        }
        .noticeList{
            margin-bottom: 2.666667rem;
            .noticeListTop{
                color: #DEA853;
                display: flex;
                justify-content: space-between;
                padding: 0 .8rem .8rem;
                span:nth-child(1){
                    font-size: 1.013333rem;
                }
                span:nth-child(2){
                    font-size: .64rem;
                    color: #7F735C;
                    padding-top: .426667rem;
                }
            }
            .noticeListMain{
                color: #AF9367;
                margin: 0 .8rem;
                li{
                    border-bottom: 1px solid #000000;
                    p:nth-child(1){
                        margin: .693333rem 0;
                    }
                    p:nth-child(2){
                        color: #7F735C;
                        margin-bottom: .693333rem;
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

