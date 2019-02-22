/* 包含n个接口请求函数的模块
固定模式：export const reqAdress = () => ajax()
*/

import ajax from './ajax'
// 1、根据经纬度获取位置详情 gehash:经纬度字符串
export const reqAdress = (gehash) => ajax(`/position/${gehash}`)
// 2、获取食品分类列表
export const reqFoodTypes = () => ajax('/indexCatagory')
// 3、根据经纬度获取商铺列表 注意：{longitude, latitude} 是对象 key-val一样简写
export const reqShops = (longitude, latitude) => ajax(`/shops`, {
  longitude,
  latitude
})
// 4、根据经纬度和关键字搜索商铺列表
// 6、用户名密码登陆
// 7、发送短信验证码
// 8、手机号验证码登陆
// 9、根据会话获取用户信息
// 10、用户登出
// 获取商家信息
// 获取商家评价数组
// 获取商家商品数组
