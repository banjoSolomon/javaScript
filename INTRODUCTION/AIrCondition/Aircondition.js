let isAcTurnedOn = false;
let currentTemperature = 20;

function turnOnAc() { 
    isAcTurnedOn = true;
    return isAcTurnedOn;
}

function turnOffAc() {
    isAcTurnedOn = false;
    return !isAcTurnedOn;
}

function increaseTemperature() {
    if (currentTemperature < 30) {
        currentTemperature += 1; 
        return true; 
    } else {
        return false; 
    }
}

function getCurrentTemperature() {
    return currentTemperature; 
}

module.exports = {
    turnOnAc,
    turnOffAc,
    isAcTurnedOn, 
    increaseTemperature, 
    getCurrentTemperature
};