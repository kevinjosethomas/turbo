import Bing from '../../assets/images/engines/bing.svg'
import DuckDuckGo from '../../assets/images/engines/duckduckgo.svg'
import Google from '../../assets/images/engines/google.svg'
import Yahoo from '../../assets/images/engines/yahoo.svg'

export const engines = [
  {
    id: 1,
    name: 'bing',
    label: 'Bing',
    url: 'https://bing.com',
    searchURL: 'https://bing.com/search?q=',
    icon: Bing
  },
  {
    id: 2,
    name: 'duckduckgo',
    label: 'DuckDuckGo',
    url: 'https://duckduckgo.com',
    searchURL: 'https://duckduckgo.com/?q',
    icon: DuckDuckGo
  },
  {
    id: 3,
    name: 'google',
    label: 'Google',
    url: 'https://google.com',
    searchURL: 'https://google.com/?q',
    icon: Google
  },
  {
    id: 4,
    name: 'yahoo',
    label: 'Yahoo',
    url: 'https://yahoo.com',
    searchURL: 'https://search.yahoo.com/?q',
    icon: Yahoo
  }
]
