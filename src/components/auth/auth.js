import React, { useContext } from 'react';
import { LoginContext } from '../../context/context';
// THIS IS A DEPENDENCY IT IS VARY COOL TO MENTION THAT IN THE FUTURE 💩
import { If } from 'react-if';

export default function Auth(props) {
  const siteContext = useContext(LoginContext);

  let okToRender;
  try {
    okToRender =
      siteContext.loggedIn && props.capability
        ? siteContext.user.capabilities.includes(props.capability)
        : false;
  } catch (e) {
    console.warn('Not Authorized');
  }
  return (
    <div>
      <If condition={okToRender}>
        <div>{props.children}</div>
      </If>
    </div>
  );
}
