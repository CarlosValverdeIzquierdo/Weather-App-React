import { forecastType } from "../types";

type Props = {
  data: forecastType;
};

const DailyForecast = ({ data }: Props): JSX.Element => {
  // new Date(item.dt * 1000).getHours()
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="flex flex-col space-y-6 w-full max-w-screen-sm bg-white/40 p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-60">
      {data.list.map(
        (item, i) =>
          new Date(item.dt * 1000).getHours() == 14 && (
            <div
              className="flex justify-between items-cente font-semibold text-lg"
              key={i}
            >
              <span className="w-1/4 mt-2">
                {weekday[new Date(item.dt * 1000).getDay()]}
              </span>
              <div className="flex justify-end w-1/4 pr-10 mt-2">
                <span>{data.list[i].main.humidity}%</span>
                <svg
                  className="w-6 h-6 fill-current ml-1"
                  viewBox="0 0 16 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="matrix(1,0,0,1,-4,-2)">
                    <path d="M17.66,8L12.71,3.06C12.32,2.67 11.69,2.67 11.3,3.06L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8ZM6,14C6.01,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 17.99,12 18,14C18.016,17.296 14.96,19.809 12,19.74C9.069,19.672 5.982,17.655 6,14Z" />
                  </g>
                </svg>
              </div>
              <img
                className="size-12"
                alt={`weather-icon${item.weather[0].description}`}
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              />
              <span className="w-1/4 text-right mt-2">
                {Math.floor(data.list[i].main.temp_min)}° /{" "}
                {Math.ceil(data.list[i].main.temp_max)}°
              </span>
            </div>
          )
      )}
    </div>
  );
};

export default DailyForecast;
