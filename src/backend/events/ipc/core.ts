import tabEvents from "./tab";
import windowEvents from "./window";
import Window from "../../models/Window";
import Tablist from "../../models/Tablist";

interface HandlerProps {
  tablist: Tablist;
}

const handler = (window: Window, props: HandlerProps) => {
  windowEvents(window);
  tabEvents(window, { tablist: props.tablist });
};

export default handler;
