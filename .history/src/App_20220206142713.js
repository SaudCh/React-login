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
        <Route path="/u" >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route component={DefaultContainer} />

      </Routes >
    </div>
  );
}

const DefaultContainer = () => (
  <div>
    <Header />
    <div>
      <Route path="/" component={<Home />} />
      <Route path="*" component={<Home />} />
    </div>
  </div>
)

export default App;
