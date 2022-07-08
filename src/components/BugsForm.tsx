import React, { useState } from 'react';

import { StoreContext } from '../store/storeContext';

const BugsForm = () => {
  const store = React.useContext(StoreContext);

  const [bug, setBug] = useState('')

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      store?.addBug(bug);
      setBug('');
    }}>
      <input type="text" value={bug} onChange={(e) => setBug(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  )
}

export default BugsForm
