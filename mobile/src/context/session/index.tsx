import React, { createContext, useReducer, useEffect } from 'react';
import sessionReducer from './reducer';

import Api from '../../services/api';
import { sessionStorage } from '../../services/storage';

const initialState: Store = {
  token: null,
  isSigned: false,
  profile: null,
};

// contêm o provider e o consumer, essencial para o uso do estado global
export const SessionContext = createContext<Store | Provided>(initialState);

function SessionContextProvider({ children }: Props): JSX.Element {
  const [session, dispatch] = useReducer(
    sessionReducer,
    initialState,
    async () => {
      const storedSession = await sessionStorage.get();

      if (storedSession) {
        const parsedSession: Store = JSON.parse(storedSession);
        const { token } = parsedSession;

        Api.saveToken(token);

        return parsedSession;
      }

      // in case the storage is empty
      return initialState;
    },
  );

  useEffect(() => {
    async function storeNewSession(): Promise<void> {
      await sessionStorage.set(JSON.stringify(session));
      Api.saveToken(session.token);
    }

    storeNewSession();
  }, [session]);

  return (
    <SessionContext.Provider value={{ session, dispatch }}>
      {children}
    </SessionContext.Provider>
  );
}

export default SessionContextProvider;
