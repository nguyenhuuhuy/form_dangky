//bài 1 :
function demo_1() {
  let a = parseInt(prompt("nhập độ dài cạnh a: "));
  let s = a * a;
  document.write("diện tích hình vuông:" + " " + s + "<br>");
  let p = a * 4;
  document.write("chu vi: ", p);
}

// bài 2:
function demo_2() {
  let a = parseInt(prompt("nhập độ dài cạnh a: "));
  let b = parseInt(prompt("nhập độ dài cạnh b: "));
  let s = a * b;
  document.write("diện tích hình vuông:" + " " + s + "<br>");
  let p = (a + b) * 2;
  document.write("chu vi: ", p);
}

// bài 3:
function demo_3() {
  let a = parseInt(prompt("nhập số a: "));
  let b = parseInt(prompt("nhập số b: "));
  let c = prompt("nhập phép tính: ");
  switch (c) {
    case "+":
      document.write("phép cộng: a + b = ", a + b);
      break;
    case "-":
      document.write("phép trừ: a - b = ", a - b);
      break;
    case "*":
      document.write("phép nhân: a x b = ", a * b);
      break;
    case "/":
      document.write("phép chia: a / b = ", a / b);
      break;
  }
}

function demo_4() {
  let id = prompt("id: ");
  let name = prompt("nhập Tên; ");
  let age = parseInt(prompt("Nhập tuổi: "));
  let gender = prompt("Nhập giới tính: ");
  let email = prompt("Nhập email: ");
  let iphone = parseInt(prompt("sđt: "));
  let address = prompt("Nhập địa chỉ: ");

  document.getElementById("id").innerHTML = "Student ID: " + id + " ";
  document.getElementById("name").innerHTML = "Student Name: " + name + " ";
  document.getElementById("age").innerHTML = "Age: " + age + " ";
  document.getElementById("gender").innerHTML = "Gender: " + gender + " ";
  document.getElementById("email").innerHTML = "email: " + email + " ";
  document.getElementById("phone").innerHTML = "phone: " + iphone + " ";
  document.getElementById("address").innerHTML = "address: " + address + " ";
}

function demo_5() {
  let a = parseInt(prompt("nhập cạnh a: "));
  let b = parseInt(prompt("nhập cạnh b: "));
  let c = parseInt(prompt("nhập cạnh c: "));

  if (a + b <= c || a + c <= b || b + c <= a) {
    document.getElementById("bt_5").innerHTML = "không phải tam giác!";
  } else {
    if (a == b && b == c) {
      document.getElementById("bt_5").innerHTML = "tam giác đều";
    } else if (a == b || b == c || c == a) {
      if (
        a * a + b * b == c * c ||
        a * a + c * c == b * b ||
        b * b + c * c == a * a
      ) {
        document.getElementById("bt_5").innerHTML = "vuông cân";
      } else {
        document.getElementById("bt_5").innerHTML = "tam giác cân";
      }
    } else if (
      a * a + b * b == c * c ||
      a * a + c * c == b * b ||
      b * b + c * c == a * a
    ) {
      document.getElementById("bt_5").innerHTML = "vuông";
    } else {
      document.getElementById("bt_5").innerHTML = "thường";
    }
  }
}

function demo_6() {
  let monht = parseInt(prompt("nhập vào tháng: "));

  switch (monht) {
    case 4:
    case 6:
    case 9:
    case 11:
      document.getElementById("bt_6").innerHTML =
        "thang" + " " + monht + " " + "co 30 ngay";
      break;
    case 2:
      let year = parseInt(prompt("nhập vào năm: "));
      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        document.getElementById("bt_6").innerHTML =
          "thang" + " " + monht + " " + "nam" + " " + year + " " + "co 29 ngay";
      } else {
        document.getElementById("bt_6_1").innerHTML =
          "thang" + " " + monht + " " + "nam" + " " + year + " " + "co 28 ngay";
      }
      break;
    default:
      document.getElementById("bt_6_2").innerHTML =
        "thang" + " " + monht + " " + "co 31 ngay";
  }
}

function demo_7() {
    let numb = parseInt(prompt('chập số: '));
    switch (numb) {
        case 0:
            alert('không');
        break;
        case 1:
            alert("một");
        break;
        case 2:
            alert ("hai");
        break;
        case 3:
            alert("ba");
        break;
        case 4:
            alert("bốn");
        break;
        case 5:
            alert("năm");
        break;
        case 6:
            alert("sáu");
        break;
        case 7:
            alert("bảy");
        break;
        case 8:
            alert("tám");
        break;
        case 9:
            alert("chín");
        break;
    }
};


function demo_8() {
    let a = parseInt(prompt('nhập số a: '));
    let b = parseInt(prompt('nhập số a: '));
    let c = parseInt(prompt('nhập số a: '));  

    let result = c +""+b+""+a;
    document.write(result)
}

function demo_9() {
    let second = parseInt(prompt('nhập vào số giây: '));
    let hours = second/3600;
    let minute = second/60;
    document.write("giờ: ",hours + 'h' +'<br>')
    document.write("phút: ", minute + 'p' + '<br>')
    document.write("giây: ", second +'s' + '<br>')
}


function demo_11() {
    
}