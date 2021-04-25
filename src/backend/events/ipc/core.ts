import windowEvents from "./window";
import Window from "../../models/Window";
import Tablist from "../../models/Tablist";

interface HandlerProps {
  tablist: Tablist;
}

const handler = (window: Window, props: HandlerProps) => {
  windowEvents(window);
};

export default handler;
