<template>
    <div class="codeList">
        <ul>
            <li v-for="(item, index) in arrList" :key = "item.id">
                <span>{{item.code}}</span>
                <span style="color:#CB1801;" v-if="item.type === 'loding'">{{item.state}}</span>
                <span style="color:#02BF6D" v-if="item.type === 'end'">{{item.state}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        arrItem: {
            type:Array,
            default:[]
        }
    },
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
    .codeList{
        background: rgba(45,45,45,1);
        margin: 1.173333rem;
        margin-bottom: 0;
        color: #7F735C;
        font-size: .8rem;
        ul{
            li{
                height: 2.933333rem;
                line-height: 2.933333rem;
                border-bottom: 1px solid #151515;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>
