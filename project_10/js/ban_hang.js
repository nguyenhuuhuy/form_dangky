// let listProduct = [
//     {
//       name: "Áo loại 1",
//       prince: "30k",
//       image: "./image/ao_3.jpg",
//       id: 1 ,
//     },
//     {
//       name: "Áo loại 2",
//       prince: "30k",
//       image: "./image/ao_4.jpg",
//       id: 2 ,
//     },
//     {
//       name: "Áo loại 3",
//       prince: "30k",
//       image: "./image/ao_5.jpg",
//       id: 3,
//     },
//     {
//       name: "Áo loại 4",
//       prince: "30k",
//       image: "./image/ao_6.jpg",
//       id: 4 ,
//     },
//     {
//       name: "Áo loại 5",
//       prince: "30k",
//       image: "./image/ao_7.jpg",
//       id: 5 ,
//     },
//     {
//       name: "Áo loại 6",
//       prince: "30k",
//       image: "./image/ao_7.jpg",
//       id: 5 ,
//     }
    
// ]
// localStorage.setItem ("listProduct", JSON.stringify(listProduct));
// let listProduct = JSON.parse(localStorage.getItem("listProduct"));
function gethtml(addListProduct) {
  let data = "";

  // let listProduct = JSON.parse(localStorage.getItem("listProduct"));

  for (let i = 0; i < addListProduct.length; i++) {
    data += `
        <div class="product">
            <img src="${addListProduct[i].image}" alt="" width="200px">
            <p>${addListProduct[i].name}</p>
            <label for="prince">${addListProduct[i].prince}</label> <br>
            <div>
                <input type="number" value="1">
                <i class="fa-solid fa-cart-shopping" onclick="add(${addListProduct[i].id})" ></i>
            </div>
        </div>
        `;
  }
  document.getElementById("push_mang").innerHTML = data;
}
gethtml(listProduct);

// kiểm tra id
function add(id) {
  let listProduct = JSON.parse(localStorage.getItem("listProduct"));
//   console.log("listProduct", listProduct);
//   console.log("id", id);

  let listProductCart = localStorage.getItem("listProductCart");
  if (listProductCart == null) {
    listProductCart = [];
    for (let i = 0; i < listProduct.length; i++) {
      listProductCart.push(listProduct[i]);
      localStorage.setItem("listProductCart", JSON.stringify(listProductCart));
      break;
    }
  } else {
    let listProductAddCart = JSON.parse(listProductCart);
    for (let i = 0; i < listProduct.length; i++) {
      let flag = false;
      if (listProduct[i].id == id) {
        for (let j = 0; j < listProductAddCart.length; j++) {
          if (listProductAddCart[j].id == id) {
            flag = true;
            break;
          } else {
            flag = false;
          }
        }
        if (flag == true) {
          console.log("sản phẩm đã có trong giỏ hàng!");
        } else {
          listProductAddCart.push(listProduct[i]);
          localStorage.setItem(
            "listProductCart",
            JSON.stringify(listProductAddCart)
          );
        }
      }
    }
  }
}

/* 
// function search() {
//   let sea = document.getElementById("add");
// console.log(sea.value);
// }


// let sea = document.getElementById("add");
// sea.addEventListener("input", ()=>{
//   console.log(sea.value);
// });
*/


function check() {
  let list = [];
  let valueInput = document.getElementById("search").value.toUpperCase();
  // console.log(valueInput);
  for (let i = 0; i < listProduct.length; i++) {
    // console.log(listProduct[i].name);
    if (listProduct[i].name.toUpperCase().indexOf(valueInput) != -1) {
      list.push(listProduct[i])
    }
    
  }
  // console.log(list);
  gethtml(list);
}