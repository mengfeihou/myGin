<template>
    <div class="myMill">
        <div class="myMillTop">
            <van-nav-bar
                title="矿机"
                left-arrow
                @click-left="goback"
                />
        </div>
         <div class="content">
            <div>
                <p>当前矿机数</p>
                <p>100</p>
            </div>
            <div>
                <p>可释放GIN</p>
                <p>2000</p>
            </div>
         </div>
        
        <div class="main">
            <ul>
                <li>
                   <div>启动时间：2018-12-11 14:43:17</div> 
                   <div>
                       <p>
                        <img src="static/images/home/banner@2x.png" />
                       </p>
                       <p>净产值：2200.00</p>
                   </div>
                </li>
                <li>
                   <div>启动时间：2018-12-11 14:43:17</div> 
                   <div>
                       <p>
                        <img src="static/images/home/banner@2x.png" />
                       </p>
                       <p>净产值：2200.00</p>
                   </div>
                </li>
                <li>
                   <div>启动时间：2018-12-11 14:43:17</div> 
                   <div>
                       <p>
                        <img src="static/images/home/banner@2x.png" />
                       </p>
                       <p>净产值：2200.00</p>
                   </div>
                </li>
                <li>
                   <div>启动时间：2018-12-11 14:43:17</div> 
                   <div>
                       <p>
                        <img src="static/images/home/banner@2x.png" />
                       </p>
                       <p>净产值：2200.00</p>
                   </div>
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
.myMill{
      background: rgba(45,45,45,1);
    .myMillTop{
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
       margin: .693333rem;
       border: 1px solid #151515;
       border-radius: 3px;
       padding: 1.066667rem 0;
       display: flex;
       div:nth-child(1){
           border-right: 1px solid #151515;
       }
       div{
            font-size: .746667rem;
           p:nth-child(2){
            font-size: 1.173333rem;
           }
           text-align: center;
           flex: 1;
       }
   }

   .main{
       color: #7F735C;
       ul{
           margin:  0 .693333rem;
           li{
               border-bottom: 1px solid #151515;
               div:nth-child(1){
                   font-size: .746667rem;
                   margin-bottom: .373333rem;
               }
               div:nth-child(2){
                   height: 2.933333rem;
                   padding:.373333rem;
                   
               margin-bottom: .373333rem;
                   background:rgba(50,50,50,1);
                   display: flex;
                   justify-content: space-between;
                   p:nth-child(1){
                       width: 2.56rem;
                       height: 2.4rem;
                       border: 1px solid #5F5332;
                       background:rgba(255,255,255,0.05);
                       img{
                           width: 2.186667rem;
                           height: 1.493333rem;
                           display: inline-block;
                           padding-top: .48rem;
                           padding-left: .206667rem;
                       }
                    }
                    p:nth-child(2){  
                        font-size: 16px;
                        color: #DEA853;
                        line-height: 2.933333rem;
                    }
               }
           }
       }
   }
}
</style>
