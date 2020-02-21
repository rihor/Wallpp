import { Session } from './index';
import { Action } from './actions';

export default function reducer(state: Session, action: Action): Session {
  switch (action.type) {
    case 'SIGN_IN':
      // aplica o token recebido no login, salva o perfil e marca o admin como logado
      return {
        profile: action.payload.profile,
        token: action.payload.token,
        isSigned: true,
      };

    case 'SIGN_OUT':
      // retira o token, o perfil e marca o admin como deslogado
      return { token: null, isSigned: false, profile: null };

    default:
      return state;
  }
}
