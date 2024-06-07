import {
  getSunTime,
  getWindDirection,
  getHumidityValue,
  getPop,
  getVisibilityValue,
} from "../helpers";
import Sunrise from "./Icons/Sunrise";
import Sunset from "./Icons/Sunset";
import Tile from "./Tile";
import { forecastType } from "../types";

const Degree = ({ temp }: { temp: number }): JSX.Element => (
  <span>
    {temp}
    <sup>o</sup>
  </span>
);

type Props = {
  data: forecastType;
};

const ExtraInfo = ({ data }: Props) => {
  const today = data.list[0];
  return (
    <div className="w-full h-full max-w-screen-sm bg-white/40 p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-60">
      <div className="mx-auto w-[300px] flex flex-wrap justify-between ">
        <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5">
          <Sunrise />
          <span className="mt-2">{getSunTime(data.sunrise)}</span>
        </div>
        <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5">
          <Sunset /> <span className="mt-2">{getSunTime(data.sunset)}</span>
        </div>

        <Tile
          icon="wind"
          title="Wind"
          info={`${Math.round(today.wind.speed)} km/h`}
          description={`${getWindDirection(Math.round(today.wind.deg))}, 
            ${today.wind.gust.toFixed(1)} km/h`}
        />
        <Tile
          icon="feels"
          title="Feels like"
          info={<Degree temp={Math.round(today.main.feels_like)} />}
          description={`Feels ${
            Math.round(today.main.feels_like) < Math.round(today.main.temp)
              ? "colder"
              : "warmer"
          }`}
        />
        <Tile
          icon="humidity"
          title="Humidity"
          info={`${today.main.humidity} %`}
          description={getHumidityValue(today.main.humidity)}
        />
        <Tile
          icon="pop"
          title="Precipitation"
          info={`${Math.round(today.pop * 100)}%`}
          description={`${getPop(today.pop)}, clouds at ${today.clouds.all}%`}
        />
        <Tile
          icon="pressure"
          title="Pressure"
          info={`${today.main.pressure} hPa`}
          description={` ${
            Math.round(today.main.pressure) < 1013 ? "Lower" : "Higher"
          } than standard`}
        />
        <Tile
          icon="visibility"
          title="Visibility"
          info={`${(today.visibility / 1000).toFixed()} km`}
          description={getVisibilityValue(today.visibility)}
        />
      </div>
    </div>
  );
};

export default ExtraInfo;
