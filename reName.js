const fs = require('fs')

const argument = process.argv.splice(2)[0]
function reName(argument) {
  let newName = []
  if(argument !== 'rename' && argument !== 'reset') {
    console.log('Please enter a right argument!')
    return
  }
  fs.readdir('./taxTable/', (err, folder) => {
    if (err) {
      console.log(err)
    }
    for (let i = 1; i < folder.length; i++) {
      fs.readdir(`./taxTable/${folder[i]}/`, (err, oldName) => {
        if (err) {
          console.log(err)
        }
        for (let j = 1; j < oldName.length; j++) {
          let oldNameVal = oldName[j].substring(0,9)
          let name
          if (argument === 'rename') {
            name = `${oldNameVal}_10.html` // 重命名
          } else if (argument === 'reset') {
            name = `${oldNameVal}.html` // 还原
          }
          newName[j-1] = name  // 把名字赋给一个新的数组
        }
        for (let k = 1; k < oldName.length; k++) {
          let oldPath = `./taxTable/${folder[i]}/${oldName[k]}` //原本的路径
          let newPath = `./taxTable/${folder[i]}/${newName[k-1]}` //新路径
          fs.rename(oldPath, newPath, (err) => { //重命名
            if (err) {
              console.log(err)
            }
            console.log(`${oldName[k]} renamed ${newName[k-1]}`)
          })
        }
      })
    }
  })
}
reName(argument)