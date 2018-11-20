window.onload = main; 

//accepts a country and requests data 
function ajax_request(search){ 

    let requestedCountry = new XMLHttpRequest(); 
    let result = document.getElementById("result");
    requestedCountry.onreadystatechange=function(){ 
        if(this.readyState == XMLHttpRequest.DONE){ 
	        if(this.status == 200){ 
              result.innerHTML = requestedCountry.responseText; 
            }else{ 
              result.innerHTML = "Oops....Something went wrong"; 
            } 
        } 
    }; 

    requestedCountry.open("GET", "/world.php?"+search, true); 
	requestedCountry.send(); 
} 


function main(){ 
    document.getElementById("lookup").onclick = function(){ 
        if (document.getElementById("all").checked){
            ajax_request("all="+document.getElementById("all").value.trim());
        }else{
            ajax_request("country="+document.getElementById("country").value.trim()); 
        } 
    };
} 