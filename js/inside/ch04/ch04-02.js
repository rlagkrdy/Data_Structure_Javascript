// 객체의 메서드 호출할 때 this 바인딩
// 객체의 프로퍼티가 함수일 때
// 이 함수를 메서드라고 표현을 하죠.
// 이 메서드 내부 코드에서 사용된 this는 해당 메서드를 호출한 객체로 바인딩 된다

var obj = {
    name: 'foo',
    getName: function() {
        return this.name; // => obj.name
    }
};

var otherObj = {
    name: 'bar'
};

otherObj.getName = obj.getName;

console.log(obj.getName); // => foo;
console.log(otherObj.getName); // => bar;

// 함수를 호출할 때 this 바인딩

var test = 'This is test';

console.log(window.test);

var sayFoo = function() {
    console.log(this.test);
};

sayFoo();

var Person = function(name) {
    this.name = name;
};
Person.prototype.getName = function() {
    return this.name;
};

var foo = new Person('foo');

console.log(foo.name); // => 'foo';
console.log(foo.getName()); //=>'foo';

// call , apply
// this를 강제로 바인딩 하는것 그 다음 변수는 매게변수 역활을 함;

var foo = Person.call(foo, 'foo');
console.log(foo.name);
console.log(foo.getName());
