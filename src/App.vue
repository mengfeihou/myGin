<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style>
	#app {
		width: 100%;
		height: 100%;
		background: rgba(45,45,45,1);
	}

/* 激活码标签去边线 */
	.activationCode .list .van-hairline--top-bottom::after{
		border: none !important;
    }
	.order .list .van-hairline--top-bottom::after{
		border: none !important;
    }
</style>
