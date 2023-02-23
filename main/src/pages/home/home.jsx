import { useEffect, useState } from 'react'
import axios from 'axios';
import './style/style.scss'

export default function Home() {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
    }

    const [weather, setWeather] = useState();
    const [city, setCity] = useState();

    useEffect(() => {
        const fetchWeather = async () => {
            const options = {
                method: 'GET',
                url: 'https://yahoo-weather5.p.rapidapi.com/weather',
                params: { location: { city }, format: 'json', u: 'c' },
                headers: {
                    'X-RapidAPI-Key': '343df071famsheabffe37675c874p14038djsn7098cf13225e',
                    'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com',
                },
            };
            const response = await axios.request(options);
            setWeather(response.data);
        };
        fetchWeather();
    }, []);

    return <div className='bloc'>
        <div className='bloc_left'>
            <div className='bloc_left_gradient'>
                <div>
                    <div className=''>Jour</div>
                    <div className=''>Date</div>
                </div>
                <div className=''>localisation</div>
                <div className=''>température</div>
                <div className="condition">Condition</div>
            </div>
        </div>

        <div className='bloc_right'>
            <form action="bloc_right_form" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder='Saisissez une ville...' />
                <input type="submit" />
            </form>
        </div>
    </div>
}