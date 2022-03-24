const headquarters = 42;
const feet = 264;

function distanceFromHqInBlocks (number){
    if (number > 42){
    return number - headquarters;
    }
    else if (number < 42){
        return headquarters - number;
    }}

function distanceFromHqInFeet (number){
    return distanceFromHqInBlocks(number) * feet;
    
}

function distanceTravelledInFeet (headquarters, num2){
    if (num2 > headquarters){
        return (num2 - headquarters)*feet;

    }
    else{
    return (headquarters - num2)*feet;
    }
}
function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0;
    }
    if (
        distanceTravelledInFeet(start, destination) > 400 &&
        distanceTravelledInFeet(start, destination) < 2000
    ) {
        return 2.56;
    }
    if (
        distanceTravelledInFeet(start, destination) > 2000 && 
        distanceTravelledInFeet(start, destination) < 2500
    ) {
        return 25;
    }
    if (distanceTravelledInFeet(start, destination) > 2500) {
        return "cannot travel that far";
}
} 