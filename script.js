//search bar
console.log("works")
window.addEventListener("load", function(){
    var form= document.querySelector(".form-inline");
    console.log(form)
    form.addEventListener("submit", function(event){
        event.preventDefault()
        console.log(event)
    })
})

//document.querySelector(".form-line");
//search history
//current weather conditions
// city name, date, icon to represten the condition, temp, humidity, windspeed and UV index
//uv index if statement < || > returns color coded box to indicate favorable moderate or severe conditions
//5 day forecast date, icon, temp and humidity
//see recent search history