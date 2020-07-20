'use strict'

let api = "";

if(window.location.host.indexOf('t.static')>-1 || window.location.host.indexOf('10.1.10.25')>-1){
	api = 'http://t-bind.wanhuhealth.com'
}else if(window.location.host.indexOf('localhost')>-1 ){
	api = 'http://t-bind.wanhuhealth.com'
}else{
	api = 'https://bind.wanhuhealth.com'
}

let WEB_CONFIG = {
	intServiceReqTimeout: 30000,
	accessflag: new Date().getTime(),  //随机标签

	urls: {
		postdata:api+'/getdata',
	}

}

export default WEB_CONFIG;
