function add(a, b) {
    return a + b;
}

// 함수도 객체다!!!

add.a = 10;
add.b = 20;

let result = add(add.a, add.b);
console.log(result);
