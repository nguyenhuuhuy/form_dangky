// gọi hàm register
function register() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmpassword = document.getElementById('confirmpassword').value;
    if(email == "") {
        let errorEmail = document.getElementById('errorEmail');
       errorEmail.style.display = "block";
    } else {
        errorEmail.style.display = "none";
    }
    // tạo object
    let obj = {
        email: email,
        password: password,
    }
    //push vào array trống 
    listUser.push(obj);
    console.log(listUser); 
    // lưu trên local
    localStorage.setItem("listUser", JSON.stringify(listUser)) // từ object chuyển sang dạng array
    //lấy về : 
    let getListUser = localStorage.getItem("listUser");
    // dạng array
    console.log("lấy từ local về thành mảng: ", getListUser);
    // chuyển sang object
    let check = JSON.parse(getListUser);
    console.log("chuyển từ array sang object: ", check);
}
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

// chuyển sang trang login khi có tài khoản rồi 
function getLogin() {
    location.href = "login.html"
}


// lưu vào local

let listUser = [];

