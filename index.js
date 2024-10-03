/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const meterEl = document.getElementById("meter-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const inputEl = document.getElementById("input-num")

function conversion(unit1, unit2, ratio) {
    let inputNumber = inputEl.innerText   

    const result1 = inputNumber * ratio
    const result2 = inputNumber / ratio
    
    return `
    ${inputNumber} ${unit1} = ${result1.toFixed(3)} ${unit2} | 
    ${inputNumber} ${unit2} = ${result2.toFixed(3)} ${unit1}
    `
}

convertBtn.addEventListener("click", function() {
    const lengthConversion = conversion("meters", "feet", 3.281)
    const volumeConversion = conversion("liters", "gallons", 0.264)
    const massConversion = conversion("kilos", "pounds", 2.204) 
    
    meterEl.innerHTML = lengthConversion
    volumeEl.innerHTML = volumeConversion
    massEl.innerHTML = massConversion
})
