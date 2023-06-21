# yl-web

使用antd+react开发登录与注册页面

更新`jwt(Json Web Token)`登录验证,路由守卫  
### `Pages`
Login页:登录成功,设置token跳转Home页,失败提示  
Home页:    
  1. 路由守卫：验证token,无token跳转登录页  
  2. 退出登录: 清除token,跳转登录页  

Register页:注册页面，后台功能未编写        
### Deployed on [GitHub Pages](https://inditf.github.io/yl-web/).
后台地址 [`yl-server`](https://github.com/inditf/yl-server)  
无后台报错: `Network Error`  
默认账号密码：`admin` `123456`
## `Usage`
[`React`](https://react.docschina.org/)  
[`React Router`](https://reactrouter.com/en/main)  
[`Antd`](https://ant.design/docs/react/introduce)   
[`Less`](https://less.bootcss.com/)   
[`Axios`](https://axios-http.com/zh/docs/intro)
 

