export interface TabProps {
  id: number;
  url: string;
  friendlyUrl: string;
  title?: string;
  favicon?: string;
  active?: boolean;
  engine?: string;
}

export interface TabComponentProps {
  id: number;
  url: string;
  friendlyUrl: string;
  title?: string;
  favicon?: string;
  active?: boolean;
  engine?: string;
  suffix: boolean;
  tablist: TabProps[];
  setTablist: any;
  index: number;
}
