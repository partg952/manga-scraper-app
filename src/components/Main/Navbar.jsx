import React from "react";
import "./Navbar.scss";

import { useHistory } from "react-router";
import axios from "axios";
function Navbar({ data, setData }) {
  const history = useHistory();
  return (
    <div id="navbar">
      <img
        src="https://icon-library.com/images/manga-icon/manga-icon-0.jpg"
        alt=""
        onClick={() => {
          setData([]);

          axios("https://manga-api-partg952.vercel.app/home").then(
            (res, err) => {
              setData(res.data);
              console.log(err);
            }
          );

          history.push("/");
        }}
      />
      <nav>
        <input
          type="text"
          placeholder="Search..."
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              setData([]);
              axios(
                "https://manga-api-partg952.vercel.app/search?q=" + e.target.value
              ).then((res) => {
                setData(res.data);
                history.push("/");
              });
            }
          }}
        />
      </nav>
    </div>
  );
}

export default Navbar;
