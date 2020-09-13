const input = document.querySelector('.input_text');
const main = document.querySelector('#name');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');
const clouds = document.querySelector('.clouds');
const button= document.querySelector('.submit');
const err= document.querySelector('.err');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=6b46ebe8a1898f2864cbd3161527757e')
.then(response => response.json())
.then(data => {
  let tempValue = data['main']['temp'];
  let nameValue = data['name'];
  let sunrise = new Date(data['sys'].sunrise * 1000).toLocaleTimeString();
  let sunset = new Date(data['sys'].sunset * 1000).toLocaleTimeString();

  
  main.innerHTML = nameValue;
  temp.innerHTML = "Current Weather: " + Math.round((tempValue-273.15),3) + ' &#8451';
  desc.innerHTML = "Sunrise: " + sunrise;
  clouds.innerHTML = "Sunset: " + sunset;
  input.value ="";

})
.catch(erro => alert("Wrong city name!"));
})

