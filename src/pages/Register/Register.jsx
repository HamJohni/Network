import React from 'react';
import Form from "../../components/Form/Form";
import SwitchLang from "../../Layout/Header/SwitchLang/SwitchLang";

const Register = () => {
    return (
        <section className="register">
            <span className="register__language"><SwitchLang/></span>
            <Form/>
        </section>
    );
};

export default Register;