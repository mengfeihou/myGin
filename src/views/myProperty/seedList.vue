<template>
    <div class="proList">
        <div class="proListTop">
            申购记录
        </div>
        <div class="content">
            <ul>
                <li v-for="(item,index) in arrList" :key="item.id">
                    <p class="contentText">
                        <span>{{item.text}}</span>
                        <span v-if="item.type === 'end'">{{item.typeName}}</span>
                        <span style="color:#02BF6D;" v-if="item.type === 'loding'">{{item.typeName}}</span>
                        <span style="color:#CB1801;"  v-if="item.type === 'pc'">{{item.typeName}}</span>
                    </p>
                    <div class="contentList">
                        <!-- <div> -->
                            <p>
                                <span>创建时间</span>
                                <span>{{item.time}}</span>
                            </p>
                            <p>
                                <span>需求ID</span>
                                <span>{{item.xuqiu}}</span>
                            </p>
                            <p>
                                <span>数量</span>
                                <span>{{item.shuliang}}</span>
                            </p>
                        <!-- </div> -->
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:["arrItem"],
    computed: {
        arrList() {
            return this.arrItem
        }
    },
    data() {
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
.proList{
    background: rgba(45,45,45,1);
    margin: 1.173333rem;
    .proListTop{
        color: #DEA853;
        font-size: .853333rem;
        padding-bottom: .746667rem;
    }
    .content{
        ul{
            width: 100%;
            li{
                .contentText{
                    display: flex;
                    justify-content: space-between;
                    color:#DEA853;
                    font-size: .8rem; 
                    padding-bottom: .64rem;
                }
                .contentList{
                    color: #D09D4D;
                    display: flex;
                    p{
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        border-bottom: 1px solid #151515;
                        span:nth-child(1){
                            color: #7F735C;
                            font-size: .64rem;
                        }
                        span:nth-child(2){
                            font-size: .8rem;
                            padding: .586667rem 0;
                        }
                    }
                }
            }
        }
    }
}
</style>
