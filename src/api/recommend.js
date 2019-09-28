import jsonp from 'common/js/jsonp'
import { jsonpCommonParam, options, UrlRecommend } from './config'

// 获取推荐页面的数据
export function getRecommend() {
  let data = Object.assign({}, jsonpCommonParam, {
      uin: 0,
      platform: "h5",
      needNewCode: 1
  });
  return jsonp(UrlRecommend, data, options);
}