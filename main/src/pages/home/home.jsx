import { useEffect, useState } from 'react'
import axios from 'axios';
import './style/style.scss'

export default function Home() {

    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const tabMonth = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const tabDay = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

    const handleSubmit = (e) => {
        e.preventDefault();
        setCity(e.target[0].value);
    }

    const [weather, setWeather] = useState();
    const [city, setCity] = useState();

    useEffect(() => {
        const fetchWeather = async () => {
            const options = {
                method: 'GET',
                url: 'https://yahoo-weather5.p.rapidapi.com/weather',
                params: { location: city, format: 'json', u: 'c' },
                headers: {
                    'X-RapidAPI-Key': '343df071famsheabffe37675c874p14038djsn7098cf13225e',
                    'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com',
                },
            };
            const response = await axios.request(options);
            setWeather(response.data);
            console.log(response.data);
        };
        fetchWeather();
    }, [city]);

    return <div className='bloc'>
        <div className='bloc_left'>
            <div className='bloc_left_gradient'>
                <div className='bloc_left_gradient_haut'>
                    {weather && <h2 className='bloc_left_gradient_haut_title'>{tabDay[day]}</h2>}
                    {weather && <div className='bloc_left_gradient_haut_date'>{date.getDate()} {tabMonth[month]} {date.getFullYear()}</div>}
                    {weather && <div className='bloc_left_gradient_haut_lieu'><i className="fa-solid fa-location-dot bloc_left_gradient_haut_lieu_logo"> </i>{weather.location.city}, {weather.location.country}</div>}
                </div>
                <div className='bloc_left_gradient_bas'>
                    {weather && <div className='bloc_left_gradient_bas_temp'>{weather.current_observation.condition.temperature}°C</div>}
                    {weather && <div className="bloc_left_gradient_bas_condition">{weather.current_observation.condition.text}</div>}
                </div>
            </div>
        </div>

        <div className='bloc_right'>
            <div className='bloc_right_info'>
                {weather && <div className='bloc_right_info_text'>
                    <div>Humidité</div>
                    <div>{weather.current_observation.atmosphere.humidity} %</div>
                </div>}
                {weather && <div className='bloc_right_info_text'>
                    <div>Vent</div>
                    <div>{weather.current_observation.wind.speed} km/h</div>
                </div>}
            </div>

            <div className='bloc_right_tableau'>
                {weather && <div className='bloc_right_tableau_other isactive'>
                    <div className='bloc_right_tableau_other_text'>{weather.forecasts[0].day}</div>
                    <div>{weather.forecasts[0].low}°C</div>
                    <div>{weather.forecasts[0].high}°C</div>
                </div>}
                {weather && <div className='bloc_right_tableau_other'>
                    <div className='bloc_right_tableau_other_text'>{weather.forecasts[1].day}</div>
                    <div>{weather.forecasts[1].low}°C</div>
                    <div>{weather.forecasts[1].high}°C</div>
                </div>}
                {weather && <div className='bloc_right_tableau_other'>
                    <div className='bloc_right_tableau_other_text'>{weather.forecasts[2].day}</div>
                    <div>{weather.forecasts[2].low}°C</div>
                    <div>{weather.forecasts[2].high}°C</div>
                </div>}
                {weather && <div className='bloc_right_tableau_other'>
                    <div className='bloc_right_tableau_other_text'>{weather.forecasts[3].day}</div>
                    <div>{weather.forecasts[3].low}°C</div>
                    <div>{weather.forecasts[3].high}°C</div>
                </div>}
            </div>

            <form className='bloc_right_form' action="bloc_right_form" onSubmit={(e) => handleSubmit(e)}>
                <input className='bloc_right_form_text' type="text" placeholder='Saisissez une ville...' />
                <input className='bloc_right_form_submit' type="submit" />
            </form>
        </div>
    </div >
}