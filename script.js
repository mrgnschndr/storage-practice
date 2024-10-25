// Split the array in half. Save first half of the array in your local storage
function getStates() {
    return fetch('states.json')
        .then(response => response.json())
}

let statesFile = getStates().then(states => {
    console.log(states);
    for (i = 0; i < (states.states.length)/2; i++) {
        let stateName = states.states[i].name;
        delete states.states[i].name;
        localStorage.setItem(stateName, states.states[i]);
    }
});