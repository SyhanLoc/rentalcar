var rental = {
    Name: "Enterprise Car Rental",
    Cars: "Economy",
    ecoAvailable: 80,
    Type: "Midsize",
    midAvailable: 180,
    
    
};
        
function update() {
    document.getElementById("busName").innerHTML=rental.Name;
    document.getElementById("ecoCars").innerHTML=rental.Cars;
    document.getElementById("ecoAvail").innerHTML=rental.ecoAvailable;//total available
    document.getElementById("midCars").innerHTML=rental.Type;
    document.getElementById("midAvail").innerHTML=rental.midAvailable;// total available
}

function minusMidsize() {
        rental.ecoAvailable--;
        update();
    }
    
function minusEconomy() {
        rental.midAvailable--;
        update();
    }