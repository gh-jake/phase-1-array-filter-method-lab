// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase());
}

function fuzzyMatch(drivers, firstLetters) {
    return drivers.filter(driver => driver.startsWith(firstLetters));
}

function matchName(drivers, searchedName) {
    return drivers.filter(driver => driver.name === searchedName);
}