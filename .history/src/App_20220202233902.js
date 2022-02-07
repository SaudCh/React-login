import Login from './Components/Login/Login';
import Register from './Components/Register/Register'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes >
  );
}

export default App;
