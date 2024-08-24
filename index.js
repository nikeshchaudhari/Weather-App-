// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=nepal';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '8c5292f5f2msh9380e5688897b3bp143c41jsnabd04d0462f4',
// 		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// fetch(url,option)
// .then(response => response.json())
// .then(res => console.log(res))
// .catch(err=>console.log(err))

// function getData() {
//     const city = search.value;

//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '8c5292f5f2msh9380e5688897b3bp143c41jsnabd04d0462f4',
//             'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
//         }
//     };
//   fetch( 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
//     .then((response) => response.json())
//     .then(res =>{
//         console.log(res)
//         temp.innerHTML = res.temp;
//         ws.innerHTML = res.wind_speed;
//         human.innerHTML = res.humidity;

//     } )
//     .catch((err) => console.log(err));
// }


const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow';
 const options = { method: 'GET', 
    headers: { 'content-type': 'application/octet-stream', 
        'X-RapidAPI-Key': '763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864', 
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com' } };

fetch(url, options) .then(response => response.json()) .then(response => console.log(response)) .catch(err => console.error(err));
