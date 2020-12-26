export const apiOpenWeather = async (pais, cuidad) => {
 const url = `http://api.openweathermap.org/data/2.5/weather?q=${cuidad},${pais}&appid=ade83d0ca7f5319f717f8c24c45fa4c9`;

 let response = await fetch(url);
 response = await response.json();
 return response;
};
