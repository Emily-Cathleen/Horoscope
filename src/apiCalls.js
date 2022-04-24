const getHoroscopeData = () => {
  return fetch('https://mycology-horoscope-api.herokuapp.com/v1/monthlyData')
  .then(response => response.json())
}

export default getHoroscopeData;
