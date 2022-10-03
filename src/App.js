import Register from './Users/Register/Register'
import Login from './Users/Login/Login';
import Homee from "./Home/Homee";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
import { useContext } from "react";
import Posts from "./Home/Posts";
import Profile from "./Users/Profile/UpdateProfile";



function App() {

  const { loggedIn } = useContext(AuthContext)

  return (
    <>
      <Routes>
         <Route exact path="/" element={!loggedIn ? <Register />: <Homee />} />
        <Route path="/login" element={< Login />} />
        {loggedIn && <Route path="/Profile" element={<Profile />} />}
        {loggedIn && <Route path='/posts' element={ <Posts />} />}
      </Routes>
    </>
  );
}

export default App;
