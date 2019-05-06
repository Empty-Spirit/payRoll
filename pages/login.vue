<template>
    <view class='login'>
        <view class='center'>
            <view class='name'>
                姓名:<input v-model='params.userName ' type="text">
            </view>
            <view class='pwd'>
                密码:<input v-model='params.password' type="password">
            </view>
            <button class='submit' @click='submit'>登录</button>
			<view class='forget' @click='resert'>
				忘记密码
			</view>
        </view>
    </view>
</template>

<script>
export default {
    name:'Login',
    data(){
        return{
            params:{
				userName: 'root',
				password: 'root'
			}
        }
    },
    methods:{
        submit(){
            uni.showToast({
                title: '登录中',
                icon: 'loading',
            });
            this.$axios(this.$baseUrl.login,this.params)
            .then(res => {
                if(res.success){
                    uni.showToast({
                        title: '登录成功',
                        duration: 2000
                    });
                    setTimeout(function(){
						// 当带有选项卡(tabBar)的时候不支持uni.navigateTo进行跳转
                        uni.switchTab({
                            url:'./home'
                        })
                    },2000)
                } else {
                    uni.showToast({
                        title: res.data,
                        icon: 'none',
                        duration: 2000
                    });
                }
            })
        },
		resert (){
			uni.navigateTo({
				url:'./resert/resert'
			})
		}
    }
}
</script>

<style scoped lang='less'>
.login{
	position: absolute;
    background: url('http://39.108.164.222/payRollP/image/bg.jpg') no-repeat;
	background-size: 100% 1624upx;
	left: 0upx;
	right: 0upx;
	bottom: 0upx;
	top: 0upx;
    color: #333;
    padding-top: 400upx;
    .center{
        width: 260px;
        margin: 0 auto;
        :first-child{
            margin-bottom: 10px;
        }
    }
    input{
        border: 1px solid #666;
        margin-left: 10px;
        font-size: 14px;
        width: 200px;
    }
    .submit{
        width: 260px;
        text-align: center;
        height: 40px;
        background: #fff;
        line-height: 40px;
        margin-top: 50px;
        background: #fff;
        opacity: 0.5;
    }
	.forget{
		float: right;
		margin-top: 20upx;
		opacity: 0.8;
		text-decoration: underline;
	}
}
</style>
