// function Person(arg) {
//     var name = arg;
//     this.getName = function() {
//         return name;
//     };
//     this.setName = function(arg) {
//         name = arg;
//     };
// }

// var p1 = new Person('1111');

// console.log(p1.getName());
// p1.setName('aaa');

// Person.getName = function() {
//     return 'bbb';
// };
// console.log(p1.getName());

// var p2 = new Person('22222');
// console.log(p2.getName());

// // p1
// // getName
// // setName

// // function Person2() {}
// // Person2.prototype = p1.prototype;

// // var p2 = new Person2();

function p1() {
    this.get = function() {
        return 'a';
    };
}

console.log(p1.get());

p1.get = function() {
    return 'b';
};

p2 = {
    get: function() {
        return 'c';
    }
};

p2.get = function() {
    return 'd';
};
