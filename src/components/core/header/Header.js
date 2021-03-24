import { Fragment } from 'react';

import { TitleBar } from './components/titlebar/TitleBar';
import { ToolBar } from './components/toolbar/ToolBar';

export const Header = props => {

  return (
    <Fragment>
      <TitleBar window={props.window} />
      <ToolBar />
    </Fragment>
  );

}
