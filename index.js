const axios = require('axios')
const { getTodayDate } = require('./configs/daily.js')
const data = require('./data/data.js')
const url =
  'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=fb50a89c-cda0-4b85-992f-6009e99211ff'

const dailyData = getTodayDate()
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
        title: dailyData.title,
        desc: dailyData.desc,
      },
      card_image: {
        url: dailyData.img,
        aspect_ratio: 2.25,
      },
      jump_list: data.jumpList,
      card_action: {
        type: 1,
        url: 'https://www.mcdonalds.com.cn/',
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
