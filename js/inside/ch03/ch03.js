// 참조 타입의 특성

// var objA = {
//     val: 40
// };
// var objB = objA;

// console.log(objA.val); // 40
// console.log(objB.val); // 40

// // 할당 X
// objB.val = 50;

// console.log(objA.val); // 50
// console.log(objB.val); // 50

// 참조 타입의 특성!!!
// 참조 타입은 값을 저장하는 게 X
// 참조 할수 있는 키를 저장한다???

// 메모리 할당 -> 메모리 주소가 생성 됨 -> objA.val에 접근을 하려고 하면
// -> objA가 가지고 있는 메모리 주소를 찾가 가면 -> 거기에 40있는 겁니다.

// objA =============>  메모리  <=============objB

// A => B;
// B => A;

// 생성자를 사용하게 되면 생성자를 할당할 만큼의 새로운 메모리가 생성이 되고 그 메모리 주소를 가지게 된다

function Person() {
    val: 40;
}

let objA = new Person();
let objB = new Person();

console.log(objA.val);
console.log(objB.val);

objB.val = 50;

console.log(objA.val);
console.log(objB.val);
