# websocket 封装

## 源码展示
```javascript
class WebSocketClass {
  constructor(name, timeOut = 10000) {
    this.instance = null;
    this.timeOut = timeOut;
    this.connect(name);
  }
  static getInstance() {
    if (!this.instance) {
      this.instance = new WebSocketClass();
    }
    return this.instance;
  }

  connect(name) {
    this.ws = new WebSocket(name);
    this.ws.onopen = e => {
      this.status = "open";
      console.log(`连接成功`, e);
      this.heartCheck();
      this.getMessage();
    };
  }

  heartCheck() {
    // 心跳机制的时间可以自己与后端约定
    this.pingInterval = setInterval(() => {
      if (this.ws.readyState === 1) {
        // 检查ws为链接状态 才可发送
        // this.ws.send('ping'); // 客户端发送ping
      } else {
        this.ws.close();
        this.connect();
      }
    }, this.timeOut);
  }

  closeHandle(e = "err") {
    // 因为webSocket并不稳定，规定只能手动关闭(调closeMyself方法)，否则就重连
    if (this.status !== "close") {
      console.log(`断开，重连websocket`, e);
      if (this.pingInterval !== undefined) {
        // 清除定时器
        clearInterval(this.pingInterval);
      }
      this.connect(); // 重连
    } else {
      console.log(`websocket手动关闭,或者正在连接`);
    }
  }

  getMessage() {
    this.ws.onmessage = e => {
      console.log(e.data);
      return e.data;
    };
  }

  close() {
    clearInterval(this.pingInterval);
    this.status = "close";
    // this.ws.send('close');
    this.ws.close();
    // message.info('已断开连接');
    console.log("close");
  }
}

export default WebSocketClass;
```

## 调用方式

```js
import WebSocketClass from "@/services/webSocket";
var ws = new WebSocketClass("ws://xxxxx");
console.log(ws.getMessage());
```
