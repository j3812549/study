// 1.引入模块
let fs = require('fs');

// 2.创建读入流
let rs = fs.createReadStream('路径');
let ws = fs.createWriteStream('sp.mp4');

// 3.监听流的打开和关闭
rs.once('open', () => {
    console.log('通道已经打开')
});

rs.once('close', () => {
    console.log('通道已经关闭')
})

ws.once('open', () => {
    console.log('通道已经打开')
});

ws.once('close', () => {
    console.log('通道已经关闭')
})

// 4.绑定data
rs.on('data', (data) => {
    ws.write(data)
})