
  

// //   let maincontaner = document.getElementById(maincontaner);
  
// function food(){
//   foodList.forEach(items => {
//     console.log(items.foodname);
// });
// foodList.forEach(items => {
//     console.log(items.category);
// });
// foodList.forEach(items => {
//     console.log(items.calorie);
// });
// foodList.forEach(items => {
//     console.log(items.protiens);
// });
// foodList.forEach(items => {
//     console.log(items.cab);
// });
// }
// food()

fetch("products.json")
.then(function(response) {
    return response.json();
}) 

.then(function(products){
    let placeholder = document.querySelector("#data-output");
    let out = "";

    products.sort((a, b) => a.cab - b.cab);
    products.sort((a, b) => a.protiens - b.protiens);
    products.sort((a, b) => a.calories - b.calories);
    // products.sort((a, b) => a.category - b.category);
    // products.sort((a, b) => a.cab - b.cab);

    for(let product of products ) {

        out += `
        <tr>
             <th>${product.foodname}</th>
             <th>${product.category}</th>
             <th>${product.calorie}</th>
             <th>${product.protiens}</th>
             <th>${product.cab}</th>
    </tr>
        
        
        `;

        
    }

    placeholder.innerHTML = out;
})


// fetch("products.json")
//   .then(function(response) {
//     return response.json();
//   }) 
//   .then(function(products) {
//     let placeholder = document.querySelector("#data-output");
//     let out = "";

//     const categoryToDisplay = "Special Category"; // Replace with your desired category
    
//     // Filter products based on the specified category
    const filteredProducts = products.filter(product => product.category === categoryToDisplay);

//     // Sort the filtered products based on foodname
//     filteredProducts.sort((a, b) => a.foodname.localeCompare(b.foodname));

//     for (let product of filteredProducts) {
//       out += `
//         <tr>
//           <th>${product.foodname}</th>
//           <th>${product.category}</th>
//           <th>${product.calorie}</th>
//           <th>${product.protiens}</th>
//           <th>${product.cab}</th>
//         </tr>`;
//     }

//     placeholder.innerHTML = out;
//   });
