import { useContext } from 'react';
import { AuthContext } from '../Providers';

const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (authContext === undefined) {
    throw new Error('Auth context undefined')
  }
  return authContext;
}

export default useAuth;