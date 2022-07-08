import React from 'react';

import BugsHeader from './BugsHeader';
import BugsList from './BugsList';
import BugsForm from './BugsForm'

const App = () => (
  <div>
    Mobx Test App
    <BugsHeader />
    <BugsList />
    <BugsForm />
  </div>
);

export default App;
