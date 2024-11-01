// Task #1 - Split the array in half. Save first half of the array in your local storage
function getStates() {
    return fetch('states.json')
        .then(response => response.json())
}

let statesFile = getStates().then(states => {
    for (i = 0; i < (states.states.length)/2; i++) {
        let stateName = states.states[i].name;
        delete states.states[i].name;
        localStorage.setItem(stateName, states.states[i]);
    }
});

// Task #2 - Take the 2nd half of the array and place it in session storage. The key will be the capital and the value will be the remainder of the state object, minus the capital key and value. All strings must be converted to lowercase before being placed in storage. 

statesFile = getStates().then(states => {
    for (i = (states.states.length)/2; i < states.states.length; i++) {
        let loc = states.states[i];
        let capital = (loc.capital).toLowerCase();
        delete loc.capital;
        let lowerStates = JSON.stringify(loc).toLowerCase();
        console.log(lowerStates);
        localStorage.setItem(capital, lowerStates);
        };
    
})