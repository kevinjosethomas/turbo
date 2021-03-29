import ReactTooltip from 'react-tooltip';
import { Fragment, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { engines } from '../../../../../../server/data/engines';
import Google from '../../../../../../assets/images/engines/google.svg';
import { searchEngineSlide } from '../../../../../../server/utility/animations';

export const SearchBar = props => {

  const [searchEngineDropdown, setSearchEngineDropdown] = useState(false);
  const activeTab = props.tablist[props.tablist.findIndex(el => el.active === true)];
  const [activeURL, setActiveURL] = useState(activeTab ? activeTab.url : '');
  const [searchURL, setSearchURL] = useState(activeTab ? activeTab.url : '');

  const searchRef = useRef(null);

  if (activeTab && activeTab.url !== activeURL) {
    setActiveURL(activeTab.url);
    setSearchURL(activeTab.url);
    searchRef.current.blur();
  }

  console.log(searchEngineDropdown)

  const handleChange = (event) => {
    setSearchURL(event.target.value);
  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && searchURL) {
      if (activeTab) {
        window.ipcRenderer.send('set-active-tab-url', {
          id: activeTab.id,
          url: searchURL
        });
      } else {
        if (!activeTab) {
          window.ipcRenderer.send('create-tab', searchURL);
        }
      }
    }
  }

  return (
    <div className="flex flex-row items-center justify-start w-10/12 h-1/2 px-4 space-x-4 bg-night-tab-active rounded">
      <div className="flex flex-row items-center justify-start space-x-2">
        <img
          src={Google}
          onClick={() => setSearchEngineDropdown(!searchEngineDropdown)}
        />
        <AnimatePresence>
          { searchEngineDropdown && (
            <Fragment>
              <motion.div
                className="flex flex-row items-center justify-center px-4 py-1 space-x-2 bg-night-tab rounded-full w-full"
                animate="animate"
                initial="initial"
                exit="exit"
                variants={searchEngineSlide}
              >
                { engines.map(engine => (
                  <img
                    key={engine.id}
                    src={engine.icon}
                    data-tip={engine.label}
                  />
                ))}
              </motion.div>
              <ReactTooltip
                effect="solid"
                delayShow={100}
              />
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
        onClick={event => event.target.select()}
      />
    </div>
  )

}
