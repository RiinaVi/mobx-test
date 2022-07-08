import React from 'react';
import { useLocalStore } from 'mobx-react-lite';

interface IStoreContext {
  bugs: string[];
  addBug: (bug: string) => void;
  removeBug: (index: number) => void;
  bugsCount: number;
}

export const StoreContext = React.createContext<IStoreContext | null>(null);

export const StoreProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const store = useLocalStore(() => ({
    bugs: ["Centipede"],
    // State in mobx is Mutable!!!
    addBug: (bug: string) => {
      store.bugs.push(bug)
    },
    removeBug: (index: number) => {
      store.bugs.splice(index, 1);
    },
    get bugsCount(){
      return store.bugs.length;
    }
  }))

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}
