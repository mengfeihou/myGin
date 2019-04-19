<template>
    <div class="loginPos">
        <div class="loginPosTop">
            <van-nav-bar
                title="登录密码"
                left-arrow
                @click-left="goback"
                />
        </div>

        <div class="main">
            <div>
                <p>
                   <img src="static/images/account/密码@2x.png" alt="">
                </p>
                <input class="inputText" type="text" value="" id='name' placeholder="请输入手机号或邮箱" />
            </div>
            <div>
                <p><img src="static/images/account/密码@2x.png" alt=""></p>
                <input class="inputText" type="text" value="" id='name' placeholder="请输入验证码" />
                <a style="color:#DEA853; padding-top: 1.066667rem;font-size:.8rem;">获取验证码</a>
            </div>
            <div>
                <p><img src="static/images/account/密码@2x.png" alt=""></p>
                <input style="width:14.813333rem;" class="inputText" type="text" value="" id='name' placeholder="新密码为6~16个字符，建议不要纯数字" />
            </div>
            <div>
                <p><img src="static/images/account/密码@2x.png" alt=""></p>
                <input class="inputText" type="text" value="" id='name' placeholder="再次输入相同密码" />
            </div>
        </div>

        
        <div class="btn">
            <div class="subBtn">
                <button>提交</button>
            </div>
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
    .loginPos{
        background: rgba(45,45,45,1);
        .loginPosTop{
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

