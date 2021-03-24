<template>
	<div class="container">
		<div class="login-box">
			<el-form :model="form" ref="form" :rules="rules" label-position="top">
				<el-tabs v-model="activeName">
					<el-tab-pane label="密码登入" name="first">
						<div v-if="activeName=='first'">
							<el-form-item label="用户名" prop="userName">
								<el-input v-model="form.userName" placeholder="输入用户名"></el-input>
							</el-form-item>
							<el-form-item label="密码" prop="psd">
								<el-input v-model="form.psd" placeholder="输入密码"></el-input>
							</el-form-item>
						</div>
					</el-tab-pane>
					<el-tab-pane label="验证码登入" name="second">
						<div v-if="activeName=='second'">
							<el-form-item label="手机号" prop="tel">
								<el-input maxlength='11' v-model="form.tel" placeholder="输入手机号"></el-input>
							</el-form-item>
							<el-form-item label="验证码" prop="code" ref="code">
								<el-row :gutter="20">
									<el-col :span="16">
										<el-input v-model="form.code" placeholder="输入验证码"></el-input>
									</el-col>
									<el-col :span="8">
										<el-button @click="getCode">获取验证码</el-button>
									</el-col>
								</el-row>
							</el-form-item>
						</div>
					</el-tab-pane>
					<el-button type="primary" @click="login">登入</el-button>
				</el-tabs>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeName: "first",
				form: {
					userName: "",
					psd: "",
					tel: "",
					code: ""
				},
				rules: {
					userName: [{
						required: true,
						message: '请输入用户名称',
						trigger: 'blur'
					}],
					psd: [{
						required: true,
						message: '请输入用户名称',
						trigger: 'blur'
					}],
					tel: [{
						required: true,
						message: '请输入手机号码',
						trigger: 'blur'
					}],
					code: [{
						required: true,
						message: '请输入验证码',
						trigger: 'blur'
					}]
				}
			}
		},
		methods: {
			login() {
				this.$refs['form'].validate((valid) => {
					if (valid) {
						this.$router.push("/index")
					} else {
						return false;
					}
				});
			},
			getCode() {
				this.$refs['code'].clearValidate()
				this.$refs['form'].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						return false;
					}
				});
			}
		},
	}
</script>

<style lang='scss' scoped>
	.container {
		width: 100%;
		height: 100%;
		background-color: pink;

		.login-box {
			background-color: #fff;
			width: 500px;
			padding: 20px;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);

			/deep/.el-tabs__nav-wrap::after {
				content: none;
			}

			/deep/ .el-tabs__nav {
				position: relative;
				left: 50%;
				transform: translateX(-50%) !important;

			}

			/deep/ .el-tabs__item {
				padding: 0 80px;
				font-size: 20px;
			}

			/deep/.el-tabs__nav-prev,
			/deep/.el-tabs__nav-next {
				display: none;
			}

			.el-button {
				width: 100%;
			}
		}
	}
</style>