import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import LoggedOutRouter from './Components/Router/LoggedOut';
import { useAuth } from './components/Hooks/auth-hook';
import { AuthContext } from "./components/context/auth-context";


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
      <LoggedOutRouter />
    </AuthContext.Provider>

  );
}

export default App;
