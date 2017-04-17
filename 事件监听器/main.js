/**
 * Created by 旧梦 on 2017/4/17.
 */
var events=require('events');
var eventEmitter=new events.EventEmitter();

//监听器 #1
var listener1=function listener1(){
    console.log('listener1 is working!');
}

//监听器 #2
var listener2=function listener2(){
    console.log('listener2 is working!');
}

//绑定 connection 事件，处理函数为 listener1
eventEmitter.addListener('connection',listener1);

//绑定 connection 事件，处理函数为 listener2
eventEmitter.on('connection',listener2);

var eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+" listeners is listening events.");

//处理 connection 事件
eventEmitter.emit('connection');

//移除绑定监听的 listener1 函数
eventEmitter.removeListener('connection',listener1);
console.log("listener1 is not listen.");

//触发连接事件
eventEmitter.emit('connection');

eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+" listeners is listening events.")

console.log("The program is finished.")










