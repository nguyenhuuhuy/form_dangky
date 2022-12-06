// let listProduct = [
//     {
//       name: "táo",
//       prince: "30k",
//       image: "./image/ao_3.jpg",
//       id: 1 ,
//     },
//     {
//       name: "táo",
//       prince: "30k",
//       image: "./image/ao_4.jpg",
//       id: 2 ,
//     },
//     {
//       name: "táo",
//       prince: "30k",
//       image: "./image/ao_5.jpg",
//       id: 3,
//     },
//     {
//       name: "táo",
//       prince: "30k",
//       image: "./image/ao_6.jpg",
//       id: 4 ,
//     },
//     {
//       name: "táo",
//       prince: "30k",
//       image: "./image/ao_7.jpg",
//       id: 5 ,
//     }
// ]
// localStorage.setItem ("listProduct", JSON.stringify(listProduct));

function gethtml() {
  let data = "";

  let listProduct = JSON.parse(localStorage.getItem("listProduct"));

  for (let i = 0; i < listProduct.length; i++) {
    data += `
        <div class="product">
            <img src="${listProduct[i].image}" alt="" width="200px">
            <p>${listProduct[i].name}</p>
            <label for="prince">${listProduct[i].prince}</label> <br>
            <div>
                <input type="number" value="1">
                <i class="fa-solid fa-cart-shopping" onclick="add(${listProduct[i].id})" ></i>
            </div>
        </div>
        `;
  }
  document.getElementById("push_mang").innerHTML = data;
}
gethtml();

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
