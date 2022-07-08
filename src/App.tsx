import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { StoreContext } from './store/storeContext';
import { autorun } from 'mobx';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { fetchData, data } = useContext(StoreContext)!;

  // https://mariosfakiolas.com/blog/my-react-components-render-twice-and-drive-me-crazy/
  // https://andreasheissenberger.medium.com/react-components-render-twice-any-way-to-fix-this-91cf23961625
  useEffect(() => {
    autorun(() => fetchData().then(() => setIsLoading(false)))
  }, [fetchData])

  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }

  if (!isLoading && !data.length) {
    return (
      <div>No data</div>
    )
  }

  return (
    <div>
      Facts About Cats
      <div>{data.map((el, i) => (
        <p key={i}>{el}</p>
      ))}</div>
    </div>
  );
};

export default observer(App);
