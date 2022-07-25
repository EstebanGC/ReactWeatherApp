const API_KEY = 'e5c29d98aeeb210f7f84fdf66d939a9c';

const BASE_URL = 'https://api.openweathermap.org/data/2.5'

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY}
    );

    return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

const getFormattedWeatherData = (searchParams) => {
    const getFormattedWeatherData = await getWeatherData
}

export default getWeatherData;
