import { getSunTime } from "../helpers";
import { forecastType } from "../types";
import DayOrNight from "./DayOrNight";

type Props = {
  data: forecastType;
};

const Hour = ({ hour }: { hour: number }): JSX.Element => (
  <span>{hour}:00</span>
);

const Forecast = ({ data }: Props): JSX.Element => {
  const today = data.list[0];
  return (
    <>
      <div className="w-full h-full max-w-screen-sm bg-white/40 p-10 pt-7 mt-4 rounded-xl ring-8 ring-white ring-opacity-60">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-6xl font-bold">
              {Math.round(today.main.temp)}°C
            </span>
            <span className="text-xl font-semibold mt-1 text-gray-700">
              {data.name} {data.country}
            </span>
          </div>
          <DayOrNight
            currentTime={new Date(data.list[0].dt * 1000).getHours()}
            sunrise={parseInt(getSunTime(data.sunrise))}
            sunset={parseInt(getSunTime(data.sunset))}
          />
        </div>

        <div className="flex  justify-between mt-12">
          {data.list.slice(0, 5).map((item, i) => (
            <div
              className="inline-block text-center w-[50px] flex-shrink-0"
              key={i}
            >
              <span className="font-semibold text-lg">
                {Math.round(item.main.temp)}°C
              </span>
              <img
                alt={`weather-icon${item.weather[0].description}`}
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              />
              <span className="font-semibold mt-1 text-sm text-gray-600">
                {i === 0 ? (
                  "Now"
                ) : (
                  <Hour hour={new Date(item.dt * 1000).getHours()} />
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Forecast;
