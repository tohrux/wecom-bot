const { getRandomInt } = require('../utils')
const { sheet0 } = require('./excelData')
const {jumpUrl} = require('../configs')


let takeOut = sheet0[getRandomInt(0, sheet0.length - 1)]
let takeOutRecommend = takeOut.recommend
  ? `\n>推荐菜: <font color="comment">${takeOut.recommend || '>w<'}</font>`
  : ''

let takeOutComment = takeOut.comment
  ? `\n>备注: <font color="comment">${takeOut.comment || '>w<'}</font>`
  : ''

let takeOutAppraise = takeOut.appraise
  ? `\n>点评意见: <font color="comment">${takeOut.appraise || '>w<'}</font>`
  : ''

function jsonToMd(takeOut) {
  return `今日外卖推荐⬇️
    ><font color="warning">${takeOut.name}</font>
    >价格: <font color="comment">${takeOut.price}</font>
    >类型: <font color="comment">${takeOut.type}</font>${takeOutRecommend}${takeOutComment}${takeOutAppraise}\n
👉[三门路干饭指南](${jumpUrl})👈`
}

const markdown = {
  msgtype: 'markdown',
  markdown: {
    content: `${jsonToMd(takeOut)}`,
  },
}
module.exports = markdown