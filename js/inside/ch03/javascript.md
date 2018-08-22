# 3 장 : 데이터 타입과 연산자

java, c, c#

string name = '이름';

let name = '이름';

타입은 있지만, 느슨한 타입 체크 언어 이다.

let name = 10;
name == '10' ? true;
name === '10' ? 값과 type 이 같은지를 확인합니다.

# 데이터 타입 es5

기본 타입 => number, string, boolean, undefined, null
참조 타입 => Object -> Array
-> Function
-> RegExp

# null, undefined

string name = null;
왜? 찾아봐요 되요...

let name = undefined; <- 모르니깐 undefined 를 할당 하는 겁니다.
느슨한 타입 체크 언어

null 같은 경우는
개발자가 명시적으로 할당해 주는 값이다.

let name; => undefined;
let name = null; 많이 사용하지는 않아요.

# 객체 생성 방법

1.  Object() 생성자 함수를 이용
    let person = new Object(
    );
2.  객체 리터럴 방식을 이용
    let person = {};
3.  개발자가 만든 객체를 통해 생성자 함수를 이용
    let Person = () => {}
    let person = new Person();

# for in 문

# 참조 타입의 특성

var objA = {
val: 40;
}
var objB = objA;
