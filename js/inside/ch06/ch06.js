// 1. 클래스, 생성자, 메서드
// function Person(arg) {
//     this.name = arg;

//     this.getName = function() {
//         return this.name;
//     };
//     this.setName = function(name) {
//         this.name = name;
//     };
// }

// Person
// name
// getName
// setName

// user
// name
// getName
// setName

// class #접근제어자# #클래스명#(#메게변수#){
//     #바디#
//     #내부 변수#
//     #메서드#
// }
// #클래스# #변수명# = new #클래스#();

// 프로토타입
// 모든 객체는 자신의 부모 역활을 하는 프로토타입을 가지고 있다.

// 생성자는 자신의 부모역활을 하는 프로토타입에 접근 가능한 프로퍼티를 가지고 있다.

function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
};
Person.prototype.setName = function(name) {
    this.name = name;
};

// Person               Person Prototype
// name                 getName(), setName()

// user
// name

var user = new Person('usr1');
console.log(user.getName()); // => usr1
user.setName('usr2');
console.log(user.getName()); // => usr2
