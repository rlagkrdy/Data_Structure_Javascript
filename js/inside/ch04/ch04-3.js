function Person(name) {
    this.name = name;
}

console.dir(Person.prototype.constructor);

var foo = new Person('foo');

console.log(foo.country);

Person.prototype.country = 'korea';
console.log(Person.prototype.constructor);

var boo = new Person('boo');

console.log('country', foo.country);
console.log('country', boo.country);

console.log('constructor : ', foo.constructor);
console.log('constructor : ', boo.constructor);
