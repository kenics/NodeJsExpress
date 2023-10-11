import { PythonShell } from 'python-shell';

const options = {
  scriptPath: './', // Pythonスクリプトのパスを指定
  args: ['arg1', 'arg2'], // スクリプトに渡す引数を指定 (任意)
  mode:'text'
};

const pyshell = new PythonShell('my_script.py', options);


function aFunc3(data){
    return data * 2;
}

function aFunc2(data) {
    return new Promise(function(callback) {
            callback(data * 2);
        });
}

function ok_res(data){
        console.log(data);      // => 200
}

function err_res(e){
        console.log(e);
}


function sample_promise() {
     aFunc2(100).then(
    (data)=>{ok_res(data)},
    (e)=>{err_res(e)}
    );}

sample_promise();
