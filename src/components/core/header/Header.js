import { Fragment } from 'react';

import { Titlebar } from './components/titlebar/Titlebar';
import { Toolbar } from './components/toolbar/Toolbar';

export const Header = props => {

  return (
    <Fragment>
      <Titlebar window={props.window} />
      <Toolbar />
    </Fragment>
  );

}
