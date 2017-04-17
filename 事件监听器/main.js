/**
 * Created by ���� on 2017/4/17.
 */
var events=require('events');
var eventEmitter=new events.EventEmitter();

//������ #1
var listener1=function listener1(){
    console.log('listener1 is working!');
}

//������ #2
var listener2=function listener2(){
    console.log('listener2 is working!');
}

//�� connection �¼���������Ϊ listener1
eventEmitter.addListener('connection',listener1);

//�� connection �¼���������Ϊ listener2
eventEmitter.on('connection',listener2);

var eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+" listeners is listening events.");

//���� connection �¼�
eventEmitter.emit('connection');

//�Ƴ��󶨼����� listener1 ����
eventEmitter.removeListener('connection',listener1);
console.log("listener1 is not listen.");

//���������¼�
eventEmitter.emit('connection');

eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+" listeners is listening events.")

console.log("The program is finished.")










