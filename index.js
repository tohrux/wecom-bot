const axios = require('axios')
const WECOM_BOT_KEY = process.argv[2]
const { getTodayDate } = require('./configs/daily.js')
const DATA = require('./data/data.js')

const url =
  `https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=${WECOM_BOT_KEY}`

const DAILY_DATA = getTodayDate()

const axiosConfig = {
  method: 'post',
  headers: {
    'Content-Type': 'application/json;charset=utf-8;',
  },
  data: {
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
      jump_list: DATA.jumpList,
      card_action: {
        type: 1,
        url: DATA.jumpUrl,
      },
    },
  },
}

axios(url, axiosConfig)
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.log(error)
  })
