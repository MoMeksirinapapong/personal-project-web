import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import React, { useState } from "react";
import styled from "styled-components";
import AuthContainer from "../Layout/AuthContainer";
import Input from "../components/Input";
import validateRegister from "../validators/validate-register";
import * as authApi from "../apis/auth-api";

const RegisterStyle = styled.div`
  border: 1px solid white;
  height: 70%;
  width: 20%;
  padding: 5rem;

  .register-form {
    display: flex;
    flex-direction: column;
    padding: 5 rem;
  }
  .auth-form-container {
    padding: 5 rem;
    border: 1px solid white;
    border-radius: 10 px;
    margin: 0.5 rem;
  }
  label {
    text-align: left;
    padding: 0.25 rem 0;
  }
  input {
    margin: 0.5 rem 0;
    padding: 1 rem;
    border: none;
    border-radius: 5px;
    height: 30px;
    margin-bottom: 10px;
  }
  button {
    border: none;
    background-color: white;
    /* padding: 20 ; */
    border-radius: 5px;
    cursor: pointer;
    color: #7439db;
    height: 50px;
  }
  .link-btn {
    background: none;
    color: white;
    text-decoration: underline;
  }
  label {
    margin-top: 5px;
  }
`;
const initialInput = {
  fullname: "",
  email: "",
  password: "",
  conpass: "",
};
<registerSchema />;
export default function RegisterPage() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const [complete, setComplete] = useState(false);
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      console.log(input);

      const result = validateRegister(input);
      if (result) {
        setError(result);
      } else {
        console.log("no error");
        setError({});
        await authApi.register(input);
        console.log(input);
        setInput(initialInput);
        setComplete(true);
        toast.success("Registeration Success!");
      }
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };
  console.log(input);

  return (
    <>
      {!complete || <Navigate to="/login" />}
      <AuthContainer>
        <RegisterStyle className="auth-form-container">
          <form className="register-form" onSubmit={handleSubmitForm}>
            <h1>Register</h1>
            <label htmlFor="name">
              <p>FULL NAME</p>
            </label>
            <Input
              placeholder="Enter fullname"
              name="fullname"
              value={input.fullname}
              onChange={handleChangeInput}
              error={error.fullname}
            />

            <label htmlFor="email">
              <p>EMAIL :</p>
            </label>
            <Input
              placeholder="Enter email"
              name="email"
              value={input.email}
              onChange={handleChangeInput}
              error={error.email}
            />

            <label htmlFor="password">
              <p>PASSWORD :</p>
            </label>
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={input.password}
              onChange={handleChangeInput}
              error={error.password}
            />

            <label htmlFor="password">
              <p>CONFIRMED PASSWORD :</p>
            </label>
            <Input
              type="password"
              placeholder="Confirmed password"
              value={input.conpass}
              onChange={handleChangeInput}
              error={error.conpass}
              name="conpass"
            />
            <br></br>
            <button type="submit">Register</button>
            <Link to="/login">Already have an account?</Link>
          </form>
        </RegisterStyle>
      </AuthContainer>
    </>
  );
}
