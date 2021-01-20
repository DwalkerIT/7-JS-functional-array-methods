// Q1  What is the average price of all items?

let totalNumberOfItems = items.length;
let total = 0;
items.forEach(function (item) {
  const itemPrice = item.price;
  total = total + item.price;
});

const avgPrice = total / totalNumberOfItems;

// 2. Show me an array of items that cost between $14.00 and $18.00 USD?
// Answer 2 Goes Here

let filteredItems = items.filter(function (item) {
  const itemPrice = item.price;
  return itemPrice >= 14.0 && itemPrice <= 18.0;
});

// 3. Which item has a "GBP" currency code? Display it's name and price.
// Answer 3 Goes Here

let filteredResult = items.filter(function (item) {
  console.log(item);
  console.log(item.currency_code);
  item.currency_code == "GBP";
  console.log(item.currency_code == "GBP");
  return item.currency_code == "GBP";
});

console.log(filteredResult);

// 4. Display a list of all items who are made of wood.
// Answer 4 Goes Here
let woodItems = items.filter(function (item) {
  if (item.materials.includes("wood")) {
    return item;
  }
});

let woodList = woodItems
  .map(function (item) {
    return `<div>${item.title}</div>`;
  })
  .join("");

console.log(woodList);

document.querySelector("#answer4").innerHTML = woodList;

// materials: ['wood']
// product.materials = items.length}
// console.log(items.length);

// let materials = items[0].materials;

// let result = materials.filter(function(item){
//     if (item == "wood") {
//         isWood = true;
//         return item;
//     } else {
//         isWood = false;
//      }
// });

// let woodItems = items.filter(function (item;) {
//    // console.log(item.materials);
//   return item.materials.includes("wood");

// });

// console.log(woodItems);

// 5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
// Answer 5 Goes Here

let eightMaterials = items.filter(function (item) {
  if (item.materials.length >= 8) {
    return item;
  }
});

let eightMaterialsList = eightMaterials.map(function (item) {
  return `<div>Name: ${item.title}</div>
        <div>Materials: ${item.materials}</div>
            <div>Number Of Materials: ${item.materials.length}</div>`;
});
document.querySelector("#answer5").innerHTML = eightMaterialsList;
// 6. How many items were made by their sellers?
// Answer 6 Goes Here
