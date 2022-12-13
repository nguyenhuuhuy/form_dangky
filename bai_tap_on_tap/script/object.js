/*
name, age, address được gọi là thuộc tính của dối tượng
talk: được gọi là phương thức của đối tượng 
CRUD: định nghĩa
C: create   (thêm thuộc tính)
R: read
U: update
D: delete
*/
let obj = {
  name: " Nguyễn văn A", // key: value
  age: 16, // key: value
  address: "Việt Nam", // key: value
  talk: function () {
    // key: value
    console.log("ok!");
  },
};

// console.log(obj);

// tham trị có hai ô nhớ a và b khi gán b = a thì ô nhớ b ghi đè kết quả của ô nhớ a
// let a = 7;
// let b = a;
//     a = 9;
//     console.log(b);

let student = {
  name: "đạt",
};
// let long = student;
// student.name = "bánh";
// console.log(long);
// console.log(student);

// thêm thuộc tính vào đối tượng object (create)
obj.id = 1;

// console.log(obj);

// đọc (read)
// for (const key in obj) {   // for in là in ra key và value
//    console.log(obj[key]);
// }

// for (const key in obj) {    // for of là in ra key

// }

// update:
// obj.age = 18;

// Delete

// delete obj.id;
// console.log(obj);

// Spread dạng shallow clone

let person1 = {
  name: " Nguyễn văn A", // key: value
  age: 16, // key: value
  address: {
    district: "mỹ đình",
    street: "trần bình",
  }, // key: value
  talk: function () {
    // key: value
    console.log("ok!");
  },
};
// spread dạng shallow clone
// khi dùng ... thì chỉ thay dổi được thuộc tính trong object key đầu tiên
// khi trong key có một object nữa thì nếu trỏ vào key{object} thì xẽ thay dổi được thuộc tính của nó
/* 
let person2 = {...person1};
person1.age = 18;
person1.address.district = "mỹ tho"
console.log(person2);
console.log(person1);
*/
// object.assign dạng sallow clone
/*
let person3 = Object.assign({},person1);
person1.address.street = "Ninh Bình";
console.log(person3);
*/

// fix cứng không lq gì đến thằng cha
/* 
let person4 = JSON.parse(JSON.stringify(person1));
person1.address.district = "Ba Đình";

console.log(person4);
console.log(person1);
*/

// object construcor bản thiết kế

// function user(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// }

// let dung = new user("Dũng", "Thầy dùi", 27);
// let huong = new user("Hướng", "Nguyễn trọng", 17);
// console.log(dung);
// console.log(huong);

// new date, Set ,

// let array = [1, 1, 1, 5, 5, 8, 8, 9, 1, 1, 1, 5, 5, 5];
// let result = new Set(array);
// console.log("result", result);
// let date = new Date();
// console.log(date.getDate());

	// incluce of indexOf
	// indexOf : nếu tồn tại phần tử thì trả về vị trí, nếu ko có thì trả về -1
	// Nếu trong mảng có các phần tử giống nhau thì indexOf sẽ trả về kết quả đầu tiên tìm thấy
	// Chú ý
	/*
	incluces: Nếu có phần tử thì trả về true ngược lại trả về false
	*/
	        let array =[1,5,8,9,7,1]
	        console.log(array.indexOf(1));
	        console.log(array.includes(3));