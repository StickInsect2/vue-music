import jsonp from 'common/js/jsonp'
import {UrlSingnerList, jsonpSingerListParam, jsonpCommonParam, options} from 'api/config'

// 获取歌手列表的数据
export function getSingerList () {
  return jsonp(UrlSingnerList, Object.assign({}, jsonpCommonParam, jsonpSingerListParam), options)
}
