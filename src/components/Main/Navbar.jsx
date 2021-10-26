import React from 'react'
import './Navbar.scss';
import {useHistory} from 'react-router';
import axios from 'axios';
function Navbar({data,setData}) {
    const history = useHistory();
    return (
        <div id='navbar'>
        <img src="https://icon-library.com/images/manga-icon/manga-icon-0.jpg" alt="" onClick={()=>{
            setData([]);
             for(let i=1;i<=5;i++){
               axios("https://webtoon-scraper.herokuapp.com/"+i).then(res=>{
               res.data.forEach((items)=>{
                setData(prev=>[...prev,items])
               })
             })
            }
            history.push("/")
        }}/>
        <nav>
            <input type="text" placeholder="Search..." onKeyPress={(e)=>{
                if(e.key === 'Enter'){
                    setData([]);
                    axios("https://webtoon-scraper.herokuapp.com/search/"+e.target.value).then(res=>{
                        setData(res.data)
                        history.push("/")
                    })
                }
            }}/>
        </nav>
        </div>
    )
}

export default Navbar
