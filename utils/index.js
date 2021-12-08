const { dailyData } = require('../data/index.js')
function getTodayString(now) {
  const YYYY = now.getFullYear()
  const MM = now.getMonth() + 1
  const DD = now.getDate()
  return `${YYYY}-${MM}-${String(DD).padStart(2, '0')}`
}
function getTodayDate() {
  const now = new Date(Date.now() + 8* 60 * 60 * 1000)
  if(now.getDay()===4){
    return dailyData['crazyThursday']
  }
  return dailyData[getTodayString(now)] || dailyData['default']
}

module.exports = {
  getTodayDate,
}
