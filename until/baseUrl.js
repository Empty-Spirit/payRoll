
// 线上域名 跨域
const  baseUrl = 'dpc/'

// 测试域名
const testUrl = 'http://gsit.nttdatadm.com:8010/'

//本地域名
const localUrl = 'http://test.com' 


const Url = baseUrl

const serviceModule = {
    login: {
        url: Url+'api/geely/campaign/dealer/get?seriesCode=yjsuv&province=210&city=221001',
        method: 'get'
    }
};


const ApiSetting = { ...serviceModule
}
export default ApiSetting


// http://gsit.nttdatadm.com:8010/api/geely/campaign/dealer/get?seriesCode=yjsuv&province=210&city=221001