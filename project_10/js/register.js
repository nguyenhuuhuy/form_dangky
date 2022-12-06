// gọi hàm register
let regis = document.getElementById('Register');
let flag = false // tạo biến xét điều kiện để push vào local
regis.addEventListener('click', ()=> {
 
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmpassword = document.getElementById('confirmpassword').value;
    let click_login = document.getElementById('click_login');
    // xét điều khiện nếu trống thì hiển thị error
    if(email == "") {
        let errorEmail = document.getElementById('errorEmail');
       errorEmail.style.display = "block";
    } else {
        errorEmail.style.display = "none";
    }

    if(password == "") {
        let errorPassword = document.getElementById('errorPassword');
        errorPassword.style.display = "block";
    } else {
        errorPassword.style.display = "none";
    }
    if(confirmpassword = "") {
        let errorConfirmPassword = document.getElementById("errorConfirmPassword");
        errorConfirmPassword.style.display = "block";
    }
    // tạo object
    let obj = {
        email: email,
        password: password,
    }
    /*
    // push vào array trống 
    // listUser.push(obj);
    // console.log(listUser); 
    // // lưu trên local
    // localStorage.setItem("listUser", JSON.stringify(listUser)) // từ object chuyển sang dạng array
    // //lấy về : 
    // let getListUser = localStorage.getItem("listUser");
    // // dạng array
    // console.log("lấy từ local về thành mảng: ", getListUser);
    // // chuyển sang object
    // let check = JSON.parse(getListUser);
    // console.log("chuyển từ array sang object: ", check);
    // for (let i = 0; i < check.length; i++) {
    //     if (check[i].email == email) {
    //         errorEmail.style.display = "block";

    //     } else {
            
    //     }
        
    // }
    */
    // đặt key cho local 
    let listUser = localStorage.getItem("listUser");
    // xét điều kiện 
    if(listUser == null) {
        listUser = [];
        listUser.push(obj);
        localStorage.setItem("listUser", JSON.stringify(listUser));
    } else {
        listUser = JSON.parse(listUser);
        // listUser.push(obj);
        for (let i = 0; i < listUser.length; i++) {
            if (listUser[i].email == email) {
                flag = false;
                break;
            } else {
                flag = true;
            }
        }
        if (flag == true) {
            listUser.push(obj);
            localStorage.setItem("listUser", JSON.stringify(listUser));
        } else {
            console.log("trùng email!");
            click_login.style.display = "block";
        }
        // localStorage.setItem("listUser", JSON.stringify(listUser))
    }

 });

// con mắt hiện password!
function showPass() {
    let showPass = document.getElementById('showPass');
    showPass.classList.toggle('fa-eye');
    let showPassword = document.getElementById('password');
    let result = showPassword.getAttribute("type");
    if(result == "password") {
        showPassword.setAttribute("type","text");
    } else {
        showPassword.setAttribute("type" , "password");
    }
}

function showPass1() {
    let showPass = document.getElementById('showPass1');
    showPass.classList.toggle('fa-eye');
    let showPassword = document.getElementById('confirmpassword');
    let result = showPassword.getAttribute("type");
    if(result == "password") {
        showPassword.setAttribute("type","text");
    } else {
        showPassword.setAttribute("type" , "password");
    }
}

// chuyển sang trang login khi có tài khoản rồi 
function getLogin() {
    location.href = "login.html"
}


// lưu vào local

let listUser = [];

