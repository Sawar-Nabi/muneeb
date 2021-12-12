let apiKey = "4e4d45e3ff23b80cbc45f72efe1ad31b";

// fetch weather

  const fetchWeather = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => displayWeather(data))
     
  };

  // displayWeather

  const displayWeather = (data) => {
    const { name } = data;
    const { description, icon } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const {sunrise,  sunset} = data.sys
    document.querySelector(".city").textContent = `weather in ${name}`;
    document.querySelector(".temperature").textContent = `${temp}° C`;
    document.querySelector(
      ".icon"
    ).src = ` http://openweathermap.org/img/wn/${icon}@2x.png`;
    document.querySelector(".description").textContent = `${description}`;
    document.querySelector(".humidity").textContent = `humidity : ${humidity}%`;
    document.querySelector(".wind").textContent = `Wind Speed : ${speed} km/h`;
    let rise =new Date(sunrise * 1e3).toLocaleTimeString();
    let set =new Date(sunset * 1e3).toLocaleTimeString();
    document.querySelector('.sunrise').textContent = `sunrise : ${rise}`;
    document.querySelector('.sunset').textContent = `sunset : ${set}`
    
  };
  const search = () => {
    fetchWeather(document.querySelector(".search_bar").value);
  };
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()
    if(!document.querySelector(".search_bar").value){
      alert('please enter the city name')
    }else{
      search();
    document.querySelector(".search_bar").value = "";
    } 
  });
  
fetchWeather('budgam')
  

