var name = "Quang Anh";
let age = 20;
let isStudent = true;
let hobbies = ["Python", "Java", "JavaScript"];
// khai báo rồi gán:
const address1 = {
    city: "Thái Bình",
    country: "Việt Nam"
};

// khai báo từng thuộc tính:
const address2 = {};
address2.city = "Thái Bình";
address2.country = "Việt Nam";

// dùng let nếu muốn thay đổi về sau:
let address3 = {
    city: "Thái Bình",
    country: "Việt Nam"
};

console.log("Name: " + name + " | Type: " + typeof name);
console.log("Age: 20 " + age + " | Type: " + typeof age);
console.log("Is Student: " + isStudent + " | Type: " + typeof isStudent);
console.log("Hobbies: " + hobbies + " | Type: " + typeof hobbies);
console.log("Address1:", address1, "| Type:", typeof address1);
console.log(address2.city);
console.log(address3.country);


// let: khuyến nghị cho biến có thể thay đổi
// const: khuyến nghị cho biến không thay đổi
// var: cũ