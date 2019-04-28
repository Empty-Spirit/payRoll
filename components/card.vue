<template>
	<view class='card'>
		<view class='title'>
			{{title}}
		</view>
		<view>
			
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			title:{
				type:String,
				default:''
			}
		}
	}
</script>

<style scoped lang='less'>
	.card{
		.title{
			width: 100upx;
			height: 40upx;
			color: #fff;
			font-weight: 500;
			font-size: 30upx;
			line-height: 40upx;
			text-align: center;
			background: rgb(4, 155, 224);
		}
	}
</style>
