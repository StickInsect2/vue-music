// 给元素添加class
export function addClass(el, className) {
  if (!hasClass(el, className)) {
    el.className += ' ' + className
  }
}

// 检查元素是否有某class
export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(&|\\s)')
  return reg.test(el.className)
}