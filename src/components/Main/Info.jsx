import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Images from "./Images";
import "./Info.scss";
function Info() {
  const url = sessionStorage.getItem("url");
  const [info, setInfo] = useState();
  const [chapter, setChapter] = useState();
  const [images, setImages] = useState([]);
  console.log(info);

  useEffect(() => {
    function getInfo() {
      axios("https://manga-api-beta.vercel.app/info?url=" + url).then((res) => {
        setInfo({});
        console.log(res.data);
        setInfo(res.data);
      });
    }
    getInfo();
  }, []);

  return (
    <div id="info-parent">
      <Images images={images} />
      {info != undefined ? (
        <div id="info">
          <div id="anime-info">
            <img id="poster" src={info.image} alt="" />
            <div id="text">
              <h1> {info.title} </h1>
              <h4 id="summary"> {info.summary} </h4>
            </div>
          </div>
          <div id="episode-div">
            {info.chapters != undefined &&
              info.chapters.map((episodes) => {
                return (
                  <button
                    onClick={() => {
                      axios(
                        "https://manga-api-beta.vercel.app/read?url=" +
                          episodes.url
                      ).then((res) => {
                        console.log(url);
                        console.log(res.data);
                        setImages(res.data);
                      });
                    }}
                  >
                    {" "}
                    {episodes.title}{" "}
                  </button>
                );
              })}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Info;
