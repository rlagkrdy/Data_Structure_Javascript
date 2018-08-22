// console.log('this is global context');

// function ExContect1() {
//     console.log('this is Excontext1');
// }

// function ExContext2() {
//     ExContect1();
//     console.log('this is Excontext2');
// }

// ExContext2();

// 실행 컨텍스트 스택

// 스택 -> 콘솔을 -> 실행 -> 더이상 뭐가 없으니 return
// 실행 컨텍스트 스택은 다시 빈값

// 스택 -> ExContext2() -> ExContect1() -> 실행 -> return -> 실행 -> return -> 스택 clean;

// getX()함수 호출
// 실행 컨텍스트 생성
// 활성 객체 생성
// arguments 생성 // undefined
// 스코프 정보 생성 // [1] 현재 영역 [0] x, y
// 변수 생성 //null
// this 바인딩 // this = obj;
// 코드실행

var x = 10;
var y = 30;
var z = 20;
var obj = {
    getX: function() {
        var x = 20;
        console.log(x);
    },
    getY: function() {
        var z = 30;
        function getZ() {
            var z = 40;
            console.log(z);
        }
        return getZ;
    }
};

// obj.getX();
// obj.getY();

var getZ = obj.getY();
getZ();

// obj.getY()
// 실행 컨텍스트 생성
// 활성 객체 생성
// arguments 생성
// 스코프 정포 생성 getY, window
// 변수 생성    //z = 30, getZ();
// this 바인딩 obj
// 코드 실행
// return getZ();
// 실행 컨텍스트 파괴

// getZ()
// 실행 컨텍스트 생성
// 활성 객체 생성
// arguments 생성
// 스코프 정보 생성 [2] getZ 변수 객체, [1] getY 변수 객체, [0] window 객체
// 변수 생성 없고
// this 바인딩 window
// 코드 실행
// return undefined
// 실행 컨텍스트 파괴
