import { useState, useEffect } from 'react';
import * as S from './style';
import TodoList from '../../components/Todo';

const Weather = () => {
  const APIKey = '396fb18f9987c9ba7e9e4e3d880d9f70';
  const [choiceCity, setChoiceCity] = useState('seoul');
  const [inputCity, setInputCity] = useState('');
  const [weatherData, setWeatherData] = useState('');
  const [cityWeatherData, setCityWeatherData] = useState('');
  const [cityName, setCityName] = useState('');
  const [cityWeather, setCityWeatehr] = useState('');
  const [choiceCityName, setChoiceCityName] = useState('');
  const [chocieCityWeather, setChocieCityWeather] = useState('');

  const onGeoOk = (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKey}&units=metric`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  };

  const onGeoCityOk = () => {
    const ChoiceCityWeahter = `https://api.openweathermap.org/data/2.5/weather?q=${choiceCity}&appid=${APIKey}&units=metric`;
    fetch(ChoiceCityWeahter)
      .then((res) => res.json())
      .then((data) => setCityWeatherData(data));
  };

  const onGeoError = () => {
    alert('not good');
  };
  const onGeoCityError = () => {
    alert('error');
  };

  const weatherApp = () => {
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  };
  const cityWeatherApp = () => {
    navigator.geolocation.getCurrentPosition(onGeoCityOk, onGeoCityError);
  };

  console.log(cityWeatherData);

  useEffect(() => {
    if (cityWeatherData === '') {
      cityWeatherApp();
    }
    if (weatherData === '') {
      weatherApp();
    }
    if (weatherData !== '') {
      setCityName(weatherData.name);
      setCityWeatehr(weatherData.weather[0].main);
    }
    if (cityWeatherData !== '') {
      if (inputCity !== '') {
        cityWeatherApp();
        setInputCity('');
      }
      setChoiceCityName(cityWeatherData.name);
      setChocieCityWeather(cityWeatherData.weather[0].main);
    }
  }, [weatherData, choiceCity, cityWeatherData]);

  return (
    <S.Container>
      <h1>{cityName}</h1>
      <h1>{cityWeather}</h1>
      <span>원하는 도시날씨</span>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setChoiceCity(inputCity);
        }}
      >
        <input
          type="text"
          value={inputCity}
          onChange={(e) => {
            setInputCity(e.target.value);
          }}
        />
      </form>
      <h1>{choiceCityName}</h1>
      <h1>{chocieCityWeather}</h1>
      <TodoList />
    </S.Container>
  );
};

export default Weather;
