// 프로토타입 체이닝

// 1. 생성자 함수를 통한 프로토타입 체이닝
function Person(name) {
    this.name = name;
}
Person.prototype.getName = () => {
    return this.name;
};

function isWork(isWork) {
    return !isWork;
}

var foo = new Person('foo');
console.log(Person);
console.log(foo);

// Person() 생성자 함수는 prototype 프로퍼티로 자신과 링크된 프로토타입 객체(Person.prototype)을 가르킨다.
// Person() 생성자로 생성된 foo객체는 Person() 함수의 프로토 타입 객체를 [[Prototype]]링크로 연결한다.
// prototype 프로퍼티나 [[Prototype]]링크는 같은 프로토타입 객체(Person.prototype)를 가르킨다.

// 2. 객체 리터럴 방식을 통한 프로토타입 체이닝

var myObject = {
    name: 'foo',
    sayName: () => {
        console.log(`My name is ${this.name}`);
    }
};

myObject.sayName();
