import Login from './Components/Login/Login';
import Register from './Components/Register/Register'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import Header from './Components/Shared/Header';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/u" element={<Login />} />
        <Route component={DefaultContainer} />
      </Routes >
    </div>
  );
}
const LoginContainer = () => (
  <div >
    <Route exact path="/" />
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </div>
)
const DefaultContainer = () => (
  <div>
    <Header />
    <Route path="/" element={<Home />} />
    <Route path="*" element={<Register />} />
  </div>
)


export default App;
