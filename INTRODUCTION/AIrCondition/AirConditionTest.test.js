const { turnOnAc, turnOffAc, isAcTurnedOn, increaseTemperature, getCurrentTemperature } = require('./Aircondition');
test("Ac can be trun on", ()=>{
    const isTurnOn = turnOnAc();
    expect (isTurnOn).toBe(true)
 
});

test("Ac can be turn off", ()=>{
    const isTurnedOff = turnOffAc();
    expect(isTurnedOff).toBe(true);
     expect(isAcTurnedOn).toBe(false);
});


test("Increase temperature by 1 degree", () => {
    turnOffAc(); 
    turnOnAc(); 
    const initialTemperature = getCurrentTemperature(); 
    const isIncreased =  increaseTemperature();
    expect(isIncreased).toBe(true);
    const newTemperature = getCurrentTemperature();
    expect(newTemperature).toBe(initialTemperature + 1);
});

test("Ac can increase temprature", ()=>{
    turnOffAc(); // Ensure AC is turned off
    turnOnAc(); // Turn on AC
    const initialTemperature = getCurrentTemperature(); // Get initial temperature
    
    // Attempt to increase temperature
    const isIncreased = increaseTemperature(); // Try to increase temperature
    expect(isIncreased).toBe(true); // Expect increase to succee
    const newTemperature = getCurrentTemperature(); // Get current temperature
    expect(newTemperature).toBe(initialTemperature + 1);; 

});


