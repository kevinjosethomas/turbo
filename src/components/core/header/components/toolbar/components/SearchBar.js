
export const SearchBar = props => {

  return (
    <div className="flex flex-row items-center justify-start w-10/12 h-1/2 px-4 bg-night-800 rounded-lg">
      <input
        className="w-full py-4 bg-transparent focus:outline-none text- text-gray-400 placeholder-gray-400"
        placeholder="Search Google or enter a URL"
      />
    </div>
  )

}
