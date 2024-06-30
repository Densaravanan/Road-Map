document
.getElementById("traditionalBtn")
. addaEventListner("click", function () {
    //this refers to the element
    document.getElementById("traditionalOutput").innerText = 
    "'this is Traditional Function: " + this.textContent; 
});
document
.getElementById("arrowBtn").addaEventListner("click", () => {
    //this refers to the element
    document.getElementById("thisArrowOutput").innerText = 
    " 'this' is Arrrow Function: " + this.textContent; 
});