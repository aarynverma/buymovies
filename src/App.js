import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";

const baseURL =
  "https://mcuapi.herokuapp.com/api/v1/movies?page=1&limit=10&columns=title%2Crelease_date%2Cphase&order=chronology%2CDESC&filter=title%3D";

function App() {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setMoviesData(response?.data?.data);
    });
  }, []);
  console.log("here is the data", moviesData);
  return (
    <div className="app">
      <nav className="navbar">Shop</nav>
      <h2 className="heading">New Release Films</h2>
      <div className="app_cards_container">
        {moviesData?.map((data) => (
          <div className="app_cards">
            <Card
              title={data?.title}
              date={data?.release_date}
              phase={data?.phase}
            />
          </div>
        ))}
      </div>
      <footer className="footer">
        <div className="footer_shop_icon">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAd0lEQVRIiWNgGAUEACO6wP////9TZCAjI4qZTJQYNgLB////tf9TDrSQzUSPg1AquDMMnw+uUsEH13EZTo3ggQF4MCEHETWCBwYwg+k/dYIHBuDBxIhkAUU5GB3AcjR9czLMf9SUp7kPhr4FLNgEqZmiRuuDgQcAU1VQOlADoHAAAAAASUVORK5CYII="
            alt="shop"
            className="footer_icons"
          />
          <p style={{ color: "white", fontWeight: "500" }}>Shop</p>
        </div>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAqUlEQVRIie3R0Q2CMBCA4TsfmMK4h25g3MNRUBfTQUpZ4/fBVhoSQltteLk/6QOkuY9wItZCQAc8gDGcPpwR8MAN6FrAd9brW8A+DD8CpwRLn33uvF2BHe+qqj5leniJiFbMmwIuwJDxS0tzwDm1dAY7EdlXffV6TlUPSzCN0A+m+vXqdmJVpPMXuXuO+yq9H9tsxwYbbLDBBv8EDw0clwNf/4y7MNPapjfm++Qt5TBGgwAAAABJRU5ErkJggg=="
          alt="bag"
          className="footer_icons"
        />
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAd0lEQVRIiWNgGAUEACO6wP////9TZCAjI4qZTJQYNgLB////tf9TDrSQzUSPg1AquDMMnw+uUsEH13EZTo3ggQF4MCEHETWCBwYwg+k/dYIHBuDBxIhkAUU5GB3AcjR9czLMf9SUp7kPhr4FLNgEqZmiRuuDgQcAU1VQOlADoHAAAAAASUVORK5CYII="
          alt="cart"
          className="footer_icons"
        />
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA+UlEQVRIidXUP0oDQRiG8VkRrEMOYGcveIWAQTyDp7C3Uk9gJ4LgDWz9Aym9gWVilcpGRYj+bEZc4sbM7KyCbzl88zzvNwsbQkIwwGDZWavgwFeOF50tg1zH4TccFrdqEIxqjZ7R71wSRZfKc1Nnrsw5TjrouXh7VLgv3GD3Rz32C+C3S/dDD08t4O/YSnpEnLUQnCfBo2AzE/6C9WRBlNxlCI5y4X1ME5tfYC1XcBoBV6iyLifAe5jhFRudwqNgFY8Z7/+ZURNv/lcRqqqahRD2QgjT3G4t9vmlYAcPmGBYOtd0cVJ723HJ3Ldv8CfBMLYbY7t07n/nA6Z82EH3/qx2AAAAAElFTkSuQmCC"
          alt="profile"
          className="footer_icons"
        />
      </footer>
    </div>
  );
}

export default App;
