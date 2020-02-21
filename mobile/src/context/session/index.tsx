import React, { createContext, useReducer, useEffect, Dispatch } from 'react';
import sessionReducer from './reducer';

import { Action } from './actions';
import Api from '../../services/api';

export interface Session {
  token: string | null;
  profile: object | null;
  isSigned: boolean;
  Provider?: null;
}

interface Store {
  session: Session;
  dispatch: React.Dispatch<Action>;
}

interface Props {
  children: JSX.Element;
}

const initialState: Session = {
  token: null,
  isSigned: false,
  profile: null,
};

// contêm o provider e o consumer, essencial para o uso do estado global
export const SessionContext = createContext<Session | Store>(initialState);

function SessionContextProvider({ children }: Props): JSX.Element {
  const [session, dispatch] = useReducer(sessionReducer, initialState, () => {
    const localData = localStorage.getItem('session');

    // usa os dados guardados no localStorage
    if (localData) {
      const parsedLocalData: Session = JSON.parse(localData);
      const { token } = parsedLocalData;
      Api.saveToken(token); // coloca o token salvo no axios
      return parsedLocalData;
    }

    // caso não tenha nada no localStorage
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem('session', JSON.stringify(session));
    // sempre que o token mudar ele é salvo na config do axios
    Api.saveToken(session.token);
  }, [session]);

  return (
    <SessionContext.Provider value={{ session, dispatch }}>
      {children}
    </SessionContext.Provider>
  );
}

export default SessionContextProvider;
