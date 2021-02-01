//search bar
const apiKey = "c2ee0da0bc72c5db3d4e4ed7d89489e3";

function getWeather(q) {
    let endpoint = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather"
    let units = 'imperial'
  
    $.ajax({
        url: endpoint + "?appid=" + apiKey + "&q=" + q + '&units=' + units,
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
            console.log(result);
            $("#output").html(result.name + " temp:" +result.main.temp);
        }
    });  
};

console.log("script loaded");
window.addEventListener("load", function(){
    var form= document.querySelector(".form-inline");
    console.log(form)
    form.addEventListener("submit", function(event){
        event.preventDefault()
        var q = $("#cityinput").val();
        getWeather(q)
        
        console.log(event)
    });
});
console.log('window finished loading, will fire event');

//document.querySelector(".form-line");
//search history
//current weather conditions
// city name, date, icon to represten the condition, temp, humidity, windspeed and UV index
//uv index if statement < || > returns color coded box to indicate favorable moderate or severe conditions
//5 day forecast date, icon, temp and humidity
//see recent search history