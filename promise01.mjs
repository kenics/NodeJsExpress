// 引数を2倍にする非同期関数
function aFunc1(data, callback) {
    setTimeout(function() {
        callback(data * 2);
    }, Math.random() * 1000);
}

function sample_callback() {
    // 非同期関数を用いて100の2倍を求める
    aFunc1(100, function(value) {
        console.log(value);      // => 200
    });
}

function sample_timing_problem() {
    aFunc1(100, function(data) {
        console.log(data);      // => 200
    });
    aFunc1(200, function(data) {
        console.log(data);      // => 400
    });
    aFunc1(400, function(data) {
        console.log(data);      // => 800
    });
}

sample_timing_problem();
