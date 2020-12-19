//check
if (window.WebSocket) {
  console.log('This browser supports WebSocket');
} else {
  console.log('This browser does not supports WebSocket');
}

var count = 0;
var sock;
var url = 'ws://localhost:81/excel';
function startWebSocket(){
  sock = new WebSocket(url);
  sock.onopen = function (ev) {
    console.log("正在建立连接...index");
    sayMarco();
  }

  sock.onmessage = function (ev) {
    console.log("接收并处理消息: " + ev.data);
    if (ev.data.isAllOk) { //假设这里是进度条百分比
      sock.close();
    }
    setTimeout(function () {
      sayMarco();
    }, 0);
  }


  sock.onclose = function (ev) {
    console.log("连接关闭...");
  }

}


//这里改为获取进度json数据
function sayMarco() {
  console.log('正在上传excel文件 !');
  sock.send("正在上传excel文件!");
}
