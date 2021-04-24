import { FC } from "react";

const Search: FC = () => {
  return (
    <div className="flex flex-row items-center justify-start px-4 w-full h-10 rounded bg-back-30">
      <input
        className="w-full bg-transparent text-fore-20 placeholder-fore-100 focus:outline-none"
        placeholder={
          Math.random() <= 0.01 ? "Show me da wae" : "Search or enter a URL"
        }
      />
    </div>
  );
};

export default Search;
