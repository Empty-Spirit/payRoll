{
	"pages": [
		{
			"path": "pages/login",
			"style":{
				"app-plus":{
					"titleNView":false
				}
			}
		},{
			"path": "pages/home",
			"style": {
				"navigationBarTitleText": "主页"
			}
		},{
			"path": "pages/search",
			"style": {
				"navigationBarTitleText": "管理"
			}
		},{
			"path": "pages/nav",
			"style": {
				"navigationBarTitleText": "导航"
			}
		},{
			"path": "pages/person",
			"style": {
				"navigationBarTitleText": "我的"
			}
		}
	],
	"globalStyle": {
		"navigationBarTextStyle": "black",
		"navigationBarTitleText": "uni-app",
		"navigationBarBackgroundColor": "#F8F8F8",
		"backgroundColor": "#F8F8F8"
	},
	"tabBar": {
        "color": "#cdcdcd",
        "selectedColor": "#39cffc",
        "borderStyle": "black",
        "backgroundColor": "#ffffff",
        "list": [{
                "pagePath": "pages/home",
                "iconPath": "static/home/home.png",
                "selectedIconPath": "static/home/homeF.png",
                "text": "首页"
            }, {
                "pagePath": "pages/search",
                "iconPath": "static/supervise/supervise.png",
                "selectedIconPath": "static/supervise/superviseF.png",
                "text": "管理"
            },
            {
                "pagePath": "pages/nav",
                "iconPath": "static/nav/nav.png",
                "selectedIconPath": "static/nav/navF.png",
                "text": "导航"
            }, {
                "pagePath": "pages/person",
                "iconPath": "static/person/person.png",
                "selectedIconPath": "static/person/personF.png",
                "text": "我的"
            }
        ]
    },
	"condition": { //模式配置，仅开发期间生效
        "current": 1, //当前激活的模式（list 的索引项）
        "list": [{
                "name": "首页", //模式名称
                "path": "pages/home", //启动页面，必选
                "query": "" //启动参数，在页面的onLoad函数里面得到。uid=100&t=1535987051
            },
            {
                "name": "管理", //模式名称
                "path": "pages/search", //启动页面，必选
                "query": "" //启动参数，在页面的onLoad函数里面得到。
            },
            {
                "name": "导航", //模式名称
                "path": "pages/nav", //启动页面，必选
                "query": "" //启动参数，在页面的onLoad函数里面得到。uid=100&t=1535987051
            },
            {
                "name": "我的", //模式名称
                "path": "pages/person", //启动页面，必选
                "query": "" //启动参数，在页面的onLoad函数里面得到。
            }
        ]
    }
}
