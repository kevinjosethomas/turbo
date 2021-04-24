import ReactTooltip from "react-tooltip";
import { Fragment, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { engines } from "../../../server/data/engines";
import { engineIcons } from "../../../server/data/engineIcons";
import { searchEngineSlide } from "../../../server/utility/animations";

export const SearchBar = (props) => {
  const [searchEngineDropdown, setSearchEngineDropdown] = useState(false);
  const activeTab =
    props.tablist[props.tablist.findIndex((el) => el.active === true)];
  const [activeURL, setActiveURL] = useState(activeTab ? activeTab.url : "");
  const [searchURL, setSearchURL] = useState(activeTab ? activeTab.url : "");

  const searchRef = useRef(null);

  if (activeTab && activeTab.url !== activeURL) {
    setActiveURL(activeTab.url);
    setSearchURL(activeTab.url);
    searchRef.current.blur();
  }

  const handleChange = (event) => {
    setSearchURL(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && searchURL) {
      if (activeTab) {
        window.ipcRenderer.send("set-active-tab-url", {
          id: activeTab.id,
          url: searchURL,
          engine: activeTab.engine,
        });
      } else {
        if (!activeTab) {
          window.ipcRenderer.send("create-tab", searchURL);
        }
      }
    }
  };

  const setSearchEngine = (engine) => {
    window.ipcRenderer.send("set-active-tab-engine", engine);
    setSearchEngineDropdown(false);
  };

  return (
    <div className="flex flex-row items-center justify-start w-10/12 h-1/2 px-3 space-x-3 bg-night-tab-active rounded">
      {/* <Protocol
        protocol={
          activeURL.startsWith("https")
            ? "https"
            : activeURL.startsWith("http")
            ? "http"
            : "insecure"
        }
      /> */}
      <div className="flex flex-row items-center justify-start space-x-2">
        <img
          src={activeTab && engineIcons[activeTab.engine]}
          onClick={() => setSearchEngineDropdown(!searchEngineDropdown)}
        />
        <AnimatePresence>
          {searchEngineDropdown && (
            <Fragment>
              <SearchEngineBar setSearchEngine={setSearchEngine} />
              <ReactTooltip effect="solid" delayShow={100} />
            </Fragment>
          )}
        </AnimatePresence>
      </div>
      <input
        className="w-full py-4 bg-transparent focus:outline-none text-gray-400 placeholder-gray-500"
        ref={searchRef}
        placeholder="Search or enter a URL"
        value={searchURL}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        onClick={(event) => event.target.select()}
      />
    </div>
  );
};

const SearchEngineBar = (props) => {
  return (
    <motion.div
      className="flex flex-row items-center justify-start px-1 w-24 h-7 space-x-2 bg-night-tab rounded-full overflow-hidden"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={searchEngineSlide}
    >
      {engines.map((engine) => (
        <img
          className="min-w-min"
          key={engine.id}
          src={engineIcons[engine.name]}
          data-tip={engine.label}
          onClick={() => props.setSearchEngine(engine.name)}
        />
      ))}
    </motion.div>
  );
};

const Protocol = (props) => {
  return (
    <div className="flex flex-col items-center justify-center w-7 h-7 bg-night-tab rounded">
      {props.protocol === "https" ? (
        <i className="fas fa-shield text-sm text-green-500" />
      ) : props.protocol === "http" ? (
        <i className="fad fa-shield text-sm text-green-500" />
      ) : (
        <i className="fad fa-shield text-sm text-red-500" />
      )}
    </div>
  );
};
