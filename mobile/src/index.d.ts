type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
};

interface Store {
  token: string | null;
  profile: object | null;
  isSigned: boolean;
  Provider?: null;
}

interface Provided {
  session: Store;
  dispatch: React.Dispatch<Action>;
}

interface Props {
  children: JSX.Element;
}
