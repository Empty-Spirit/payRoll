<template>
	<view class='resert'>
		<view class="problem">
			<view>
				问题一:现住址
			</view>
			<input class="answer" type="text" v-model="params.answer1" />
		</view>
		<view class="problem">
			<view>
				问题二:公司名称
			</view>
			<input class="answer" type="text" v-model="params.answer2" />
		</view>
		<view class="problem">
			<view>
				问题三:最喜欢做的事 
			</view>
			<input class="answer" type="text" v-model="params.answer3" />
		</view>
		<button class='problem' @click='submit' type="primary">提交</button>
		<view v-show='dialog' class='content'>
			<Dia :usertoken='token' class='dialog' />
		</view>
	</view>
</template>

<script>
	import Dia from './dia.vue'
	export default{
		name: 'Resert',
		data (){
			return {
					params:{
						resert:'1',
						answer1: '',
						answer2: '',
						answer3: '',
					},
					dialog: false,
					token:''
			}
		},
		components:{
			Dia
		},
		methods:{
			submit(){
				this.$axios(this.$baseUrl.resert,this.params)
				.then(res => {
					if(res.success){
						this.token = res.data.token
						this.dialog = true
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
	.resert{
		position: absolute;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;	
		padding-top: 100upx;
		background: #dfdfdf;
		.problem{
			width: 400upx;
			margin: 0 auto;
		}
		input{
			border: 1px solid #bbb;
			margin-top: 30upx;
			margin-bottom: 50upx;
		}
		.content{
			position: absolute;
			top: 0px;
			left: 0px;
			right: 0px;
			bottom: 0px;
			z-index: 100;
			background: rgba(221, 221, 221, .5);
			.dialog{
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%,-50%);
			}
		}
	}
</style>
