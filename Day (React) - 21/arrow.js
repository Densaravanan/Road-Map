function testArrowFunctions() {
    const numbers = [1, 2, 3, 4, 5];
    // map
    //filter
    //reduce
    const squaredNumbers  = numbers.map((number) => number * number);
    const evenNumbers  = numbers.filter((number) => number % 2 === 0);
    const sumNumbers  = numbers.reduce((total, number) => total + number);
     document.getElementById("arrowOutput").innerHTML = `
        <strong>Orginal Numbers:</strong> ${numbers.join(", ")}<br>
        <strong>Squerd Numbers:</strong> ${squaredNumbers.join(", ")}<br>
        <strong>Even Numbers:</strong> ${evenNumbers.join(", ")}<br>
        <strong>sum Numbers:</strong> ${sumNumbers}<br>
    
    `;
}
    