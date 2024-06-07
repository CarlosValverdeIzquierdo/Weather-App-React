import { optionType, searchProps } from "../types";

const SearchBox = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: searchProps): JSX.Element => {
  return (
    <div className="relative flex mb-5">
      <input
        type="text"
        value={term}
        className="px-2 py-1 rounded-l-md border-2"
        onChange={onInputChange}
      ></input>

      <ul className="absolute top-9 bg-white ml-1 rounded-b-md">
        {options.map((option: optionType, index: number) => (
          <li key={option.name + "-" + index}>
            <button
              className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer"
              onClick={() => onOptionSelect(option)}
            >
              {option.name}, {option.country}
            </button>
          </li>
        ))}
      </ul>
      <button
        className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 px-2 py-1 cursor-pointer"
        onClick={onSubmit}
      >
        search
      </button>
    </div>
  );
};

export default SearchBox;
