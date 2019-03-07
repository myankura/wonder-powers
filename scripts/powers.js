// #1. Add the correct string as the first argument to addEventListener()
// #2. Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.
// #3. Have your developer tools open. When you click the button, the following element...
let flight = document.getElementById("flight");
let mindReader = document.getElementById("mindreading");
let xray = document.getElementById("xray");

document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction = () => {
    flight.classList.remove("disabled");
    flight.classList.add("enabled");
})

document.querySelector("#activate-mindreading").addEventListener("click", mindHandlerFunction = () => {
    mindReader.classList.remove("disabled");
    mindReader.classList.add("enabled");
})

document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction = () => {
    xray.classList.remove("disabled");
    xray.classList.add("enabled");
})

document.querySelector("#activate-all").addEventListener("click", activateHandlerFunction = () => {
    flight.classList.remove("disabled");
    flight.classList.add("enabled");
    mindReader.classList.remove("disabled");
    mindReader.classList.add("enabled");
    xray.classList.remove("disabled");
    xray.classList.add("enabled");

    // let activateAll = document.getElementById("powerList");
    // activateAll.classList.remove("disabled");
    // activateAll.classList.add("enabled");
})

document.querySelector("#deactivate-all").addEventListener("click", deactivateHandlerFunction = () => {
    flight.classList.remove("enabled");
    flight.classList.add("disabled");
    mindReader.classList.remove("enabled");
    mindReader.classList.add("disabled");
    xray.classList.remove("enabled");
    xray.classList.add("disabled");

    // let deactivateAll = document.getElementById("powerList");
    // deactivateAll.classList.remove("enabled");
    // deactivateAll.classList.add("disabled");
})