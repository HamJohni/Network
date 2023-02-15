import React from 'react';
import {Navigate, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {HiOutlineUserCircle} from 'react-icons/hi'
import {changeUsers} from "../../redux/reducers/users";


const Home = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const {usersReg} = useSelector((state) => state.users)

    const exitUser = () => {
        localStorage.removeItem('user')
        dispatch(changeUsers({}))
    }

    if(usersReg.length === 0){
       navigate('/login')
    }

    return (
        <div>
            <button onClick={exitUser} className="home__exit-btn btn">Выйти из акккаунта</button>
        </div>
    );
};

export default Home;