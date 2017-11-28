var vehicles = {
    cars: [
            {
                type: "Economy",
                price: "$60",
                available: 15
            },
            {
                type: "SUV",
                price: "$80",
                available: 30
            },
        ],
        name: "Rent My Car"
}
// passing variable right here
function displayDetail(cars){
    document.getElementById('availCar').innerHTML = vehicles.cars[cars].available;
    document.getElementById('priceCar').innerHTML = vehicles.cars[cars].price;
}
for (var i = 0; i < vehicles.cars.length; i++){
    var selectOption =document.createElement("OPTION") //nodename
    selectOption.setAttribute('value', i); //value is to identify
    selectOption.innerHTML = vehicles.cars[i].type;
    document.getElementById('dropdown').appendChild(selectOption) //where I'm going to put the object which is in the dropdown menu
}
        
        
    

// function validateForm() {
//     var x = document.forms["myForm"]["yourName"].value;
//     if (x == "") {
//         alert("Name must be filled out");
//         return false;
//     }
// };
        
// function update() {
//     document.getElementById("busName").innerHTML=rental.Name;
//     // document.getElementById("ecoCars").innerHTML=rental.Cars;
//     // document.getElementById("ecoAvail").innerHTML=rental.ecoAvailable;//total available
//     // document.getElementById("midCars").innerHTML=rental.Type;
//     // document.getElementById("midAvail").innerHTML=rental.midAvailable;// total available
//     document.getElementById("outputName").innerHTML = document.getElementById("yourName").value + " you are renting " + document.getElementById("ecoCars2").value;
// }

// function minusMidsize() {
//         rental.ecoAvailable--;
//         update();
//     }
    
// function minusEconomy() {
//         rental.midAvailable--;
//         update();
//     }

// window.writeValues function(form) {
//   var yourName = form.yourName.value;
  
//   document.getElementById('outputName').innerHTML = yourName;
// }