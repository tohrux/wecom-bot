const { jumpUrl } = require('../configs')
const dailyData = {
  crazyThursday: {
    title: '🍗肯德基疯狂星期4',
    img: 'https://s4.ax1x.com/2021/12/08/o2AG8O.png',
    desc: '懂得都懂',
  },
  default: {
    title: '该点外卖了',
    img: 'https://s4.ax1x.com/2021/12/08/o25ZfU.png',
    desc: '今天也要好好吃饭~',
  },
  '2021-12-08': {
    title: '🍔麦当劳今日特惠',
    img: 'https://s4.ax1x.com/2021/12/08/o2MGGR.png',
    desc: '麦辣鸡腿堡 ¥5',
  },
  '2021-12-10': {
    title: '🍔麦当劳今日特惠',
    img: 'https://s4.ax1x.com/2021/12/08/o2Mrid.png',
    desc: '巨无霸3件套 ¥18',
  },
  '2021-12-13': {
    title: '🍔麦当劳今日特惠',
    img: 'https://s4.ax1x.com/2021/12/08/o2Mhdg.png',
    desc: '麦辣鸡腿堡2件套 ¥12',
  },
  '2021-12-14': {
    title: '🍔麦当劳今日特惠',
    img: 'https://s4.ax1x.com/2021/12/08/o2MqyV.png',
    desc: '麦麦脆汁鸡 ¥6.5',
  },
}
const jumpList = [
  {
    title: '三门路干饭指南 📖',
    url: jumpUrl,
    type: 1,
  },
  {
    title: '我要推荐🙋/我有建议🙋‍♂️',
    url: 'https://tohrux.github.io/2021/12/08/%E6%88%91%E8%A6%81%E6%8E%A8%E8%8D%90%F0%9F%99%8B/',
    type: 1,
  },
]
function getTodayString(now) {
  const YYYY = now.getFullYear()
  const MM = now.getMonth() + 1
  const DD = now.getDate()
  return `${YYYY}-${MM}-${String(DD).padStart(2, '0')}`
}
function getTodayDate() {
  const now = new Date(
    Date.now() + (process.env.NODE_ENV !== 'development' ? 8 * 60 * 60 * 1000 : 0)
  )
  if (now.getDay() === 4) {
    return dailyData['crazyThursday']
  }
  return dailyData[getTodayString(now)] || dailyData['default']
}
const DAILY_DATA = getTodayDate()
const card = {
  msgtype: 'template_card',
  template_card: {
    card_type: 'news_notice',
    main_title: {
      title: DAILY_DATA.title,
      desc: DAILY_DATA.desc,
    },
    card_image: {
      url: DAILY_DATA.img,
      aspect_ratio: 2.25,
    },
    jump_list: jumpList,
    card_action: {
      type: 1,
      url: jumpUrl,
    },
  },
}

module.exports = card
