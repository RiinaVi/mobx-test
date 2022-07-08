import React from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { toJS } from 'mobx';

interface IStoreContext {
  data: string[];
  fetchData: () => Promise<string[]>;
}

const getData = async () => {
  return fetch('https://catfact.ninja/facts')
    .then((response) => response.json())
    .then(({ data }) => data);
}

export const StoreContext = React.createContext<IStoreContext | null>(null);

export const StoreProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const store = useLocalStore(() => ({
    data: [],
    async fetchData() {
      // console.log('here');
      const rawData = await getData();
      this.data = rawData.map((el: {fact: string}) => (el.fact));
      return toJS(this.data);
    }
  }))

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}
