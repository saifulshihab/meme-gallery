import { createContext, ReactNode, useContext, useReducer } from 'react';
import {
  ACTIONTYPE,
  memeInitialState,
  memeReducer,
  MemeState,
} from '../reducers/memeReducer';

interface MemeContextProps {
  values: MemeState;
  dispatch: React.Dispatch<ACTIONTYPE>;
}

const MemeContext = createContext<MemeContextProps | null>(null);

export const MemeProvider = ({ children }: { children: ReactNode }) => {
  const [values, dispatch] = useReducer(memeReducer, memeInitialState);

  return (
    <MemeContext.Provider value={{ values, dispatch }}>
      {children}
    </MemeContext.Provider>
  );
};

export const useMeme = () => {
  const context = useContext(MemeContext);

  if (!context) throw new Error('No context!');

  return context;
};
