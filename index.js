// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
};


const drivers = ['Alice', 'Bob', 'Charlie', 'David'];
const firstTwo = returnFirstTwoDrivers(drivers);
console.log(firstTwo);



const returnLastTwoDrivers = (driver) => {
    return driver.slice(-2);
};


const driver = ['Alice', 'Bob', 'Charlie', 'David'];
const lastTwo = returnLastTwoDrivers(drivers);
console.log(lastTwo);

const returnFirstTwoDriver = function(drivers) {
    return drivers.slice(0, 2);
};


const Driver = ['Alice', 'Bob', 'Charlie', 'David'];
const FirstTwo = returnFirstTwoDrivers(Driver);


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const driVers = ['Alice', 'Bob', 'Charlie', 'David'];


const FirStTwo = selectingDrivers[0](driVers);
console.log(FirStTwo);

const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};


const DoubleFare = createFareMultiplier(2); 
const TripleFare = createFareMultiplier(3); 

console.log(DoubleFare(10)); 
console.log(TripleFare(10))


const createFareMultipler =function(multipler) {
    return function(fare) {
        return fare * multipler;
    };
};

const doubleFare = createFareMultiplier(2); 
const tripleFare = createFareMultiplier(3); 

console.log(doubleFare(10)); 
console.log(tripleFare(10));

const fareDoubler = function(fare){
      return fare * 2

}
console.log(fareDoubler(10));
console.log(fareDoubler(5));


const fareTripler =function(fare){
    return fare * 3
}


console.log(fareTripler(10));
console.log(fareTripler(5))

const returnFirstTwoDriVers = function(drivers) {
    return drivers.slice(0, 2);
};

const retuRnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

// selectDifferentDrivers function
const selectDifferentDrivers = function(drivers, selectFunction) {
    return selectFunction(drivers);
};

// Example usage
const drIvers = ['Alice', 'Bob', 'Charlie', 'David'];

const firstTwoDrivers = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
console.log(firstTwoDrivers);