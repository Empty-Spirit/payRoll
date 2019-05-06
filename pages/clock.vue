<template>
    <view>
		<view>您当前位置：</view><view>{{address}}</view>
    </view>
</template>

<script>
export default {
    name:'Nav',
	onLoad(){
		uni.getLocation({
			type: 'wgs84',
			success: function (res) {
				console.log('当前位置的经度：' + res.longitude)
				console.log('当前位置的纬度：' + res.latitude)
				console.log('当前位置' + res.address)
				console.log('位置名称：' + res.name)
			},
			fail: function(){
				console.log('fail')
			}
		});
	},
	data(){
		return{
			address:''
		}
	}
}
</script>

<style>

</style>
