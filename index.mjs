import express from "express";
import http from 'http';

import { PythonShell } from 'python-shell';

const app = express();

app.use((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // ���ׂẴI���W������A�N�Z�X������
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
});


app.get('/hello',(req,res)=>{
  console.log('helloaa');
});

app.get('/home',(req,res)=>{
  console.log('home aa');
  res.send('home');
});


app.get('/connect',(req,res)=>{
  let options = {
    pythonOptions: [-u],
    scriptPath: './', // Python�X�N���v�g�̃p�X���w��
    args: ['arg1', 'arg2'], // �X�N���v�g�ɓn���������w�� (�C��)
    mode:'text'
  };
  PythonShell.run('my_script.py', options,function(err,result){
        console.log('result:',ressult.toString());
        res.send(ressult.toString())
  });
});


const webServer = http.createServer(app);
webServer.listen(3000,()=>{
  console.log("server running PORT:"+3000);
});


