function removeDuplicate(arr) {
  let newCart = [];
  for (let i of arr) {
    if (newCart.indexOf(i) === -1) {
      newCart.push(i);
    }
  }
  console.log(newCart);
}

let cart = ["poo", "tiger", "monkey", "mentis", "poo", "tiger"];

removeDuplicate(cart);
