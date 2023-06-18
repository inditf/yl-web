/*
* 能发送异步Ajax请求的函数模块
* 封装axios库:github获取
* 函数的返回值是promise对象
* 1.优化：统一处理请求异常
*   在外层包一个自己创建的promise对象
*   在请求出错时，步reject（error），而是显示错误信息
* 2.优化：异步得到的不是promise，而是promise.data
*   在请求成功resolve时：resolve(response.data)
*   * */

import axios from 'axios'
import { message } from 'antd'
export default function ajax(url, data = {}, type = 'GET') {

    return new Promise((resolve, reject) => {
        let promise
        //1 执行异步Ajax请求
        if (type === 'GET') {     //发送get请求
            promise = axios.get(url, {  //配置对象
                params: data  //指定请求参数
            });
        } else {      //发post请求
            promise = axios.post(url, data);
        }
        //2 如果成功了，调用resolve（value）
        //3 如果失败了，不调用reject（resaon），而是显示异常信息
        promise.then(response => {
            // console.log(response.data)
            resolve(response.data)
        }).catch(error => {
            message.error('请求出错了！' + error.message)
        })

    })


}

//请求登录接口
//ajax('/login',{username:'Tom',password:'123456'},'POST').then();
//添加用户
//ajax('/manage/user/add',{username:'Tom',password:'123456',phone:'12345678'},'POST').then();
