const form = document.querySelector("#form");
const button = document.querySelector("button")
const input = document.querySelector("input");
const heading = document.querySelector("#heading")
const getWeather = (search_item) => {
    const options = {
        method: 'GET',
        url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
        params: { city: search_item },
        headers: {
            'X-RapidAPI-Key': 'e528758625msh0d815ac9da5bdefp1ae752jsn9efafa5802ab',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data.temp);
        let temp = response.data.temp;
        heading.innerText = `${temp} C`;

    }).catch(function (error) {
        console.error(error);
    })
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const search_item = input.value;
    getWeather(search_item);
})