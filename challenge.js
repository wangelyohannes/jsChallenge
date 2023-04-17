// We need a function


var johnAge = false;

let johnAge;

console.log(johnAge)

var computer = { 

    {brand: "mac", price: 1800},
    {brand: "acer", price: 300},
    {brand: "lenovo", price: 1700},
    {brand: "dell", price: 1000}

}


function sortComputersByPrice(computers) {
    // Use the sort() method to sort the computers array by price in ascending order
    computers.sort(function(a, b) {
      return a.price - b.price;
    });
  
    // Return the sorted computers array
    return computers;
  }
  
  // Example array of computer objects
  const computers = [
    {brand: "mac", price: 1800},
    {brand: "acer", price: 300},
    {brand: "lenovo", price: 1700},
    {brand: "dell", price: 1000}
  ];
  
  // Call the function and store the sorted array in a variable
  const sortedComputers = sortComputersByPrice(computers);
  
  // Print the sorted array
  console.log(sortedComputers);