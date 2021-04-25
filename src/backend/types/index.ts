import { BrowserView, IpcRendererEvent } from "electron";
import Tablist from "../models/Tablist";

export interface TabProps {
  id: number;
  url: string;
  friendlyUrl: string;
  view: BrowserView;
  title?: string;
  favicon?: string;
  active?: boolean;
  engine?: string;
}

export interface FriendlyTabProps {
  id: number;
  url: string;
  friendlyUrl: string;
  title?: string;
  favicon?: string;
  active?: boolean;
  engine?: string;
}

export interface HandlerProps {
  tablist: Tablist;
}

export interface HandlerPropsEvents {
  event: string;
  func: (event: IpcRendererEvent, tabs: object[]) => void;
}
