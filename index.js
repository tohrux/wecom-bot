const axios = require('axios');
const url =
  'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=fb50a89c-cda0-4b85-992f-6009e99211ff'

axios(url, {
  method: 'post',
  headers: {
    'Content-Type': 'application/json;charset=utf-8;',
  },
  data:{
    msgtype: 'template_card',
    template_card: {
      card_type: 'news_notice',
      main_title: {
        title: '🍔麦当劳今日特惠',
        desc: '板烧鸡腿堡两件套 ¥15',
      },
      card_image: {
        url: 'https://raw.githubusercontent.com/tohrux/photos/master/bot/20211205233858.png',
        aspect_ratio: 2.25,
      },
      jump_list: [
        {
          type: 1,
          url: 'https://doc.weixin.qq.com/txdoc/excel?scode=ANYAEAdoABE7c180DiAEUA5Qb0ADg&docid=e2_AEUA5Qb0ADgPHbZZfW2RTSH5LWOuw',
          title: '📖 美食手册 📖',
        },
      ],
      card_action: {
        type: 1,
        url: 'https://www.mcdonalds.com.cn/',
      },
    },
  },
}).then((response) => {
    console.log(response.data);
})
