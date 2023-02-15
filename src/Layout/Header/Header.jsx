import React from 'react';
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import {BsBellFill} from 'react-icons/bs'
import {BsChevronDoubleDown} from 'react-icons/bs'
import SwitchLang from "./SwitchLang/SwitchLang";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <div className="header__left">
                        <h1 className="header__title">PAGELOOK</h1>
                        <HeaderSearch/>
                        <SwitchLang/>
                    </div>

                    <div className="header__right">
                        <span className="header__box">
                            <BsBellFill className="header__notify"/>
                            <span className="header__count">1</span>
                        </span>

                        <span className="header__user">
                            <img className="header__img" src="https://vk.com/images/camera_200.png" alt="unimg"/>
                            <BsChevronDoubleDown className="header__down"/>
                        </span>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;