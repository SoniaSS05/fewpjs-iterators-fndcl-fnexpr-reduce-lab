const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const batteries = (number, currentValue) =>{
    console.log(number);
    console.log(currentValue);
     let totalBatteries =  number + currentValue;
     return totalBatteries;
}
const totalBatteries = batteryBatches.reduce(batteries);




/*
function batteries(batt){
    let totalBatteries = 0;
    batt.forEach(function(batt) {
        totalBatteries += batt;
    });
    console.log(typeof(totalBatteries));
    return totalBatteries; 
};

 //let prueba = Batteries(batteryBatches);
 //console.log(prueba);*/
