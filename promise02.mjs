import { PythonShell } from 'python-shell';

function aFunc2(data) {
    return new Promise(function(callback) {
        setTimeout(function() {
            callback(data * 2);
        }, Math.random() * 1000);
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
