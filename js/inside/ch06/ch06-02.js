var Person = function(arg) {
    var name = arg ? arg : 'zzoon';
    this.getName = function() {
        return name;
    };
    this.setName = function(inputName) {
        name = inputName;
    };
};

var me = new Person();

// 상속?

function Student() {}

Student.prototype = me;

var you = new Student();

me = new Person();
