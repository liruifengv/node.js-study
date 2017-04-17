/**
 * Created by ���� on 2017/4/17.
 */
//���� events ģ��
var events=require('events');
//���� eventEmitter ����
var eventEmitter=new events.EventEmitter();

//�����¼��������
var connectHandler=function connected(){
    console.log('Connection succeeded!');
    //���� data_received �¼�
    eventEmitter.emit('data_received');
}

//�� connection �¼��������
eventEmitter.on('connection',connectHandler);

//ʹ������������ data_received �¼�
eventEmitter.on('data_received',function(){
    console.log('Data accepted successfully!');
})

//���� connection �¼�
eventEmitter.emit('connection');

console.log("The program is finished!")