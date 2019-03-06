/*
    通过mutation间接更新state的多个方法对象
*/
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'
import {
  reqAddress,
  reqFoodCategorys,
  reqShops
} from '../api'

export default {
  // 异步获取地址，存入state的address中
  async getAddress ({commit, state}) {
    // 发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    // 提交一个mutation
    if (result.errorCode === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {
        address
      })
    }
  },
  // 异步获取食品分类列表，存入state的categorys中
  async getCategorys ({commit, state}) {
    // 发送异步ajax请求
    const result = await reqFoodCategorys()
    console.log(result)
    // 提交一个mutation
    if (result.errorCode === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {
        categorys
      })
    }
  },
  // 异步获取商家列表，存入state的shops中
  async getShops ({commit, state}) {
    // 发送异步ajax请求
    const {longitude, latitude} = state
    const result = await reqShops(longitude, latitude)
    // 提交一个mutation
    if (result.errorCode === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {
        shops
      })
    }
  }
}
