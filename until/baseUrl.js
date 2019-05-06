// 打包成app 的url
const baseUrl = 'http://39.108.164.222/'

// 线上服务器跨域
const  testUrl = 'dpc/'

//本地服务器跨域
const localUrl = 'api/' 


const Url = baseUrl


const serviceModule = {
	login: {
		url: Url + 'payRollP/php/login.php',
		method: 'post'
	},
	resert: {
		url: Url + 'payRollP/php/resert.php',
		method: 'post'
	}
};


const ApiSetting = { ...serviceModule
}
export default ApiSetting