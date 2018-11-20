window.onload = main; 

//accepts a country and requests data 
function ajax_request(country){ 

    let requestedCountry = new XMLHttpRequest(); 
    let result = document.getElementById("result")
    requestedCountry.onreadystatechange=function(){ 
        if(this.readyState == XMLHttpRequest.DONE){ 
	        if(this.status == 200){ 
              result.innerHTML = requestedCountry.responseText; 
            }else{ 
              result.innerHTML = "I'm sorry, this country does not exist"; 
            } 
        } 
    } 

    requestedCountry.open("GET", "/world.php?country="+country, true); 
	requestedCountry.send(); 
} 


function main(){ 
   document.getElementById("lookup").onclick = function(){ 
       ajax_request(document.getElementById("country").value.trim()); 
   } 
} 