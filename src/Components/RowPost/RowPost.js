import React, { useEffect, useState } from 'react'
import './RowPost.css'
import  axios  from '../../Axios'
import {imageUrl,API_KEY} from '../../constants/Constants'
import Youtube from 'react-youtube'

function RowPost(props) {
    const [movie, setmovie] = useState([])
    const [urlId,setUrlId] = useState("")
    useEffect(()=>{
        axios.get(props.url).then(Response=>{
           console.log(Response.data)
           setmovie(Response.data.results)
        })

    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const movieIdHandle = (id)=>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(Response=>{
            if (Response.data.results.length !== 0){
                setUrlId(Response.data.results[0])
            }
            else {
                console.log("triler not avilable")
            }
        })

      }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movie.map((obj)=>
                    <img onClick={()=>movieIdHandle(obj.id)} className={props.isSmall ? 'smallPoster' :'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
                )}
                
            </div>
            {urlId && <Youtube opts={opts} videoId={urlId.key}/>}
        </div>
    )
}

export default RowPost