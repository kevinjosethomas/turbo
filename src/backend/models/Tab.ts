import { BrowserView } from "electron";

interface TabProps {
  id: number;
  url: string;
  friendlyUrl: string;
  view: BrowserView;
  title?: string;
  favicon?: string;
  active?: boolean;
  engine?: string;
}

class Tab {
  id: number;
  url: string;
  friendlyUrl: string;
  view: BrowserView;
  title: string | undefined;
  favicon: string | undefined;
  active: boolean;
  engine: string;

  constructor(props: TabProps) {
    this.id = props.id;
    this.url = props.url;
    this.friendlyUrl = props.friendlyUrl;
    this.view = props.view;
    this.title = props.title;
    this.favicon = props.favicon;
    this.active = props.active ? props.active : false;
    this.engine = props.engine ? props.engine : "google";
  }
}

export default Tab;
