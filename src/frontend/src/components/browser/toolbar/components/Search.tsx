import { FC, useRef, useState, KeyboardEvent } from "react";

import { TabProps } from "../../../../lib/types";

interface SearchProps {
  activeTab: TabProps | undefined;
}

const Search: FC<SearchProps> = (props) => {
  const [openURL, setOpenURL] = useState<string | undefined>(
    props.activeTab ? props.activeTab.friendlyUrl : ""
  );
  const [searchURL, setSearchURL] = useState<string | undefined>(
    props.activeTab ? props.activeTab.friendlyUrl : ""
  );

  if (props.activeTab && props.activeTab.url !== openURL) {
    setOpenURL(props.activeTab.friendlyUrl);
    setSearchURL(props.activeTab.friendlyUrl);
  }

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter" && searchURL) {
      window.ipc.tab.emitters.open(searchURL);
    }
  };

  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-row items-center justify-start px-4 w-full h-10 rounded bg-back-30">
      <input
        className="w-full bg-transparent text-fore-20 placeholder-fore-100 focus:outline-none"
        ref={searchRef}
        placeholder={
          Math.random() <= 0.01 ? "Show me da wae" : "Search or enter a URL"
        }
        value={searchURL}
        onChange={(e) => setSearchURL(e.target.value)}
        onKeyPress={handleKeyPress}
        onClick={(e) => {
          if (searchURL) {
            if (window.getSelection()?.toString()) {
              if (
                searchURL
                  .toLowerCase()
                  .includes(
                    (window.getSelection() as Selection)
                      .toString()
                      .toLowerCase()
                  )
              ) {
                void 0;
              } else {
                (e.target as HTMLTextAreaElement).select();
              }
            } else {
              (e.target as HTMLTextAreaElement).select();
            }
          } else {
            (e.target as HTMLTextAreaElement).select();
          }
        }}
      />
    </div>
  );
};

export default Search;
