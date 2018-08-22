// // 프로토타입 체이닝 방법

// // 1.  객체 리터럴 방식으로 생성된 객체의 프로토타입 체이닝

var obj = {
    name: 'foo',
    sayName: function() {
        console.log(`My name is ${this.name}`);
    }
};

obj.sayName.prototype.getName = function() {
    console.log(this.name);
};

var obj2 = new obj.sayName();

// console.log(obj2.constructor);
obj2.getName(); //undefined
obj2.name = 'obj2';
obj2.getName(); //obj2

// console.log(obj.sayName()); // My name is foo;
// console.log(obj.hasOwnProperty('name')); // true
// console.log(obj.toString());

// // 자바스크립트는 모두 객체이고 객체의 최상위 부모는 Object;

// // 2.   생성자 함수로 생성된 객체의 프로토타입 체이닝
// function Person(name, age, hobby) {
//     this.name = name;
//     this.age = age;
//     this.hobby = hobby;
// }

// Person.prototype.getInfo = function() {
//     console.log(`${this.name} ${this.age} ${this.hobby}`);
// };

// var foo = new Person('foo', 21, 'movie');
// foo.getInfo(); // foo 21 movie;
// foo.toString();
// console.log('foo.constructor', foo.constructor);
// // 객체의 생성자는 자신의 프로토타입을 가르키는 프러퍼티자 존재하며,
// // 생성자 함수로 생성된 객체에 프로토타입 링크에 연결된다.
// // foo.[[Prototype]] => Person.[[Prototype]] => Object

// var poo = Person('poo', 21, 'movie');
// //poo.getInfo(); // error;

// console.log('poo.constructor', poo.constructor);
