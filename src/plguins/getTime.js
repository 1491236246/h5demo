//格式化时间戳为时分秒
export function dataFormat(data) {
  var s;
  var hours = parseInt((data % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = parseInt((data % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.ceil((data % (1000 * 60)) / 1000);
  s = (hours < 10 ? ('0' + hours) : hours) + ':' + (minutes < 10 ? ('0' + minutes) : minutes) + ':' + (seconds < 10 ? ('0' + seconds) : seconds);
  return s;
}




