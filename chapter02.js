function returnFalse() {
    console.log("False 함수");
    return false;
}

function returnTrue() {
    console.log("True 함수");
    return true;
}

// 단락 평가 O
console.log(returnFalse() && returnTrue());
// 단락 평가 X
console.log(returnTrue() && returnFalse());
// 단락 평가 O
console.log(returnTrue() || returnFalse());

// 단락 평가 활용 사례
function printName(person) {
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

// person은 undefined가 되어서 name에 할당되고 console.log에서는 "person의 값이 없음" 문자열만
// Truthy한 값으로 출력됨
printName(); 

// person과 person.name 모두 Truthy한 값으로 name에는 "이정환"이 담김
// console.log에서 모두 Truthy한 값이기 때문에 name이 출력되고 종료
printName({ name: "이정환"} );