import {Link} from "react-router-dom";
import {toast} from 'react-toastify';
// import Joi from 'joi';
import React,{useState} from "react";
import styled  from 'styled-components';
import AuthContainer from "../Layout/AuthContainer";
import useAuth from '../hooks/useAuth';

const LoginStyle = styled.div`

border: 1px solid white;
width : 25%;
padding: 5rem;
height: 60%;

.login-form {
  display: flex;
  flex-direction: column;
  padding: 5 rem;
}
.auth-form-container{
  padding: 5 rem;
  border : 1px solid white ; 
  border-radius: 10 px;
  margin: 0.5 rem;
}
label {
  text-align: left;
  padding: 0.25 rem 0 ;
 }
input {
  margin : 0.5 rem 0;
  padding: 1 rem;
  border: none;
  border-radius : 5px ;
  height: 30px;
  margin-bottom: 10px;
 }
button{
    border: none;
    background-color:  white;
    padding: 20 px;
    border-radius: 5px;
    cursor: pointer;
    color: #7439db;
    height: 50px;
   }
.link-btn{
    background: none;
    color: white;
    text-decoration: underline;
   }
label{
    margin: 10px;
   }
`
export default function LoginPage() {
    const [email, setEmail]=useState('');
    const [pass,setPass]=useState('');

    const {login} = useAuth();

    const handleSubmit = async e => {
      try{
        e.preventDefault();
        await login(email, pass);
        // login success
        toast.success('success login');
      }catch(err){
        // login failed
        console.log(err)
        toast.error(err.response?.data.message);
        }
    };
    return (
      <AuthContainer>
        <LoginStyle className="auth-form-container">
          <h1>Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>

            <label htmlFor ="email">Email :</label>
            <input value = {email} onChange={e => setEmail(e.target.value)} type="email" placeholder="a@email" id = "email" name ="email" />

            <label htmlFor="password">Password :</label>
            <input value = {pass} onChange={e => setPass(e.target.value)} type="password" placeholder="********" id = "password" name = "password" />

            <button type ="submit">Login</button>
        </form>
        <Link to="/register">
        Don't have an account? Register
      </Link>
        </LoginStyle>
        </AuthContainer>
    )
  }