import {Suspense,useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Friends from "./pages/Friends/Friends";
import MyProfile from "./pages/MyProfile/MyProfile";
import '../src/styles/style.scss'
import {changeUsers} from "./redux/reducers/users";
import "./utils/i18n"
import {useDispatch} from "react-redux";


function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        if(localStorage.getItem('user') !== null){
            dispatch(changeUsers(JSON.parse(localStorage.getItem('user'))))
        }
    },[])


    return (
      <Suspense fallback={"...loading"}>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="/" element={<Layout/>}>
            <Route path="" element={<Home/>}/>
            <Route path="friends" element={<Friends/>}/>
            <Route path="myprofile" element={<MyProfile/>}/>
          </Route>
        </Routes>

      </Suspense>
  );
}

export default App;
