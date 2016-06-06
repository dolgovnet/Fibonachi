/*function _1(){
    return function _2(){
        return 2;
    }
}
var returnedFunc = _1(),
    result = returnedFunc();


console.log(returnedFunc);
console.log(result);*/

//clojure

//-------------------------------------------------------------------------------------

/*function counter(){
    var i = 0;

    return function tick(){
        console.log(i++);
    }
}

var c_1 = counter(),
    c_2 = counter();

c_1();
c_1();
c_1();
c_1();
c_1();

console.log('-------------');

c_2();
c_2();
c_2();
c_2();
c_2();*/

//-------------------------------------------------------------------------------------

//examples

/*function initHelloTimer(){    //Выведит Hello через 3 секунды
    var msg = 'Hello!';

    setTimeout(function(){
        console.log(msg);
    }, 3000)
}

initHelloTimer();*/

//------------------------------------------------------------------------------------

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

alert( fib(1) );
alert( fib(2) );
alert( fib(3) );
alert( fib(4) );
alert( fib(5) );
alert( fib(6) );
alert( fib(7) );
alert( fib(8) );


