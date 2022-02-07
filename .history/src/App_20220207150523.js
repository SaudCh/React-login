import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import LoggedOutRouter from './Components/Router/LoggedOut';
import { useAuth } from './Components/Authentication/AuthHook';
import { AuthContext } from "./Components/Authentication/AuthContext";
import LoggedInRouter from './Components/Router/LoggedIn';
import { Routes } from 'react-router-dom';


function App() {
  const { login, logout, token, userId } = useAuth()

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      {
        !!token ? <LoggedInRouter /> : <LoggedOutRouter />
      }
    </AuthContext.Provider>

  );
}

export default App;
