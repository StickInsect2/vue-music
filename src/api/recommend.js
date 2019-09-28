import jsonp from 'common/js/jsonp'
<<<<<<< HEAD
export default function getRecommend() {
    const url = "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg"
=======
import { jsonpCommonParam, options, UrlRecommend } from './config'

// 获取推荐页面的数据
export function getRecommend() {
  let data = Object.assign({}, jsonpCommonParam, {
      uin: 0,
      platform: "h5",
      needNewCode: 1
  });
  return jsonp(UrlRecommend, data, options);
>>>>>>> jsonp封装完成
}