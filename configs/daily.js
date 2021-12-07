const { dailyData } = require('../data/data.js')
function getTodayString() {
  const now = new Date(Date.now() + 8 * 60 * 60 * 1000)
  const YYYY = now.getFullYear()
  const MM = now.getMonth() + 1
  const DD = now.getDate()
  return `${YYYY}-${MM}-${String(DD).padStart(2, '0')}`
}
function getTodayDate() {
  let todayString = getTodayString()
  return dailyData[todayString]
}

module.exports = {
  getTodayDate,
}
