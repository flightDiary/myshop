//action要定义在仓库state里的三个方法

import {
    RECEIVE_ADDRESS, 
    RECEIVE_CATEGORYS, 
    RECEIVE_SHOPS
} from './mutation-types'

import {
    reqAddress,
    // reqCategory,
    // reqShops,
    // reqUserInfo,
    // reqLogout,
    // reqShopGoods,
    // reqShopRatings,
    // reqShopInfo
  } from '../api/index.js';

export default {
    //异步请求
    //在actions里定义三个方法（这三个方法实际是通过mutation里的方法来操作state里的数据）

    
    // 方法一 触发地址信息对象 address
    async getAddress({commit,state}){
        //state是commit拿到的 commit能拿到仓库state的所有值

        //解构得到latitude，longitude
        // let {latitude,longitude}=state
        let latitude=state.latitude
        let longitude=state.longitude

        let params=latitude+","+longitude

        //result 就是发送ajax返回来的数据
        let result=await reqAddress(params)
        console.log(result)

        // commit 指mutations里面的方法
        commit(RECEIVE_ADDRESS,{
            //这里的address是mutatuon里的方法RECEIVE_ADDRESS的参数（定义这个参数是为了改变state里的值）
            address:result.data
        })
    },

    // 方法二 触发分类数组 categorys获取产品分类
    // async getCategorys(commit){

    //     //发送ajax
    //     let result=await reqCategory()

    //     //commit('mutation里面的方法名字','传递的对象')
    //     commit(RECEIVE_CATEGORYS,{
    //         categorys:result.data
    //     })

    // },


    // export const  reqShops =({latitude,longitude}) =>ajax('/api/shops',{latitude,longitude})
    // 方法三 触发商家数组(获取商家) shops
    // async getShops(commit,state){

    //     let {latitude,longitude}=state

    //     let result=await reqShops({latitude,longitude})

    //     commit(RECEIVE_SHOPS,{
    //         shop:result.data
    //     })
    // }

    

}