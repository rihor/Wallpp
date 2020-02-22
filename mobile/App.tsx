import React from 'react';

import SessionContextProvider from './src/context/session';
import Routes from './src/routes';

export default function App(): React.ReactElement {
  return (
    <SessionContextProvider>
      <Routes />
    </SessionContextProvider>
  );
}
