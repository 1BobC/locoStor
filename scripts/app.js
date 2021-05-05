//#99 Project Preview & Setup
//#100 HTML & CSS Template
//#101 AccuWeather API      key: 3RHb2BhshzIWidBzVVB255b7zWi0QpAI 
//#102 Get City API Call
//#103 Get Weather API Call
//#104 Updating the Location
//#105 Object Shorthand Notation
//#106 Updating the UI
//#107 Destructuring
//#108 Weather Icons & images
//#109 Ternary Operator

const cityForm= document.querySelector('form');
const card= document.querySelector('.card');
const details= document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI= (data) => {
    //console.log(data);
    
    // const cityDets= data.cityDets;
    // const weather= data.weather;
    //variable name -- property and with #107 Destructuring - see below - Voila!

    const {cityDets, weather} = data;

    //update template details  #106 Updating the UI
    details.innerHTML= `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
        <div class= "display-4 my-4">   
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>  
        </div>
    `;

    //update the icon image #108 Weather Icons & images
    const iconSrc= `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    //just see this!! #109 Ternary Operator
//   let timeSrc = null;
    let timeSrc= weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
//   if(weather.IsDayTime){
//     timeSrc = 'img/day.svg';
//   } else {
//     timeSrc = 'img/night.svg';
//   }
  time.setAttribute('src', timeSrc);

    //remove d-none (se index.html) if present
    if(card.classList.contains('d-none')){
        (card.classList.remove('d-none'));
    }
}

const updateCity= async (city) => {
    //console.log(city);
    const cityDets= await getCity(city);
    const weather= await getWeather(cityDets.Key);

    return{
        cityDets, //using #105 Object Shorthand Notation "cityDets: cityDets,"" becomes "cityDets"
        weather   // etc! when property name and value name are the same 
    };

};

cityForm.addEventListener('submit', e => {
    //prevent default action
    e.preventDefault();

    //get city value #104 Updating the Location
    const city= cityForm.city.value.trim();
    cityForm.reset();

    //update the ui with new information
    //updateCity(city).then(data => console.log(data))
    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

});