import React from 'react'
import {useParams} from 'react-router';
import {useEffect,useState} from 'react';
import axios from 'axios';
import Images from './Images';
import './Info.scss';
function Info() {
    const {id} = useParams();
    const [info,setInfo] = useState();
    const [chapter,setChapter] = useState();
    const [images,setImages] = useState([]);
    console.log(info)

    useEffect(()=>{
        function getInfo(){
            axios.post("https://webtoon-scraper.herokuapp.com/info",{"url":"https://mangabuddy.com/"+id})
            .then(res=>{
                setInfo({})
                console.log(res.data);
                setInfo(res.data[0])
            })
        }
        getInfo();
    },[])

    return (
        <div id='info-parent'>
            <Images images={images}/>
        {
        info!=undefined ?
        <div id='info'>
            <img id='poster' src={info.poster} alt="" />
            <h1> {info.title} </h1>
            <h2> Authors : {info.authors} </h2>
            <h2> Status : {info.status} </h2>
        <h2> {info.chapters} </h2>
            <h4 id='summary'> {info.summary} </h4>
            <div id="episode-div">
                {
                    info.episodes!=undefined &&
                    info.episodes.map(episodes=>{
                        return(
                            <button onClick={()=>{
                                const url = "https://mangabuddy.com"+episodes.ep_url
                                axios.post("https://webtoon-scraper.herokuapp.com/read",{
                                    "url":url
                                }).then(res=>{
                                    console.log(url)
                                    console.log(res.data);
                                    setImages(res.data)
                                })
                            }}> {episodes.ep_title} </button>
                        )
                    })
                }
            </div>
            </div>
             :
             <p>Loading...</p>}
    </div>
        
    )
}

export default Info
