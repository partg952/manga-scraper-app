import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Navbar from "./components/Main/Navbar";
import Info from "./components/Main/Info";
function App() {
  const [data, setData] = useState([]);
  console.log(data.length);
  useEffect(() => {
    setData([]);

    axios("https://manga-api-beta.vercel.app/").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar data={data} setData={setData} />
        <Route path="/" exact>
          <Main data={data} setData={setData} />
        </Route>
        <Route path="/info">
          <Info />
        </Route>
      </Router>
    </div>
  );
}

export default App;
