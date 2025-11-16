// 1. So sánh nghiêm ngặt với lỏng
console.log("Bài 1: So sánh nghiệm ngặt với lỏng");
let x = 5;
let y = "5";

console.log(x == y);
console.log(x === y);
console.log("====================");

// 2. Truthy/Falsy
console.log("Bài 2: Truthy/Falsy");
let value = 1;
if(value = 1){
    console.log("Value is truthy");
} else if(value = "one") {
    console.log("Value is truthy");
} else {
    console.log("Value is falsy");
}
console.log(!value);
console.log("1 us", !!1 ? "truthy" : "falsy");

console.log("====================");

// 3. Typeof đặc biệt
console.log("Bài 3: Typeof đặc biệt");
console.log(typeof null);
console.log(typeof NaN);
console.log(typeof []);
console.log(typeof {});
console.log("====================");

// 4. Ép kiểu tường minh với ngầm
console.log("Bài 4: Ép kiểu tường minh với ngầm");

console.log("====================");

// 5. Toán tử cộng với chuỗi và số
console.log("Bài 5: Toán tử cộng với chuỗi và số");
console.log(1 + "2");
console.log("2" + 1);
console.log(1 + 2 + "3");
console.log("3" + 1 + 2);
console.log("====================");

// 6. Toán tử logic ngắn mạch
console.log("Bài 6: Toán tử logic ngắn mạch");
