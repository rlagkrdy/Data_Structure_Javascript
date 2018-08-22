// 함수를 생성하는 방식
// 1. 함수 선언문
// 2. 함수 표현식
// 3. Function() 생성자 함수 -!!!!!!!!사용을 안함-

// 함수 호이스팅
// 함수 선언문으로 선언된 함수는
// 최상으로 올라간다.

// -   리터럴에 의해 생성 check!!
// -   변수나 배열의 요소, 객체의 프로퍼티등에 할당 가능 check!!!
// -   함수의 인자로 전달 가능 check!!
// -   함수의 리턴 값으로 리턴 가능   --> 콜백 함수 check!!!
// -   동적으로 프로퍼티를 생성 및 할당 가능 check!!!

function sum(x, y) {
    return x + y;
}
sum.value = 10;

sum(1, 2); // 정상처리
add(2, 3); // error

// function sum(x, y) {
//     return x + y;
// }

var add = function(x, y) {
    return x + y;
};

add(2, 3); // 정상처리

// -   함수의 매게변수로 사용하여 해당 함수에서 사용되는 경우 --> 콜백 함수
// -   즉시 실행 함수 -> 즉시 실행 함수를 만나면 바로 실행!!!(IIFE)
// -   내부 함수 -> 함수안에 함수가 있는경우
// -   함수를 리턴하는 함수

function sum(x, y) {
    return x + y;
}
function calc(func, x, y) {
    return func(x, y);
}
calc(sum, 1, 2); // 콜백함수

(function(name) {
    console.log(name);
})('foo');

// 최초 한번만 실행하는 경우 사용하고

function add(x, y) {
    function sum(x, y) {
        return x + y;
    }
    return sum(x, y);
}

function add(x) {
    function sum(y) {
        return x + y;
    }
    return sum;
}

add(1)(2); // ==> 3
// 클로져
// 생명이 끝난 같은 부모 함수의 변수를 참조하는 것.

// 클로져 왜써요?
// private 내부에서만 사용할 수 있게;

// 자바스크립트에서 함수를 호출할 때 기존 매개변수로
// 전달되는 인자값에 더해
// arguments 객체 와 this 인자가 함수 내부로 암묵적으로 전달된다.

console(1); // => [1]
console(1, 2); // => [1, 2]
console(1, 2, 3); // => [1, 2, 3]

// 오버라이딩
// 자바스크립트는 모두 오버라이딩이다
// 동일한 함수명을 사용할 때 마지막으로 정의한 함수로 정의되는것

function console(a, b, c) {
    if (typeof arguments[0] === 'string') {
        action1();
    }
    return a;
}

function console(a) {
    console.log(a);
    console.log(arguments);
    // 배열을 아니다.
    // 유사 배열형태
    // 유사 배열이란 뭐냐?
    // 배열과 비슷하지만 Object인거고
    // Array 메서스를 사용할 수 없다.
}

// 스코프
// this -> 스코프 결정!!!
