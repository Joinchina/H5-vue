/*
* 防抖函数
* fn:函数名
* delay：时间
*/
export const DebounceBy = (fn, t) => {
    let delay = t || 500
    let timer
    return function () {
      let args = arguments;
      if (timer) {
        clearTimeout(timer)
      }

      let callNow = !timer

      timer = setTimeout(() => {
        timer = null
      }, delay)

      if (callNow) fn.apply(this, args)
    }
}
