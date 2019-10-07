import originJsonp from 'jsonp'
// 封装后的jsonp
/*  @param{String} url 请求的服务器地址
    @param{Obj} data 向服务器发送的数据
    @param{Obj} option 向服务器发送的例如回调函数名,超时时间等数据
*/
export default function jsonp (url, data, option) {
  url = param(url, data)
  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

// 将想传递的数组或对象类型的数据转化为字符串形式
/*
    @param{String} url 请求的服务器地址
    @param{Obj} data 向服务器发送的数据
*/
function param (url, data) {
  url += url.indexOf('?') === -1 ? '?' : '&'
  let res = ''// data转化成的字符串
  let value
  for (const k in data) {
    value = data[k] === undefined ? '' : data[k]
    res += `&${k}=${encodeURIComponent(value)}`
  }
  return url + res.substring(1)
}
