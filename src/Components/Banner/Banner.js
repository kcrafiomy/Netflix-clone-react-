import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../Axios'
import {API_KEY,imageUrl} from '../../constants/Constants'


function Banner(props) {
    const [movie, setmovie] = useState()
    const randomIndex = Math.floor(Math.random() * 20) + 1;
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
            console.log(Response.data.results[0])
            setmovie(Response.data.results[randomIndex])
        })

    },[ ])
    return (
        <div 
        style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}
         className='banner'>
            <div className='content title-container'>
                {movie && <h1 className='title'>{movie.name}</h1>}
                
                    <div className='banner_buttons'>
                        <button className='button'>Play</button>
                        <button className='button'>My list</button>
                    </div>
                
                { movie &&<h1 className='description'>{movie.overview}</h1>}
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner