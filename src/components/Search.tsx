import { searchProps } from "../types";
import SearchBox from "./SearchBox";

const Search = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: searchProps): JSX.Element => {
  return (
    <div className="h-[100vh] md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24  lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg text-zinc-700 mb-10">
      <h1 className="text-4xl font-thin">
        Weather <span className="font-black">Forecast</span>
      </h1>
      <p className="text-sm mt-2 mb-8">
        Enter below a place you want to know the weather of and select an option
        from the dropdown
      </p>
      <SearchBox
        term={term}
        options={options}
        onInputChange={onInputChange}
        onOptionSelect={onOptionSelect}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Search;
