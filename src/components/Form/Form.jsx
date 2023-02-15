import React, {useEffect, useState} from 'react';
import {AiFillEye} from 'react-icons/ai'
import {AiFillEyeInvisible} from 'react-icons/ai'
import {Link,useNavigate} from "react-router-dom"
import {useLocation} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {changeUsers} from "../../redux/reducers/users";
import {month} from "../../utils/month";
import {days} from "../../utils/days";
import login from "../../pages/Login/Login";

const Form = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const {pathname} = useLocation()

    const [eye,setEye] = useState(false)

    const {usersReg} = useSelector((state) => state.users)

    const {
        register,
        reset,
        handleSubmit,
        formState:{
            errors
        }} = useForm(
        {mode: "onBlur"}
    )

    const userRegister = (data) => {
        axios.post('http://localhost:8080/register', {
            ...data,
            categories: []
        }).then((res) => {
            console.log(data)
            dispatch(changeUsers({
                token: res.data.accessToken,
                ...res.data.user
            }))
            localStorage.setItem('user', JSON.stringify({
                token: res.data.accessToken,
                ...res.data.user
            }))
            reset()
            navigate('/')
        }).catch((err) => console.log(err))
    }

    const userLogin = (data) => {
        axios.post('http://localhost:8080/login', {
            ...data,
        }).then((res) => {
            dispatch(changeUsers({
                token: res.data.accessToken,
                ...res.data.user
            }))
            localStorage.setItem('user', JSON.stringify({
                token: res.data.accessToken,
                ...res.data.user
            }))
            reset()
            navigate('/')
        })
            .catch((err) => alert(err.message))
    }

    const submit = (data) => {
        pathname === '/register' ? userRegister(data) : userLogin(data)
    }

    useEffect(() => {
        if(usersReg.length !== 0){
            navigate('/')
        }
    },[])

    return (
        <form noValidate className="form" onSubmit={handleSubmit(submit)}>

            <h2 className="form__title">
                {
                    pathname === '/register' ? "Зарегестрироваться" : "Войти"
                }
            </h2>


            {
                pathname === '/register' ?
                    <>
                        <div className="form__box">
                            <h2 className="form__box-title">Имя :</h2>
                            <label className="form__label">
                                <input
                                    {...register('name', {
                                        required: {
                                            message: "Напишите имя", value: true
                                        },
                                        maxLength: {
                                            message: "Макимальная длина 10 символов", value: 15
                                        },
                                        minLength: {
                                            message: "Минмальная длина 3 символа", value: 3
                                        }
                                    })}
                                    type="text" className="form__input" placeholder="Имя"/>
                                <p className="form__error">{errors.name && errors.name.message}</p>
                            </label>
                        </div>

                        <div className="form__box">
                            <h2 className="form__box-title">Фамилия :</h2>
                            <label className="form__label">
                                <input
                                    {...register('surname', {
                                        required: {
                                            message: "Напишите фамилию", value: true
                                        },
                                        maxLength: {
                                            message: "Макимальная длина 15 символов", value: 15
                                        },
                                        minLength: {
                                            message: "Минмальная длина 3 символа", value: 3
                                        }
                                    })}
                                    type="text" className="form__input" placeholder="Фамилия"/>
                                <p className="form__error">{errors.surname && errors.surname.message}</p>
                            </label>
                        </div>


                        {/*<div className="form__box">*/}
                        {/*    <h2 className="form__box-title">День Рождения :</h2>*/}

                        {/*    <div className="form__box-age">*/}
                        {/*        <select className="form__age">*/}
                        {/*            {*/}
                        {/*                days.map(item => (*/}
                        {/*                    <option key={item} className="form__option" value={item}>{item}</option>*/}
                        {/*                ))*/}
                        {/*            }*/}
                        {/*        </select>*/}

                        {/*        <select className="form__age">*/}
                        {/*            {*/}
                        {/*                month.map(item => (*/}
                        {/*                    <option key={item.en} className="form__option" value={item.en}>{item.ru}</option>*/}
                        {/*                ))*/}
                        {/*            }*/}
                        {/*        </select>*/}

                        {/*        <label className="form__label-year">*/}
                        {/*            <input placeholder="Год" type="number" className="form__input-year"/>*/}
                        {/*        </label>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className="form__box">
                            <h2 className="form__box-title">Пол :</h2>

                            <select className="form__gender">
                                <option className="form__option" value="">Мужской</option>
                                <option className="form__option" value="">Женский</option>
                                <option className="form__option" value="">Другой</option>
                            </select>
                        </div>


                        <div className="form__box">
                            <h2 className="form__box-title">Город :</h2>
                            <label className="form__label">
                                <input
                                    {...register('country', {
                                        required: {
                                            message: "Напишите город", value: true
                                        },
                                        maxLength: {
                                            message: "Макимальная длина 15 символов", value: 15
                                        },
                                        minLength: {
                                            message: "Минмальная длина 3 символа", value: 3
                                        }
                                    })}
                                    type="text" className="form__input" placeholder="Город"/>
                                <p className="form__error">{errors.country && errors.country.message}</p>
                            </label>
                        </div>

                        <div className="form__box">
                            <h2 className="form__box-title">Номер телефона :</h2>
                            <label className="form__label">
                                <input
                                    {...register('number',{
                                        required: {
                                            message: "Напишите телефон",value: true
                                        },
                                        maxLength: {
                                            message: "Макимальная длина 10 символов", value: 10
                                        },
                                        minLength: {
                                            message: "Минмальная длина 10 символа", value: 10
                                        }})}
                                    type="number" className="form__input" placeholder="Телефон"/>
                                <p className="form__error">{errors.number && errors.number.message}</p>
                            </label>
                        </div>

                        <div className="form__box">
                            <h2 className="form__box-title">Логин :</h2>
                            <label className="form__label">
                                <input
                                    {...register('login',{required: {message: "Логин обязателен к заполнению",value: true}, maxLength:{message: "Макимальная длина 10 символов",value: 10},minLength: {message: "Минмальная длина 3 символа",value: 3}})}
                                    type="text" className="form__input" placeholder="Логин"/>
                                <p className="form__error">{errors.login && errors.login.message}</p>
                            </label>
                        </div>

                    </> : ''
            }
            <div className="form__box">
                <h2 className="form__box-title">Эл. почта :</h2>
                <label className="form__label">
                    <input
                        {...register('email', {required: {message: "Поле email обязателен к заполнению",value: true},minLength: {message: "Вы неправильно ввели свой email",value: 8},pattern: {message: "Напишите свой email правильно",value: /^[^]+@[^ ]+\.[a-z]{2,5}$/}})}
                        type="email" className="form__input" placeholder="Почта"/>
                    <p className="form__error">{errors.email && errors.email.message}</p>
                </label>
            </div>

            <div className="form__box">
                <h2 className="form__box-title">Пароль :</h2>
                <label className="form__label">
                    <input
                        {...register('password',{required: {message: "Пароль обязателен к заполнению !",value: true},pattern: {value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,message: "Пароль должен содержать не менее 6 символов, заглавную букву, число"}})}
                        type="text" className="form__input" placeholder="Пароль"/>
                    <p className="form__error">{errors.password && errors.password.message}</p>
                </label>
            </div>

            {/*<div className="form__box">*/}
            {/*    <h2 className="form__box-title">Подтвердите пароль :</h2>*/}
            {/*    <label className="form__label">*/}
            {/*        <input type="text" className="form__input" placeholder="Подтвердите пароль"/>*/}
            {/*    </label>*/}
            {/*</div>*/}

            <button className="form__btn" type="submit">

                {
                    pathname === '/register' ? "Зарегестрироваться" : "Войти"
                }
            </button>


        </form>
    );
};

export default Form;