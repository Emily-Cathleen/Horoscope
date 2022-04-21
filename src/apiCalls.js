const getHoroscopeData = () => {
  return fetch('https://mycology-horoscope-api.herokuapp.com/v1/monthlyData')
  .then(response => response.json())
  // .then(data => console.log(data))
}

export default getHoroscopeData;
