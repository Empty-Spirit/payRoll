<template>
	<view class='dia'>
		<view class="pwd">
			<text class='title'>新密码:</text> <input type="password" v-model="params.password1" />
		</view>
		<view class="pwd">
			<text class="title">确认密码:</text> <input type="password"v-model="params.password2" />
		</view>
		<button class='submit' @click="submit" type="primary">确定</button>
	</view>
</template>

<script>
	export default{
		name: 'Dia',
		data(){
			return{
				params:{
					resert:'0',
					password1: '',
					password2: '',
					token:''
				}
			}
		},
		props:{
			usertoken:{
				type: String,
				default:''
			}
		},
		methods:{
			submit(){
				this.params.token = this.usertoken
				this.$axios(this.$baseUrl.resert,this.params)
				.then(res => {
					if(res.success){
						uni.showToast({
						    title: res.data,
						    duration: 2000
						});
						setTimeout(function(){
							uni.navigateTo({
								url:'./../login'
							})
						},0)
					} else {
						uni.showToast({
						    title: res.data,
						    icon: 'none',
						    duration: 2000
						});
					}
				})
			}
		}
	}
</script>

<style scoped lang='less'>
	.dia{
		width: 600upx;
		height: 350upx;
		background: #fff;
		padding-top: 50px;
		border-radius: 30upx;
		.title{
			display: inline-block;
			width: 170upx;
		}
		.pwd{
			width: 580upx;
			margin: 0 auto;
			margin-bottom: 50upx;
		}
		input{
			width: 400upx;
			border: 1px solid #bbb;
		}
		.submit{
			width: 200upx;
		}
	}
</style>
