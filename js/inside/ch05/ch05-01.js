// 특정 함수에 사용자가 정의한 객체의 메서드 연결하기

function HelloFunc(func) {
    this.greeting = 'Hello';
}

var objHello = new HelloFunc();

function saySomething(obj, methodName, name) {
    return function(greeting) {
        return obj[methodName](greeting, name);
    };
}

function newObj(obj, name) {
    obj.func = saySomething(this, 'who', name);
    return obj;
}
newObj.prototype.who = function(greeting, name) {
    console.log(`${greeting} ${name || 'everyone'}`);
};

var obj1 = new newObj(objHello, 'zzoon');
obj1.func('Hello');
