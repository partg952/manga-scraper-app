import React from 'react'
import Card from './Card';
import './Main.scss';
function Main({data,setData}) {
    return (
        <div id='main'>
        {
            data.length!=0 ?
            <div id="grid">
            {
                data.map(items=>(
                    <Card title={items.title} poster={items.image} url={items.url} />
                    ))
                }
                </div>
                :
                <h3>Loading...</h3>
        }
        </div>
    )
}

export default Main
