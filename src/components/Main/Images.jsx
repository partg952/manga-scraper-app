import React from 'react'
import './Images.scss';
function Images({images}) {
    if(images.length!=0){
        document.getElementById('images').style.height = '100vh';
    }
    return (
        <div id='images'>
            {
                images.length!=0 &&
                images.map(items=>(
                    <img src={items} alt="" />
                ))
            }
        </div>
    )
}

export default Images
