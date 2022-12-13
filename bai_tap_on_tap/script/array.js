// let listNumber = [2, 7, 3, 4, 18, 6, 13, 8, 11, 10];
// dùng splice (vị trí, số phần tử muốn xóa, số thay thế) thay đổi mảng chính
// array.splice(0, 2, 8);
// console.log(array);

// dùng slice (vị trí muốn lấy , vị trí cắt )

// let a = listNumber.slice(2, 5);
// console.log(a);
// console.log(listNumber);

// dùng filter:

// listNumber.filter((value, index, array) => {
//   // console.log(value);
//   // console.log(index);
// //   console.log(array);
//   if (value % 2 == 0) {
//     // console.log(value);
//     // console.log(index);
//     console.log("*******"); // có 6 số chia hết cho 2
//   }
// });

// let map = listNumber.map((value, index, array) => {
//     // console.log(value);  // giá trị trong mảng
//     // console.log(index);  // vị trí trong mảng 
//     // console.log(array);  // cả mảng vd có 4 phần tử thì sẽ in ra 4 lần
//     return value % 2 == 0;
// });
// console.log(map);

// sự khác nhau giữa filter và map 
// Filter: in ra các giá trị xét điều kiện 
// map : tạo ra một mảng mới bằng đúng độ dài của mảng cũ 

// let sum = 0;
// listNumber.forEach((value, index, array)=>{
//     // console.log(value);
//     // console.log("vị trí trong mảng: " ,index);
//     // console.log(array);
//     sum += value;
// })
// console.log("tổng: ", sum);

// // callback hàm được truyền vào làm tham số của hàm khác.
// // ví dụ về callback:

// function hello(callBack) {
//     console.log(callBack);
// }

// hello(test)
// function test() {
//     return console.log("hello thắng!");
// }




let array=[1,5,8,9,7];

let result=array.splice(1,3);

console.log(result)