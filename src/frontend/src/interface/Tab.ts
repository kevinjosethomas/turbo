interface TabProps {
  id: number;
  url: string;
  title?: string;
  friendlyUrl: string;
  favicon?: string;
  active?: boolean;
  engine?: string;
  suffix?: boolean;
}

export default TabProps;
