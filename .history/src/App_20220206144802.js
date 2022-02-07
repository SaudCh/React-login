import Login from './Components/Login/Login';
import Register from './Components/Register/Register'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './Components/Home/Home';
import Header from './Components/Shared/Header';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={WithHeader}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route path="/u">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

const WithHeader = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App;
