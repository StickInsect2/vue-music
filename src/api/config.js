export const jsonpCommonParam = {
    g_tk: 5381,
    format: "jsonp",
    inCharset: "utf-8",
    outCharset: "utf-8"
}

//jsonp的options
export const options = {
    param: "jsonpCallback"//回调函数名
}

//请求正常时的返回值
export const Request_OK = 0;

//qq音乐获取推荐页面的数据
export const UrlRecommend = "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg";