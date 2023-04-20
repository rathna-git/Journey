import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../reducers/userReducer.js";
import { useNavigate } from "react-router-dom";
import Dropzone from "react-dropzone";

const registerSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
    picture: yup.string().required("required"),
});
  
const loginSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
});

const initialValuesRegister = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    picture: "",
};

const initialValuesLogin = {
    email: "",
    password: "",
  };


  

const Form = () => {
  const [pageType, setPageType] = useState("login");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  const register = async(values, onSubmitProps) =>{
    //this allows us to send form info with image
    const formData = new FormData();
    for (let value in  values){
        formData.append(value, values[value]);
    }
    formData.append("picturePath", values.picture);
    const savedUserResponse = await fetch(
        "http://localhost:3001/auth/register",
        {
         method: "POST",
         body: formData,
        }
    );
    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();

    if(savedUser){
        setPageType("login");
    }
  };

  const login = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch("http://localhost:3001/auth/login",{
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    onSubmitProps.resetForm();
    if(loggedIn){
        dispatch(
            setLogin({
                user: loggedIn.user,
                token: loggedIn.token,
            })
        );
        navigate('/home');
    }
  };



const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps);
    if (isRegister) await register(values, onSubmitProps);
};
    
    
return (
  <Formik
    onSubmit={handleFormSubmit}
    initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
    validationSchema={isLogin ? loginSchema : registerSchema}
   >

{({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
}) => (
 <form className="col-4" onSubmit={handleFormSubmit}> 

    {isRegister && (
    <>
    <div className="mb-4">
      <label
        htmlFor="firstName"
        className="form-label"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.firstName}>
        First Name :
      </label>
      <input type="text" className="form-control" id="firstName" aria-describedby="firstName"/>
    </div>
    <div className="mb-4">
    <label
        htmlFor="lastName"
        className="form-label"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.lastName}>
        Last Name :
      </label>
      <input type="text" className="form-control" id="lastName" aria-describedby="lastName"/>                      
    </div>
   
      <div className="mb-4">
        <label
          htmlFor="formFile"
          className="form-label"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.picture}>
          Profile Picture :
       </label>
      <input type="file" className="form-control" id="formFile" aria-describedby="picture"/>
      </div>
    </>
    )}
    <div className="mb-4">
      <label
          htmlFor="email"
          className="form-label"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}>
          Email :
       </label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
    </div>
    <div className="mb-4">
      <label
          htmlFor="password"
          className="form-label"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          name="password">
          Password :
       </label>
        <input type="password" className="form-control" id="password" aria-describedby="password"/>
    </div>
    <div>
        <button type="submit" className="btn btn-xl btn-primary">{isLogin ? "LOGIN" : "REGISTER"}</button>
    </div>
    <div className='mt-5 signup'>
      <a href="#"
      onClick={() => {
        setPageType(isLogin ? "register" : "login");
        resetForm();
      }}>
     {isLogin 
     ? "Don't have an account? Sign Up here."
     : "Already have an account? Login here."}
     </a>
    </div>
 </form> 
 )}
 
 </Formik>
)
}

export default Form;