// 2. 상속
// function create_object(o) {
//     function F() {}
//     F.prototype = o;
//     return new F();
// }

// var Person = {
//     getName: function() {
//         return 'name';
//     }
// };

// var P = create_object(Person);
// console.log(P.getName());

// 클래스 기반 상속에 대해서 한번 알아보겠습니다.
var inherit = (function(Parent, Child) {
    var F = function() {};
    return function(Parent, Child) {
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
        Child.super = Parent.prototype;
    };
})();

function Objects() {}
Objects.prototype.getInfo = function() {
    return 'this is info';
};

function Person(arg) {
    this.name = arg;
}
inherit(Objects, Person);

Person.prototype.getName = function() {
    return this.name;
};
Person.prototype.setName = function(name) {
    this.name = name;
};

function Student(arg) {
    Person.call(this, arg);
}

// var you = new Person('joohoo');
// Student.prototype = you;

//부모 클래스를 상속 받는 방법

inherit(Person, Student);

var me = new Student('name');
console.log(me.getName());
