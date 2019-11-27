let shop = {
  storage: null,

  setPoducts(products) {
    //console.log(products);
    this.storage.setItem('products', JSON.stringify(products));
  },

  getProducts() {
    return JSON.parse(this.storage.getItem("products"));
  }
}

let products = [
  {
    name: "Product 1",
    price: 12.34
  },
  {
    name: "Product 2",
    price: 14.5
  },
  {
    name: "Product 3",
    price: 3.8
  },
  {
    name: "Product 4",
    price: 1.4
  },
  {
    name: "Product 5",
    price: 111.4
  },
  
]

shop.storage = window.localStorage;
shop.setPoducts(products);

console.log(shop.getProducts());
