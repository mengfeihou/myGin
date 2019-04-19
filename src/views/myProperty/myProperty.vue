<template>
    <div class="myProperty">
        <div class="myPropertyTop">
            <van-nav-bar
                title="我的资产"
                left-arrow
                @click-left="goback"
                />
        </div>
         <div class="copeText">
             <p>钱包地址</p>
             <p>{{message}}</p>
             <p>
                 <button
                    v-clipboard:copy="message"
                    v-clipboard:success="onCopy"
                    v-clipboard:error="onError"
                 >复制</button>
             </p>
         </div>
        
        <div class="content">
            <ul>
                <li  @click="gopath('/myMill')">
                    <span>我的矿机</span>
                    <span>10&nbsp;&nbsp;></span>
                </li>
                 <li>
                    <span>种子</span>
                    <span>10&nbsp;&nbsp;></span>
                </li>
                <li>
                    <span>激活码</span>
                    <span>10&nbsp;&nbsp;></span>
                </li>
                <li>
                    <span>POS钱包</span>
                    <span>10&nbsp;&nbsp;></span>
                </li>
                <li>
                    <span>POW钱包</span>
                    <span>10909.0&nbsp;&nbsp;></span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "property",
    data() {
        return{
            message: "0xedf91516929a29d6e9b3ae5f709664a55dc30711"
        }
    },
     methods: {
         onCopy(e) {
             console.log(e.text)
             this.$toast('复制成功');
         },
         onError(e) {
             console.log(e)
             this.$toast('复制失败');
         },
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
.myProperty{
      background: rgba(45,45,45,1);
    .myPropertyTop{
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

    .copeText{
        background: #3B3B3B;
        margin: .8rem 0;
        padding: .853333rem;
        color: #DEA853;
        p:nth-child(1){
            font-size: .853333rem
        }
        p:nth-child(2){
            color: #7F735C;
            padding: .746667rem 0;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        p:nth-child(3){
            text-align: center;
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
    }

    .content{
        color: #DEA853;
        font-size: .746667rem;
        ul{
            li{
              background: #3B3B3B; 
              padding: 0 .853333rem; 
              display: flex;
              justify-content: space-between;
              height: 2.933333rem;
              line-height: 2.933333rem;
              margin-bottom: .64rem;
            }
        }
    }
}
</style>
