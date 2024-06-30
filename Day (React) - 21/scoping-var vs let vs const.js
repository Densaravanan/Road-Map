{/* <var></var> */}
function testVar() {
    var x = 35;
    if (true) {
        var x = 65;
        document.getElementById("output").innerText = "Inside if block: " + x;
    }
    document.getElementById("output").innerText += " | Outside if-block: " + x;
}
{/* <let></let> */}
function testLet() {
    let x = 35;
    if (true) {
        let x = 65;
        document.getElementById("output").innerText = "Inside if block: " + x;
    }
    document.getElementById("output").innerText += " | Outside if-block: " + x;
}
{/* <const></const> */}
function testConst() {
    const z = 35;
    document.getElementById("output").innerText = "Const Z: " + z; 
   try {
      z = 76;
   } catch (error) {
    document.getElementById("output").innerText += " | Error: " + error;
   }
}

