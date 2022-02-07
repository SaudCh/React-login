import Login from './Components/Login/Login';
import Register from './Components/Register/Register'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './Components/Home/Home';
import Header from './Components/Shared/Header';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Header />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes >
      </div>
    </Router>
  );
}

export default App;
