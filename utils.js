function getDateStr() {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1 + "").padStart("0", 2);
  const day = (date.getDate() + 1 + "").padStart("0", 2);
  return year + month + day;
}

module.exports = {
  getDateStr
};
