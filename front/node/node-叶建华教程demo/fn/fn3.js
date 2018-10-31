// 1.引入模块
let fs  = require('fs');

// 2.创建写入流
let ws = fs.createWriteStream('it666_2.txt');
// console.log(ws);

// 3.打开通道
ws.once('open', () => {
    console.log('通道已经打开！')
});

ws.once('close', () => {
    console.log('通道已经关闭')
});

// 4.写入内容
ws.write('我在马路边');
ws.write('捡到一毛钱');
ws.write('然后被摩托车撞死了');

// 5.关闭通道
ws.end()