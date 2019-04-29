<template>
    <view class='login'>
        <view class='center'>
            <view class='name'>
                姓名:<input v-model='name ' type="text">
            </view>
            <view class='pwd'>
                密码:<input v-model='pwd' type="password">
            </view>
            <button class='submit' @click='submit'>登录</button>
        </view>
    </view>
</template>

<script>
export default {
    name:'Login',
    data(){
        return{
            name: 'root',
            pwd: 'root'
        }
    },
    methods:{
        submit(){
            // 当带有选项卡(tabBar)的时候不支持uni.navigateTo进行跳转
            // uni.switchTab({
            //     url:'./home'
            // })
            uni.showToast({
                title: '登录中',
                icon: 'loading',
            });
            this.$axios(this.$baseUrl.login)
            .then(res => {
                if(res.code === 'success'){
                    uni.showToast({
                        title: '登录成功',
                        duration: 2000
                    });
                    setTimeout(function(){
                        uni.switchTab({
                            url:'./home'
                        })
                    },2000)
                } else {
                    uni.showToast({
                        title: '登录失败',
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
.login{
    background: url('../static/bg.jpg') no-repeat;
    width: 100%;
    height: 934upx;
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
}
</style>
