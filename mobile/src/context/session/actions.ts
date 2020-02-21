type Profile = { username: string; email: string; id: number };

export type Action =
  | { type: 'SIGN_IN'; payload: { token: string; profile: Profile } }
  | { type: 'SIGN_OUT' };

// login
export function signIn({ token, profile }): Action {
  return {
    type: 'SIGN_IN',
    payload: { token, profile },
  };
}

// logout
export function signOut(): Action {
  return { type: 'SIGN_OUT' };
}
