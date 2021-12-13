let path = require('path')
let ejsExcel = require('ejsexcel')
let fs = require('fs')
//读取excel
let exBuf = fs.readFileSync(__dirname + '/data.xlsx')
let _data = []
let data = ''
let exportPart = ''

//清除数据
fs.writeFileSync(path.resolve(__dirname, `excelData.js`), '')

//获取成功后
ejsExcel
  .getExcelArr(exBuf)
  .then((exlJson) => {
    //获取excel数据
    let workBook = exlJson
    workBook.forEach((sheet, index) => {
      _data[index] = []
      sheet.forEach((row, rowIndex) => {
        if (index === 0) {
          if (rowIndex > 0 && row[0] && row[1]) {
            _data[index].push({
              name: row[0],
              price: row[1],
              type: row[3],
              recommend: row[4],
              comment: row[5],
              appraise: row[6],
            })
          }
        } else if (index === 1) {
          if (rowIndex > 0 && row[0] && row[1] && row[1].length) {
            _data[index].push({
              name: row[0],
              isNear: row[1],
              price: row[2],
              type: row[3],
              recommend: row[4],
              address: row[5],
            })
          }
        }
      })
      data += `let sheet${index} = ${JSON.stringify(_data[index])};`
    })
    _data.forEach((v, i) => {
      exportPart += `sheet${i},`
    })
    exportPart = `module.exports={${exportPart}}`
    fs.writeFileSync(path.resolve(__dirname, `excelData.js`), data + exportPart)
  })
  .catch((error) => {
    //打印获取失败信息
    console.log('读取错误!')
    console.log(error)
  })
