import tabEvents from "./tab";
import windowEvents from "./window";
import Window from "../../models/Window";
import { HandlerProps } from "../../lib/types";

const handler = (window: Window, props: HandlerProps) => {
  windowEvents(window);
  tabEvents(window, {
    tablist: props.tablist,
    tablistWindow: props.tablistWindow,
  });
};

export default handler;
