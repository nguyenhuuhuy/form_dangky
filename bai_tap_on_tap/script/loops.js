function bt_1_2() {
  let numb = parseInt(prompt("nhập vào số kiểm tra"));
  let sum_1 = 0;
  let sum_2 = 0;
  for (let i = 0; i <= numb; i++) {
    if (i % 2 == 0) {
      sum_1 += i;
      console.log("chẵn: ", i);
    } else {
      sum_2 += i;
      console.log("lẻ: ", i);
    }
  }
  console.log("tổng chẵn: ", sum_1);
  console.log("tổng lẻ: ", sum_2);
}

function bt_3() {
  let numb = parseInt(prompt("nhập vào số kiểm tra"));
  let flag = true;

  if (numb < 2) {
    flag = false;
  } else {
    for (let i = 2; i < numb - 1; i++) {
      if (numb % i == 0) {
        flag = false;
        break;
      }
    }
  }
  // kiểm tra biến cờ
  if (flag == true) {
    alert(numb + " là số nguyên tố!");
  } else {
    alert(numb + " không phải số nguyên tố!");
  }
}

function bt_4() {
  let numb = parseInt(prompt("nhập vào số kiểm tra"));
  total = 0;
  for (let i = 0; i < numb; i++) {
    if (numb % i == 0) {
      total += i;
      console.log(i);
    }
  }
  console.log(total);
  if (total == numb) {
    console.log("đây là số hoàn hảo!");
  } else {
    console.log("đây không phải là số hoàn hảo!");
  }
}

function bt_5() {
  /*let numb = parseInt(prompt("nhập vào số kiểm tra"));
  if (numb < 2) {
    console.log(numb, "không là số nguyên tố!");
  } else {
    for (i = 2; i < numb; i++) {
      if (numb % i == 0) {
        return console.log(numb + "không là số nguyên tố");
      }
    }
    return console.log(numb + " là số nguyên tố");
  }
  */

  let number = parseInt(prompt("nhập số: "));

  for (let j = 2; j < number; j++) {
        if (bt_check(j) == true) {
          console.log("số nguyên tố là: ", j);
        } 
  }

  function bt_check(numberCheck) {
    let flag = true;
    for (let i = 2; i < numberCheck; i++) {
      if (numberCheck % i == 0) {
        flag = false;
        return flag;
      } else {
        flag = true;
      }
    }
    return flag;
  }
}

function bt_6() {
  let numb = parseInt(prompt("nhập vào số kiểm tra")); // 6
  let total = 0;
  for (let i = 1; i <= numb; i++) {
    // i= 1 , i = 2 i=3 i=6
    if (numb % i == 0) {
      total += i;
      console.log("ước của số vừa nhập là: ", i);
    }
  }
  console.log(total);
}


  
  

