
// kilometertometer 
function kilometerToMeter(kilo){
    var meter = kilo * 1000;
    return meter;
}

var result = kilometerToMeter(5);
console.log(result);


// budgetcalculator
function budgetCalculator(watch,mobile,laptop){
    var Price1 = watch*50;
    var Price2 = mobile*100;
    var Price3 = laptop*500;
    var totalPrice =Price1 +Price2 +Price3;
    return totalPrice;
}
var totalBudget = budgetCalculator(30,20,10);
console.log(totalBudget);


// hotelcost
function hotelCost(days){
var cost =0;
if(days<=10){
   cost = days*100;
}
else if(days<=20){
    var firstCost = 10*100;
    var remaining = days -10;
    var secondCost = remaining*80;
    cost =firstCost+secondCost;
}
else{
    var firstCost = 10*100;
    var secondCost =10*80;
    var remaining = days-20;
    var thirdCost = remaining*50;
    cost = firstCost+secondCost+thirdCost;
}
return cost;
}
var totalCost = hotelCost(12);
console.log(totalCost);


// megafriend
function megaFriend(name){
    var large = name[0];
for(var i =0; i<name.length; i++){
    var element = name[i];
    if(element>large){
        large = element;
    }
}
return large
}
var friend =['salim','shamim','rubel','poli','moni'];
var result = megaFriend(friend);
console.log(result);