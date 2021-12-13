const axios = require('axios')
const WECOM_BOT_KEY = process.argv[2]
const DATA = require('./data')
const url = `https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=${WECOM_BOT_KEY}`

const axiosConfig = {
  method: 'post',
  headers: {
    'Content-Type': 'application/json;charset=utf-8;',
  },
  data: DATA.markdown,
}
function send() {
  axios(url, axiosConfig)
    .then((res) => {
      console.log(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
}
console.log(process.env.NODE_ENV)
send()
