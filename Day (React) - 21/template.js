function showTemplateLiterals() {
    const name = "Denny Samson";
    const age = 25;
    document.getElementById("templateOutput").innerHTML = `
    ${name}, ${age} `;
}