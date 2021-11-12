const appleStore = {
  location: "London",
  products: [
    {
      name: "iPhone 6S",
      type: "mobile",
      stock: {
        incomingDelivery: false,
        quantity: 450
      },
      price: 600
    },
    {
      name: "iPhone 10",
      type: "mobile",
      stock: {
        incomingDelivery: false,
        quantity: 20
      },
      price: 1000
    },
    {
      name: "iPhone 12",
      type: "mobile",
      stock: {
        incomingDelivery: true,
        quantity: 0
      },
      price: 1400
    },
    {
      name: "iPad Pro",
      type: "tablet",
      stock: {
        incomingDelivery: true,
        quantity: 100
      },
      price: 600
    },
    {
      name: "iPad mini",
      type: "tablet",
      stock: {
        incomingDelivery: false,
        quantity: 300
      },
      price: 600
    },
    {
      name: "MacBook Pro",
      type: "computer",
      stock: {
        incomingDelivery: false,
        quantity: 80
      },
      price: 2400
    },
    {
      name: "MacBook Air",
      type: "computer",
      stock: {
        incomingDelivery: false,
        quantity: 200
      },
      price: 1800
    },
    {
      name: "iMac",
      type: "computer",
      stock: {
        incomingDelivery: true,
        quantity: 15
      },
      price: 2300
    }
  ]
};


// STORE EXERCISES
// ----- Section -----====================================================

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that cost more than £1000

function filterProductsOver1000(products) {
  const expensiveProducts = [];
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const price = product.price;
    if (price >= 1000) {
      expensiveProducts.push(product);
    }
  }
  return expensiveProducts;
}

const productsOver1000 = filterProductsOver1000(appleStore.products);
console.log("expensiveProducts: ", productsOver1000);

// ----- Section -----

// Write a function here...................................................
// - that takes an array as a parameter
// - returns an array of products that cost less than £1000

const cheapProducts = (cheapProducts) => {
  cheapProductsArr= cheapProducts.filter(product => {
    return product.price <= 1000
  })
  return cheapProductsArr;
}
const cheapProduct = cheapProducts(appleStore.products);
console.log("cheapProducts: ", cheapProduct);

// ----- Section ----------------------------------------------------------

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that have an incoming delivery

const productsThatNeedToBeReceived = (arr) => {
  return arr.filter(product => (product.stock.incomingDelivery === true))
}
const incomingDelivery = productsThatNeedToBeReceived(appleStore.products);
console.log("incomingDelivery: ", incomingDelivery);
// ----- Section ------------------------------------------------------------

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that are out of stock

const outOfStockProducts = (arr) => {
  return arr.filter(product => (product.stock.quantity === 0))
}
const outOfStock = outOfStockProducts(appleStore.products);
console.log("outOfStock: ", outOfStock);
// ----- Section ------------------------------------------------------------

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that have a quantity that is less than 100 and have no incoming delivery

const productsThatNeedToBeOrdered = (arr) => {
  return arr.filter(product => {
    return product.stock.incomingDelivery === false && product.stock.quantity<=100
  })
}

const NeedToBeOrdered = productsThatNeedToBeOrdered(appleStore.products);
console.log("NeedToBeOrdered: ", NeedToBeOrdered);

// ----- Section ----- **--------------------------------------------------------------

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products of the type "tablet"

const tablets = (arr) => {
  return arr.filter(product => product.type === 'tablet')
}
const tabletFn = tablets(appleStore.products);
console.log("tablet: ", tabletFn);

// ----- Section --------------------------------------------------------

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products of the type "computer"

const computers = (arr) => {
  return arr.filter(product => product.type === 'computer')
}
const computer = computers(appleStore.products);
console.log("computers: ", computer);

// ----- Section ----------------------------------------------------------

// Write a function here...
// - that takes an array as a parameter
// - returns an object that represents an "iMac"

const iMac = (arr) => {
  for(let product of arr){
    if(product.name === 'iMac'){
      return product
    }
  }
}
const iMacType = iMac(appleStore.products);
console.log("iMac: ", iMacType);

// ----- Section ---------------------------------------------------

// Write a function here...
// - that takes an array as a parameter
// - returns an object that represents an "iPhone 12"

const iPhone12 = (arr) => {
  for(let product of arr){
    if(product.name === 'iPhone 12'){
      return product
    }
  }
}
const iPhone12Fn = iPhone12(appleStore.products);
console.log("iphone: ", iPhone12Fn);

// ----- Section -------------------------------------------------------

// Write a function here...
// - that takes an array as a parameter
// - returns an object that represents an "iPad Mini"

const iPadMini = (arr) => {
  for(let product of arr){
    if(product.name === 'iPad mini'){
      return product
    }
  }
}

const iPadMiniFn = iPadMini(appleStore.products);
console.log("ipadMini: ", iPadMiniFn);

// ----- CHALLENGE -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of unique product types
//    => ["mobile", "computer", "tablet"]

const productTypes = (arr) => {
  const productArr = arr.map(product => product.type);
  return [...new Set(productArr)]
};
const productTypesFn = productTypes(appleStore.products);
console.log("productTypes: ", productTypesFn);
// CART EXERCISES

const cart = [
  {
    product: {
      name: "iPhone 12",
      type: "mobile",
      price: 1400
    },
    quantity: 4
  },
  {
    product: {
      name: "iPad mini",
      type: "tablet",
      price: 600
    },
    quantity: 2
  },
  {
    product: {
      name: "MacBook Air",
      type: "computer",
      price: 1800
    },
    quantity: 2
  },
  {
    product: {
      name: "iMac",
      type: "computer",
      price: 2300
    },
    quantity: 2
  }
];

// ----- Section ----- **------------------------------------------------
// Write a function here...
// - that takes an array as a parameter
// - returns a number that rerpresents the total price of the items in the cart
const totalPriceFn = (arr) => {
  const priceArr = arr.map(cart => cart.product.price)
  return priceArr.reduce((acc, curr) => {
    return acc + curr
  })
}
console.log("totalPrice: ", totalPriceFn(cart));

// ----- Section ----- **------------------------------------------------
// Write a function here...
// - that takes an array as a parameter
// - returns a number that rerpresents the quantity of the items in the cart
const quantityItems = (arr) => {
  const quantity = arr.map(product => product.quantity);
  return quantity.reduce((acc,curr) => {
    return acc+curr
  })
}
console.log("quantityItems: ", quantityItems(cart));
// ----- Section ----- **

// Write a function here...
// - that takes an object as a parameter
// - returns a string of the information about a product in the cart
//      => "iPhone 12 | Mobile - £1400 x 2 || £2800"
const productInfo = (obj) => {
  let product = obj.product;
  let quantity = obj.quantity;
  let total = (product.price) * quantity;
  return `${product.name} | ${product.type} - ${product.price} x ${quantity} || ${total}`
}
for(let product of cart){
  console.log("productInfo: ", productInfo(product));
}

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns a string with the various rows on the receipt
//    - Include the total quantity
//    - Include the total price
// TIP: Re-use the above function for "receiptRow"
const receiptRow = (obj,arr) => {
  const totalPriceArr = arr.map(product => product.quantity * product.product.price);
  const totalPrice = totalPriceArr.reduce((acc, curr) => acc + curr);
  const totalQtyArr = arr.map(product => product.quantity);
  const totalQty = totalQtyArr.reduce((acc,curr) => acc+ curr);

  let str ='';
  console.log(str += productInfo(obj))
  return `total price: ${totalPrice}\n total quantity: ${totalQty}`
}

for(let product of cart){
  console.log("receiptRow: ", receiptRow(product,cart));
}


