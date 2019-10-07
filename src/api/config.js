// qq音乐通用的jsonp的参数
export const jsonpCommonParam = {
  g_tk: 5381,
  format: 'jsonp',
  inCharset: 'utf-8',
  outCharset: 'utf-8'
}

// 获取歌手列表数据的jsonp的参数
export const jsonpSingerListParam = {
  key: 'all_all_all',
  channel: 'singer',
  page: 'list',
  pagenum: 1,
  pagesize: 100,
  notice: 0,
  platform: 'yqq',
  needNewCode: 0
}

// jsonp的options
export const options = {
  param: 'jsonpCallback'// 回调函数名
}

// qq音乐获取推荐页面的数据
export const UrlRecommend = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

// qq音乐获取歌手列表的数据
export const UrlSingnerList = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

// 请求正常时的返回值
export const requestOk = 0
