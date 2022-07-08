import React from 'react';
import { useObserver } from 'mobx-react-lite';

import { StoreContext } from '../store/storeContext';

const BugsHeader = () => {
  const store = React.useContext(StoreContext);

  return useObserver(() => (
    <h1>{store?.bugsCount} Bug(s) here!!!</h1>
  ))
}

export default BugsHeader
