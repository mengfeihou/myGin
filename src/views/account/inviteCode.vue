<template>
    <div class="inviteCode">
        <div class="inviteCodeTop">
            <van-nav-bar
                title="邀请码"
                left-arrow
                @click-left="goback"
                />
        </div>

        <div class="main">
           <div class="bacImg">
               <img class="baibg" src="static/images/account/bai_bg@2x.png" alt=""/>
           </div>
           <div class="text">
               <p>我的邀请码</p>
               <p>HG23F</p>
               <p>复制链接</p>
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
    .inviteCode{
        background: rgba(45,45,45,1);
        .inviteCodeTop{
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
            position: relative;
           .bacImg{
               width: 100%;
               .baibg{
                    width: 15.733333rem;
                    height: 24rem;
                    margin: 0 auto;
                    margin-top: 4.533333rem;
                    margin-left: 2.186667rem;
               }
               
           }
           .text{
                width: 15.733333rem;
                height: 24rem;
               position: absolute;
               top: 4.533333rem;
                left: 2.186667rem;;
               color: #F4C31B;
               p:nth-child(1){
                   color: #B38A49;
                   font-size: .8rem;
                   padding: 1.813333rem 5.7rem 1.226667rem;
               }
                p:nth-child(2){
                   color: #F4C31B;
                   font-size: 2.24rem;
                   padding-left:4.106667rem;

               }
                p:nth-child(3){
                    margin: 1.226667rem;
                   margin-left:5.76rem;
                   color: #523200;
                   font-size: .693333rem;
                   width: 4.266667rem;
                   height: 1.493333rem;
                   text-align: center;
                   line-height: 1.493333rem;
                   background-image: url('../../../static/images/account/but@2x.png');
                   background-size: 100%;
               }
           }
        }
    }
</style>

