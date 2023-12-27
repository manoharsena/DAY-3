// Step 1: create a XHR object
const client = new XMLHttpRequest();

// Step 2: Open API URL 
client.open("GET","https://restcountries.com/v2/all");

// Step 3: Establishing the connetion
client.send();

// Step 4: Loading the data sucessfully received from server
// Using onload event we can process the fetched data from the server.

client.onload = function(){
    let country = JSON.parse(client.response);

    for(let i = 0 ; i< country.length ; i++){
        console.log(country[i].name + "\t" +country[i].region + "\t" + country[i].subregion + "\t" + country[i].population);   
    }
};