
// const submit = document.querySelector('#submit');
let name = document.getElementById('name');


const generatejokes = async (q) => {
	try {
		name.innerHTML = q;
		
		const setHeader = {
			headers: {
				Accept: "application/json"

			}
		}
		// const getweather = async()=>{
			
		const res = await fetch('http://api.weatherapi.com/v1/current.json?key=6f4b420abaa743b3bab143135230805&q='+q, setHeader)
		const data = await res.json();
		
		temp_c.innerHTML = data.current.temp_c;
        wind_kph.innerHTML = data.current.wind_kph;
        wind_degree.innerHTML = data.current.wind_degree;
        wind_dir.innerHTML = data.current.wind_dir
        humidity.innerHTML = data.current.humidity;
        cloud.innerHTML = data.current.cloud;
        pressure_mb.innerHTML = data.current.pressure_mb;
		localtime.innerHTML=data.location.localtime;
		mist.innerHTML = data.current.condition.text;

	//  const htmlData = `
    //         <div class="box">
    //     <div class="box1">
    //         <img src="${data.flags.png}" height = "220vh" width = " 250vw">
    //     </div>
		
	}
	 catch (error) {
		console.log(error);
	}}

// };


submit.addEventListener('click', (e)=>{
	e.preventDefault();
	generatejokes(city.value)}
);
generatejokes("chennai");
// getweather();




// const btn = document.querySelector('#btn');
// const weath = async ()=>{
// const url = 'https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Seattle';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '35b28b9563msh489658a14af5e69p19def8jsn4edce047d719',
// 		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }
// btn.addEventListener('click', weath);
// weath();


