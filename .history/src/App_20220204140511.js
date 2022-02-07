import Login from './Components/Login/Login';
import Register from './Components/Register/Register'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="*" element={<Register />} />
    </Routes >
  );
}

export default App;
