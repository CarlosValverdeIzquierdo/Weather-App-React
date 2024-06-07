import "./App.css";
import DailyForecast from "./components/DailyForecast";
import ExtraInfo from "./components/ExtraInfo";
import Forecast from "./components/Forecast";
import Search from "./components/Search";
import SearchBox from "./components/SearchBox";
import useForecast from "./hooks/useForecast";

const App = (): JSX.Element => {
  const { term, options, forecast, onInputChange, onOptionSelect, onSubmit } =
    useForecast();

  return (
    <main className="min-h-screen flex flex-col justify-center items-center py-10 bg-gradient-to-tr from-teal-500 to-purple-600 ">
      {forecast ? (
        <>
          <SearchBox
            term={term}
            options={options}
            onInputChange={onInputChange}
            onOptionSelect={onOptionSelect}
            onSubmit={onSubmit}
          />
          <Forecast data={forecast} />
          <ExtraInfo data={forecast} />
          <DailyForecast data={forecast} />
        </>
      ) : (
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
      )}
    </main>
  );
};

export default App;
