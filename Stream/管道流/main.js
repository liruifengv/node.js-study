/**
 * Created by ���� on 2017/4/17.
 */
var fs=require("fs");

//����һ���ɶ���
var readerStream=fs.createReadStream('input.txt');

//����һ����д��
var writerStream=fs.createWriteStream('output.txt');

//�ܵ���д����
//��ȡ input.txt �ļ����ݣ���������д�뵽 output.txt ��
readerStream.pipe(writerStream);

console.log("The program is finished.");