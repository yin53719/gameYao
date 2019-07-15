import Axios from "axios";
import iView from 'iview';
const qs = require('qs');
var user_info = JSON.parse(sessionStorage.getItem('user_info'))
if (user_info) {
  var agent_id = user_info.agent.id
}
Axios.interceptors.request.use(function (config) {
  let token = sessionStorage.getItem('token');
  if (token) {
    config.headers.Authorization = 'Bearer ' + token
  }
  return config;
}, function (error) {
  console.log(error)
  return Promise.reject(error);
});
let baseUrl = 'http://47.103.50.102:8300/Home'
let web_url = ''
const api = {
  // gambling: `${baseUrl}/gambling`, //获取赌局
  gambling: `${baseUrl}/gambling`, //上庄
  login: `${baseUrl}/oauth/token`, //登陆
  wechatAccessToenk: `${baseUrl}/auth/wechat`, //微信登陆
  bets: `${baseUrl}/gambling/`,
  state: `${baseUrl}/game/state`,
  notification:`${baseUrl}/game/notification`,//通告
  trend:`${baseUrl}/gambling/trend`,
  statistics:`${baseUrl}/gambling/statistics`,
  getUser:`${baseUrl}/user/me`,
  getLog:`${baseUrl}/gambling/log`,
  retister:`${baseUrl}/user`,
  sendCode:`${baseUrl}/user/code`

}
// 获取用户列表
const http = {
  // 登陆
  login: function (model) {
  	iView.LoadingBar.start();
    return Axios.post(api.login, qs.stringify(model), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  },
  wechatLogin(model) {
    return Axios.get(api.wechatAccessToenk, {
      params: model
    })
  },
  // 获取赌局
  gambling: function (model) {
    return Axios.get(api.gambling, model)
  },
  // 上庄
  up_gambling: function (model) {
  	iView.LoadingBar.start();
    console.log(model,'model')
    return Axios.post(api.gambling, model)
  },
  // 下注
  bets: function (model) {
  	iView.LoadingBar.start();
    return Axios.post(`${api.bets}${model.gamblingId}/bet`, model).then(res => {})
  },
  getLog:function(model){
    console.log(model,'model>>>>>>')
    return Axios.get(api.getLog, {params:model,paramsSerializer: function(params) {
      return qs.stringify(params, {arrayFormat: 'repeat'})
  }})
  },
  state: function () {
    return Axios.get(api.state)
  },
  // 拉取
  // getCode: function() {
  // 	return Axios.get('https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc429adbe0546c7c1&redirect_uri=andy-yzz.iicp.net:53869&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect')
  // }
  trend:function(){
    return Axios.get(api.trend)
  },
  statistics:function(){
    return Axios.get(api.statistics)
  },
  getUser:function(){
    return Axios.get(api.getUser)
  },
  regster:function(model){
    iView.LoadingBar.start();
    return Axios.post(api.retister,model)
  },
  notification:function(){
    return Axios.get(api.notification)
  },
  sendCode:function(model){
    return Axios.get(api.sendCode,{params:model})
  }
}

export { web_url, http };
