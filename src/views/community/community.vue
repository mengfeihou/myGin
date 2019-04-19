<template>
    <div class="community">
        <div class="communityTop">
            <van-nav-bar
                title="我的社区"
                left-arrow
                @click-left="goback"
                />
        </div>

        <div class="content">
            团队总人数：3
        </div>

        <div class="navBar">
            <span>我></span>
            <span>大叔</span>
        </div>

        <div class="main">
            <ul>
                <li v-for="(item,index) in arr" :key="item.id">
                    <div>
                        <span>{{index+1}}、{{item.name}}</span>
                        <span>{{item.type}}</span>
                    </div>
                    <div>
                        <span>用户状态：<i>{{item.state}}</i></span>
                        <p><button>查看下级</button></p>
                    </div>
                </li>
                <li>
                    <div>
                        <span>1、飞行员</span>
                        <span>vip1</span>
                    </div>
                    <div>
                        <span>用户状态：<i>已激活</i></span>
                        <p><button>查看下级</button></p>
                    </div>
                </li>
            </ul>
        </div>

        
        <div class="footer">
			<van-tabbar v-model="tabactive" active-color="#A09070">
				<van-tabbar-item  icon="home-o" @click="gopath('/home')">
				</van-tabbar-item>
				<van-tabbar-item  icon="chat-o">
				</van-tabbar-item>
				<van-tabbar-item  icon="bag-o"  @click="gopath('/community')">
				</van-tabbar-item>
				<van-tabbar-item  icon="manager-o">
				</van-tabbar-item>
			</van-tabbar>
		</div>
    </div>
</template>

<script>
export default {
    name: "community",
    data() {
        return{
            tabactive: 2,
            arr: [
                {
                    id:1,
                    name: "飞行员",
                    type: "VIP1",
                    state: "已激活"
                },
                {
                    id:2,
                    name: "飞行员",
                    type: "VIP1",
                    state: "已激活"
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
.community{
    background: rgba(45,45,45,1);
    .communityTop{
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
        color: #F4C31B;
        font-size: .8rem;
        margin: .693333rem;
        border: 1px solid #151515;
        height: 2.933333rem;
        line-height: 2.933333rem;
        padding-left: .8rem;
    }

    .navBar{
        padding-left: .693333rem;
        color: #7F735C;
        padding-bottom: .96rem;
    }

    .main{
        color: #DEA853;
        ul{
            margin: 0 .693333rem;
            li{
                border: 1px solid #151515;
                border-radius:3px;
                margin-bottom: 1.066667rem;
                div{
                    height: 2.933333rem;
                    line-height: 2.933333rem;
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid #151515;
                    padding: 0 .8rem;
                    p{
                       button{
                            width: 72px;
                            height: 1.333333rem;
                            line-height: 1;
                            background: #DEA853;
                            border: none;
                            border-radius: 25px;
                            color: #523200;
                        }  
                    }
                    i{
                        color: #02BF6D;
                    }
                   
                }
                div:nth-child(2){
                    border:none;
                }
            }
        }
    }

    .footer{
        height:2.666667rem; 
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


