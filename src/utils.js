const date = new Date();
const year = date.getFullYear();
const month = (date.getMonth() + 1 + "").padStart(2, "0");
const day = (date.getDate() + "").padStart(2, "0");

// 获取当前日期，返回示例：20190721
function getDateStr() {
  const _month = (month + "").padStart(2, "0");
  const _day = (day + "").padStart(2, "0");
  return year + _month + _day;
}

// 获得当前日期在当月第几周
function getMonthWeek(year, month, day) {
  const date = new Date(year, parseInt(month) - 1, day);
  const w = date.getDay();
  const d = date.getDate();
  return Math.ceil((d + 6 - w) / 7);
}

function getVersion() {
  const _day = new Date().getDay();
  const _year = (year + "").slice(2, 4);
  const weekth = getMonthWeek(year, month, day);
  return _year + month + "." + weekth + _day;
}

module.exports = {
  getDateStr,
  getVersion
};
