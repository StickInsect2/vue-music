import jsonp from 'common/js/jsonp'
import { jsonpCommonParam, options, UrlRecommend } from './config'
import axios from 'axios'

// 获取推荐页面的数据
export function getRecommend() {
  let data = Object.assign({}, jsonpCommonParam, {
    uin: 0,
    platform: 'h5',
    needNewCode: 1
  })
  return jsonp(UrlRecommend, data, options)
}

// Object.assign用于合并对象，将第一个参数后面跟的参数合并到第一个参数里面，并返回第一个参数。

// 获取歌单数据
export function getDiscList() {
  const url = '/api/getDiscList'

  const data = Object.assign({}, jsonpCommonParam, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    console.log(res)
    return Promise.resolve(res.data)
  })
}