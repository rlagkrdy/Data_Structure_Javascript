// 함수 두개 생성
// 매개변수 x,y return => x+y

add1(1, 2);
add2(1, 2); // error

// 선언문
function add1(x, y) {
    return x + y;
}
// 표현식
var add2 = function(x, y) {
    return x + y;
};

//함수 호이스팅 =>
function add1(x, y) {
    return x + y;
}

add1(1, 2);
add2(1, 2);

var add2 = function(x, y) {
    return x + y;
};
