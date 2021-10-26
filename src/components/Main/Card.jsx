import React from 'react'
import './Card.scss';
import {useHistory } from 'react-router';
function Card({title,poster,url,summary}) {
    const history = useHistory();
    function checkLength(string,n){
        if(string.length >= n){
          return string.replace(string.substr(n,string.length),"...")
        }
        else{
            return string;
        }
    }
    return (
        <div id="card" onClick={()=>{
            history.push("/info/"+url.substr(1,url.length))
        }}>
            <img src={poster} alt="" />
            <h4> {checkLength(title,30)} </h4>
            {
                summary!=undefined &&
                <p> {summary} </p>
            }
        </div>
    )
}

export default Card
