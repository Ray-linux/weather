import React, { useEffect, useState } from "react";
import "./css/weather.css";

// let lat;
// let lon;

export default function Weather() {
  const [temp, setTemp] = useState(null);
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("London");
  useEffect(() => {
    const fetchApi = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "ca68c3b75bmsh80f8c8f9b495727p1dc9b5jsn4f32edf2ff6d",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };

      fetch(
        `https://weatherapi-com.p.rapidapi.com/current.json?q=${search}`,
        options
      )
        .then((response) => response.json())
        .then((response) => setTemp(response.current))
        .catch((err) => console.error(err));
    };

    fetchApi();
  });

  return (
    <>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <div className="container">
        <div className="inputData">
          <input
            type="search"
            className="inputFeild"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!temp ? (
          <div className="info">
            <h2 className="location">
              <i className="fa-sharp fa-solid fa-street-view icon"></i> No Data
              found
            </h2>
          </div>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fa-sharp fa-solid fa-street-view icon"></i>{" "}
                {search}
              </h2>
              <h1 className="temp">{temp.temp_c}° Cel</h1>
              <h4 className="tempmin_max">
                {" "}
                Humidity : {temp.humidity} g.m<sup>-3</sup>
              </h4>
              <h4 className="tempmin_max">
                {" "}
                Wind Speed : {temp.wind_mph} mph
              </h4>
            </div>
            <div className="ocean2">
              <div className="wave2"></div>
              <div className="wave2"></div>
              <div className="wave2"></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
