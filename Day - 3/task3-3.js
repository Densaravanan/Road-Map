// var xhr = new XMLHttpRequest();

// xhr.open("GET", "https://restcountries.com/v3.1/all", true);
// xhr.onload = function () {
//     var countries = JSON.parse(xhr.responseText);
//     countries.forEach((country) => {
//      console.log(country.name.common + ": " + country.flag + ": " + country.population + ": " + country.region +": " + country.subregion)
//     });
// };
// xhr.send();

function fetchCountryData() {
    const url =  "https://restcountries.com/v3.1/all";
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        data.forEach((country) => {
            console.log(country.name.common + ": " + country.flag + ": " + country.population + ": " + country.region +": " + country.subregion)
           });
    }) 
}
fetchCountryData();