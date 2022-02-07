import Login from './Components/Login/Login';
import Register from './Components/Register/Register'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import Header from './Components/Shared/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/u" component={LoginContainer} />
        <Route component={DefaultContainer} />
      </Routes >
    </div>
  );
}
const LoginContainer = () => (
  <div >
    {/* <Route exact path="/" render={() => <Redirect to="/login" />} /> */}
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </div>
)
const DefaultContainer = () => (
  <div>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<Register />} />
  </div>
)


export default App;
