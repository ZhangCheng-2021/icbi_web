<template>
	<div class="my-header">
		<div class="title">
			<span class="icon" @click="isClose" :class="isShow?'el-icon-arrow-right':'el-icon-arrow-left'"></span>
			<h1>后台管理</h1>
		</div>
		<div class="info">
			<el-dropdown trigger="click" @command="handleCommand">
				<div>
					<span class="name">howfar</span>
					<img src="../assets/u=3847694165,2728752190&fm=26&gp=0.jpg" alt="">
				</div>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command='person-info'>个人信息</el-dropdown-item>
					<el-dropdown-item command='login'>退出登录</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
	import eventBus from '../utils/event-bus.js'
	export default {

		data() {
			return {
				isShow: false
			}
		},
		methods: {
			handleCommand(command) {
				console.log(command)
			},

			isClose() {
				this.isShow = !this.isShow
				eventBus.$emit('sendVal', this.isShow)
			}
		}
	}
</script>

<style lang='scss' scoped>
	.my-header {
		height: 60px;
		line-height: 60px !important;

		.title {
			float: left;
			.icon{
				font-size: 20px;
				font-weight: bold;
			}
			h1 {
				font-size: 20px;
				display: inline;
				margin-left: 10px;
			}
		}


		.info {
			float: right;
		}

		img {
			width: 40px;
			height: 40px;
			border-radius: 50%;
			vertical-align: middle;
			margin-left: 10px;
		}

		.name {
			cursor: pointer;
			font-size: 16px;
		}
	}
</style>