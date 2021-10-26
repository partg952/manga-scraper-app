import './App.css';
import {useEffect,useState} from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Main from './components/Main/Main'
import Navbar from './components/Main/Navbar';
import Info from './components/Main/Info';
function App() {
const [data,setData] = useState([]);
console.log(data.length)
useEffect(()=>{
  setData([]);
  for(let i=1;i<=5;i++){
    axios("https://webtoon-scraper.herokuapp.com/"+i).then(res=>{
    res.data.forEach((items)=>{
      setData(prev=>[...prev,items])
    })
  })
}
},[])
  return (
    <div className="App">
     <Router>
     <Navbar data={data} setData={setData} />
      <Route path='/' exact>
        <Main data={data} setData={setData} />
      </Route>
      <Route path='/info/:id'>
        <Info/>
      </Route>
     </Router>
    </div>
  );
}

export default App;
