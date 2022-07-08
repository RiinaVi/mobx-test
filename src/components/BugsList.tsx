import React from 'react';
import { useObserver } from 'mobx-react-lite';

import { StoreContext } from '../store/storeContext';

const BugsList = () => {
  const store = React.useContext(StoreContext);

  return useObserver(() =>
    <ul>{store?.bugs.map((bug, i) => (
      <li key={bug}>{bug} <button onClick={() => store?.removeBug(i)}>Remove</button></li>
    ))}</ul>
  )
}

export default BugsList;
